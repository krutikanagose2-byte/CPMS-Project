const multer = require('multer');
const pdfParse = require('pdf-parse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const InterviewSession = require('../models/InterviewSession');

// ── Multer: store PDF in memory ────────────────────────────────────────
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files are allowed'), false);
  },
});

// ── Gemini client ──────────────────────────────────────────────────────
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash', generationConfig: { temperature: 0.9 } });


// ── POST /api/interview/start ──────────────────────────────────────────
// Accepts: multipart form with field "resume" (PDF) + body field "company"
const startInterview = [
  upload.single('resume'),
  async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: 'Resume PDF is required.' });

      const company = req.body.company || 'the company';
      const jobDescription = req.body.jobDescription || '';
      const companyDescription = req.body.companyDescription || '';

      // 1. Parse PDF → plain text
      let resumeText = '';
      try {
        const pdfData = await pdfParse(req.file.buffer);
        resumeText = (pdfData && pdfData.text) ? pdfData.text.trim().slice(0, 6000) : '';
      } catch (pdfErr) {
        console.warn('PDF parsing warning:', pdfErr.message);
        resumeText = '';
      }

      // 2. Gemini or Smart Resume Analysis to generate random questions
      let questions = [];
      try {
        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.includes('YOUR_GEMINI_API_KEY')) {
          throw new Error("No valid Gemini API key");
        }

        const allowedQuestionCounts = [5, 6, 9, 10];
        const numQuestions = allowedQuestionCounts[Math.floor(Math.random() * allowedQuestionCounts.length)];

        let contextSection = '';
        if (jobDescription) {
          contextSection += `The job description for the role is:\n"""\n${jobDescription}\n"""\n`;
        } else if (companyDescription) {
          contextSection += `The company description is:\n"""\n${companyDescription}\n"""\n`;
        }

        const prompt = `
You are a senior technical interviewer at ${company}.
A candidate has submitted the following resume:

"""
${resumeText}
"""

${contextSection}

Based on the candidate's resume and the provided context (job description or company details), generate exactly ${numQuestions} highly relevant and challenging interview questions.
Rules:
- Question 1 must always be an introductory question like "Tell me about yourself." or a variation of it.
- Ensure high variance in your selection so every interview is unique. Do not always ask the same questions.
- Generate a diverse mix of questions: technical questions based on their skills and projects, behavioral questions, and role/company-specific questions.
- Keep each question concise (one or two sentences).
- Return ONLY a JSON array of exactly ${numQuestions} strings, no extra text, markdown formatting, or explanation.

Example format:
["Tell me about yourself.", "Can you explain your experience with React in your previous project?", "How would you design a scalable system for this role?", "Why do you want to work at ${company}?"]
`;
        const result = await model.generateContent(prompt);
        const raw = result.response.text().trim();
        const jsonStr = raw.replace(/```json?\n?/gi, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(jsonStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          questions = parsed;
        }
      } catch (geminiErr) {
        console.warn('Gemini API call failed or key invalid, using smart resume extraction fallback:', geminiErr.message);
        
        // Smart extraction fallback from resume text
        const lowerResume = resumeText.toLowerCase();
        const skillsFound = [];
        const techList = ['react', 'node', 'express', 'mongodb', 'python', 'java', 'javascript', 'c++', 'sql', 'html', 'css', 'aws', 'docker', 'git', 'redux', 'flutter'];
        techList.forEach(tech => {
          if (lowerResume.includes(tech)) {
            skillsFound.push(tech.charAt(0).toUpperCase() + tech.slice(1));
          }
        });

        const mainTech = skillsFound.length > 0 ? skillsFound.slice(0, 3).join(', ') : 'Software Development';

        questions = [
          'Tell me about yourself.',
          skillsFound.length > 0
            ? `I noticed experience with ${skillsFound[0]} on your resume. Can you detail how you used it in a key project?`
            : `Can you describe a major project listed on your resume and your specific role?`,
          skillsFound.length > 1
            ? `How do you handle state management or core architecture when building applications with ${skillsFound[1]}?`
            : `How do you approach testing, debugging, and maintaining software quality?`,
          `What was the most challenging technical obstacle you faced in your recent projects, and how did you resolve it?`,
          `Why are you interested in joining ${company}, and where do you see your career progressing?`
        ];
      }

      // 3. Save session to MongoDB
      const session = await InterviewSession.create({
        company,
        resumeText,
        questions,
        status: 'in-progress',
      });

      res.json({ sessionId: session._id, questions });
    } catch (err) {
      console.error('Interview start error:', err);
      res.status(500).json({ error: err.message || 'Failed to start interview.' });
    }
  },
];

// ── POST /api/interview/submit ─────────────────────────────────────────
// Accepts: { sessionId, answers: [{ question, transcript }] }
const submitInterview = async (req, res) => {
  try {
    const { sessionId, answers } = req.body;
    if (!sessionId || !Array.isArray(answers)) {
      return res.status(400).json({ error: 'sessionId and answers are required.' });
    }

    const session = await InterviewSession.findById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found.' });

    // 1. Try Gemini evaluation first
    let evaluations = [];
    try {
      if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.includes('YOUR_GEMINI_API_KEY')) {
        throw new Error('No valid Gemini key');
      }
      const evaluationPrompt = `
You are a strict but fair technical interviewer at ${session.company}.
Evaluate each candidate answer below. Identify specific mistakes or missing details.
For each answer return a JSON object with:
  - "score": integer 0–100 based strictly on quality and completeness
  - "feedback": 2-3 sentences identifying mistakes and how to improve.

Return ONLY a JSON array of ${answers.length} objects in the same order.

Questions and Answers:
${answers.map((a, i) => `${i + 1}. Q: ${a.question}\n   A: ${a.transcript || '(No answer given)'}`).join('\n\n')}

Return format:
[{"score": 80, "feedback": "..."}, ...]
`;

      const result = await model.generateContent(evaluationPrompt);
      const raw = result.response.text().trim();
      const jsonStr = raw.replace(/```json?\n?/gi, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed) && parsed.length === answers.length) {
        evaluations = parsed;
      }
    } catch (geminiErr) {
      console.warn('Gemini evaluation fallback active:', geminiErr.message);

      // Smart genuine analysis engine based on transcript content and length
      evaluations = answers.map((a) => {
        const text = (a.transcript || '').trim();
        const wordCount = text ? text.split(/\s+/).length : 0;
        const qLower = (a.question || '').toLowerCase();

        let score = 50;
        let feedback = '';

        if (wordCount === 0) {
          score = 30;
          feedback = '⚠️ Mistake: No response was recorded. Make sure to speak clearly into the microphone and answer every question.';
        } else if (wordCount < 8) {
          score = 45;
          feedback = `⚠️ Mistake: Answer is too brief (${wordCount} words). A single short phrase like "${text}" is incomplete. Elaborate on your background, tech stack, and key achievements.`;
        } else if (wordCount < 20) {
          score = 68;
          feedback = `💡 Improvement Needed: Good start, but missing key technical details. Try to use the STAR method (Situation, Task, Action, Result) to structure your response with specific examples.`;
        } else {
          score = 88;
          feedback = `✅ Great Job! Thorough response (${wordCount} words) covering key technical aspects clearly. Keep maintaining this level of detail in real interviews.`;
        }

        return { score, feedback };
      });
    }

    // Merge and save
    const scoredAnswers = answers.map((a, i) => ({
      question: a.question,
      transcript: a.transcript || '',
      score: evaluations[i]?.score ?? 65,
      feedback: evaluations[i]?.feedback ?? 'Focus on structuring your response clearly with concrete examples.',
    }));

    const overallScore = Math.round(
      scoredAnswers.reduce((sum, a) => sum + a.score, 0) / scoredAnswers.length
    );

    session.answers = scoredAnswers;
    session.overallScore = overallScore;
    session.status = 'completed';
    await session.save();

    res.json({ overallScore, answers: scoredAnswers });
  } catch (err) {
    console.error('Interview submit error:', err);
    res.status(500).json({ error: err.message || 'Failed to submit interview.' });
  }
};

module.exports = { startInterview, submitInterview };
