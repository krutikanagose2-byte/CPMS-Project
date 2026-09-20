const multer = require('multer');
const pdfParse = require('pdf-parse');
const Groq = require('groq-sdk');
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

// ── Groq client ────────────────────────────────────────────────────────
const groq = null; // Instantiated locally when needed


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

      // 2. Groq AI or Smart Resume Analysis to generate personalized questions
      let questions = [];
      try {
        if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY.length < 10) {
          throw new Error('No valid Groq API key — using smart fallback');
        }

        const allowedQuestionCounts = [6, 7, 8, 9, 10];
        const numQuestions = allowedQuestionCounts[Math.floor(Math.random() * allowedQuestionCounts.length)];

        let contextSection = '';
        if (jobDescription) {
          contextSection += `\nThe job description for this specific role is:\n"""\n${jobDescription.slice(0, 3000)}\n"""\n`;
        }
        if (companyDescription) {
          contextSection += `\nAdditional context about the company:\n"""\n${companyDescription.slice(0, 1000)}\n"""\n`;
        }

        const prompt = `You are a senior technical interviewer at ${company}.

A candidate has submitted the following resume:
"""
${resumeText}
"""
${contextSection}

Your task: Generate exactly ${numQuestions} interview questions SPECIFICALLY tailored to THIS candidate.

STRICT RULES:
1. First question MUST be: "Tell me about yourself."
2. READ the resume carefully — identify the candidate's actual projects, technologies, education, certifications, and work experience.
3. If a job description is provided, map the required skills to the candidate's background.
4. Mix the following question types across the ${numQuestions} questions:
   - 2-3 technical deep-dives on their ACTUAL tech stack (reference specific projects/skills from the resume)
   - 1-2 behavioral/STAR questions (tell me about a time...)
   - 1-2 core CS subject questions from: DBMS (SQL, normalization, ACID, joins), OS (process/thread, deadlock, scheduling), Computer Networks (OSI, TCP/UDP, HTTP), OOP (4 pillars, overloading vs overriding), Data Structures (array vs linked list, BST, BFS/DFS), or Algorithms (time complexity, sorting, Big-O)
   - 1 motivation/company-fit question
5. Each question must feel like it was written by a human who READ this resume — not a template.
6. Keep each question to 1-2 sentences.
7. Return ONLY a valid JSON array of exactly ${numQuestions} question strings. No markdown, no explanation, no extra text.

Example of expected quality (do NOT copy — generate from ACTUAL resume):
- "Tell me about yourself."
- "Your resume mentions a React project with Redux — how did you handle complex state updates and what challenges did you face?"
- "The job description requires Node.js. Walk me through how you structured the REST API in your last project."
- "What is the difference between a process and a thread? How is this relevant to your backend work?"
- "Explain ACID properties in a database — have you dealt with transaction handling in any of your projects?"
- "Tell me about a time you had a tight deadline and had to prioritize what to build."
- "Why do you want to join ${company} and where do you see yourself in 3 years?"

Generate questions now based on the ACTUAL resume above:`;

        const groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
        const completion = await groqClient.chat.completions.create({
          model: 'groq/compound',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.85,
          max_tokens: 1024,
        });
        const raw = completion.choices[0]?.message?.content?.trim() || '';
        const jsonStr = raw.replace(/```json?\n?/gi, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(jsonStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          questions = parsed;
          console.log(`[Groq] Generated ${questions.length} questions successfully`);
        } else {
          throw new Error('Groq returned invalid questions array');
        }
      } catch (geminiErr) {
        console.warn('Gemini question generation failed, using smart resume-based fallback:', geminiErr.message);

        // ── Deep resume + JD analysis fallback ────────────────────────────
        const lowerResume = resumeText.toLowerCase();
        const lowerJD = jobDescription.toLowerCase();

        // Extract technologies from resume
        const techKeywords = [
          'react', 'angular', 'vue', 'next.js', 'node', 'express', 'django', 'flask', 'spring',
          'mongodb', 'postgresql', 'mysql', 'redis', 'firebase', 'python', 'java', 'javascript',
          'typescript', 'c++', 'c#', 'sql', 'html', 'css', 'aws', 'azure', 'gcp', 'docker',
          'kubernetes', 'git', 'redux', 'flutter', 'kotlin', 'swift', 'rust', 'go', 'graphql',
          'rest api', 'machine learning', 'tensorflow', 'pytorch', 'linux', 'jenkins', 'ci/cd'
        ];
        const resumeSkills = techKeywords.filter(t => lowerResume.includes(t));

        // Extract technologies from job description
        const jdSkills = techKeywords.filter(t => lowerJD.includes(t));
        const matchedSkills = resumeSkills.filter(s => jdSkills.includes(s));
        const unmatchedJDSkills = jdSkills.filter(s => !resumeSkills.includes(s));

        // ── Smart Project Extractor ────────────────────────────────────────
        // Step 1: Try to find the Projects section of the resume
        const lines = resumeText.split('\n').map(l => l.trim()).filter(Boolean);
        let inProjectSection = false;
        const projectEntries = []; // { name, techStack, description }
        let currentProject = null;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          const lline = line.toLowerCase();

          // Detect section headers (Projects / Personal Projects / Academic Projects)
          if (/^(projects?|personal projects?|academic projects?|key projects?|major projects?|notable projects?)\s*:?\s*$/i.test(line)) {
            inProjectSection = true;
            currentProject = null;
            continue;
          }
          // Detect when we leave the projects section (new major section)
          if (inProjectSection && /^(education|experience|work experience|skills|certifications?|achievements?|awards?|publications?|references?|interests?|hobbies|contact|summary|objective)\s*:?\s*$/i.test(line)) {
            if (currentProject) projectEntries.push(currentProject);
            inProjectSection = false;
            currentProject = null;
            continue;
          }

          if (inProjectSection) {
            // A project title is usually: short (< 60 chars), starts with capital, not a bullet detail
            const isTitle = line.length < 80 &&
              /^[A-Z]/.test(line) &&
              !/^(built|developed|created|implemented|used|designed|features|technologies|tech stack|•|-|\*|→)/i.test(line) &&
              line.split(' ').length <= 10;

            if (isTitle && !currentProject) {
              currentProject = { name: line, techStack: [], description: '' };
            } else if (isTitle && currentProject && currentProject.techStack.length === 0 && currentProject.description === '') {
              // Another title before we got details — save previous, start new
              if (currentProject.name) projectEntries.push(currentProject);
              currentProject = { name: line, techStack: [], description: '' };
            } else if (currentProject) {
              // Accumulate description lines
              currentProject.description += (currentProject.description ? ' ' : '') + line;
              // Extract tech from this line
              techKeywords.forEach(tech => {
                if (line.toLowerCase().includes(tech) && !currentProject.techStack.includes(tech)) {
                  currentProject.techStack.push(tech);
                }
              });
              // Also detect tech from common separators like "Tech: React, Node, MongoDB"
              const techLineMatch = line.match(/(?:tech(?:nologies?)?|stack|tools?|built with|using)\s*:?\s*(.+)/i);
              if (techLineMatch) {
                techLineMatch[1].split(/[,|/\s]+/).forEach(word => {
                  const w = word.toLowerCase().trim();
                  if (techKeywords.includes(w) && !currentProject.techStack.includes(w)) {
                    currentProject.techStack.push(w);
                  }
                });
              }
            }
          }
        }
        if (currentProject && inProjectSection) projectEntries.push(currentProject);

        // Fallback: if no Projects section found, scan all lines for project-like entries
        if (projectEntries.length === 0) {
          lines.forEach(line => {
            if (/\b(project|built|developed|created|implemented)\b/i.test(line) && line.length > 20 && line.length < 120) {
              const techFound = techKeywords.filter(t => line.toLowerCase().includes(t));
              projectEntries.push({
                name: line.slice(0, 70),
                techStack: techFound,
                description: line
              });
            }
          });
        }

        console.log(`[Interview] Extracted ${projectEntries.length} projects from resume:`, projectEntries.map(p => p.name));

        // \u2500\u2500 Build personalized + randomized questions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
        const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
        // Fisher-Yates shuffle then slice — ensures no duplicates
        const shuffle = (arr) => {
          const a = [...arr];
          for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        };

        const fallbackQuestions = [];

        // ── Q1: Always intro ──────────────────────────────────────────
        fallbackQuestions.push('Tell me about yourself.');

        // ── Q2: Resume skill deep-dive (from large pool per tech) ─────
        const techQuestionPools = {
          react:    ['What are React hooks and which ones have you used most in your projects?',
                     'How do you manage global state in React \u2014 have you used Redux, Context API, or Zustand?',
                     'Explain the React component lifecycle and when you would use useEffect.',
                     'How do you optimize performance in a React app? What techniques have you applied?'],
          node:     ['How does Node.js handle asynchronous operations? Can you explain the event loop?',
                     'Describe how you structure a REST API in Express \u2014 routes, middleware, controllers.',
                     'How do you handle errors in a Node.js/Express application?',
                     'What is the difference between callbacks, Promises, and async/await in Node.js?'],
          express:  ['How do you implement authentication middleware in Express?',
                     'Explain how you handle file uploads and request validation in Express.',
                     'How would you structure a large Express application for maintainability?'],
          mongodb:  ['What is the difference between SQL and MongoDB? When would you choose MongoDB?',
                     'How do you design a schema in MongoDB for a many-to-many relationship?',
                     'Explain MongoDB aggregation pipelines \u2014 have you used them in a project?',
                     'How do you handle indexing in MongoDB for query performance?'],
          python:   ['What are Python decorators and when have you used them?',
                     'Explain list comprehensions and generators in Python with an example from your work.',
                     'How do you manage dependencies and virtual environments in Python projects?',
                     'Describe your experience with a Python framework like Django or Flask.'],
          java:     ['Explain OOP principles \u2014 how have you applied inheritance and polymorphism in Java?',
                     'What is the difference between an interface and an abstract class in Java?',
                     'How does Java handle memory management and garbage collection?',
                     'Describe your experience with Spring Boot or any Java framework.'],
          javascript:['Explain closures in JavaScript with an example from your code.',
                      'What is the difference between == and === in JavaScript? Why does it matter?',
                      'How do Promises and async/await work in JavaScript? When would you use each?',
                      'Explain event delegation and the event loop in JavaScript.'],
          typescript:['Why would you choose TypeScript over JavaScript? What benefits have you seen?',
                      'Explain interfaces vs types in TypeScript and when to use each.',
                      'How do generics work in TypeScript? Give an example from your project.'],
          sql:      ['Write a mental walkthrough of a JOIN query you\u2019ve used in a real project.',
                     'What is database indexing and how does it improve query performance?',
                     'Explain the difference between INNER JOIN, LEFT JOIN, and FULL OUTER JOIN.',
                     'How do you handle database migrations in your projects?'],
          docker:   ['What is the difference between a Docker image and a container?',
                     'How have you used Docker in your development workflow or deployment?',
                     'Explain how you would write a Dockerfile for a Node.js application.'],
          aws:      ['Which AWS services have you used and what were they used for in your projects?',
                     'How does AWS S3 differ from EC2? When would you use each?',
                     'Describe how you would deploy a web application to AWS.'],
          flutter:  ['How does the Flutter widget tree work? What is the difference between StatefulWidget and StatelessWidget?',
                     'How do you manage state in Flutter \u2014 have you used Provider, Bloc, or Riverpod?',
                     'Describe how you handled API calls and async data in a Flutter project.'],
          git:      ['Explain your branching strategy in team projects. How do you handle merge conflicts?',
                     'What is the difference between git merge and git rebase? When do you use each?',
                     'Describe a time a git mistake caused issues and how you recovered.'],
        };

        if (resumeSkills.length > 0) {
          const primary = resumeSkills[0];
          const pool = techQuestionPools[primary];
          if (pool) fallbackQuestions.push(pick(pool));
          else fallbackQuestions.push(`Your resume shows experience with ${primary.toUpperCase()} \u2014 walk me through a specific challenge you solved using it.`);
        } else {
          fallbackQuestions.push('Can you describe the most complex technical project on your resume and your specific contributions?');
        }

        // ── Q3: Second skill varied question ──────────────────────────
        if (resumeSkills.length > 1) {
          const second = resumeSkills[1];
          const pool2 = techQuestionPools[second];
          const q3 = pool2 ? pick(pool2) : `How have you applied ${second.toUpperCase()} in a real project? Describe a specific example.`;
          fallbackQuestions.push(q3);
        } else {
          const generalTechQ = [
            'How do you approach debugging a production issue you\u2019ve never seen before?',
            'Describe your code review process. What do you look for when reviewing others\u2019 code?',
            'How do you ensure code quality in your projects? What tools or practices do you use?',
            'Explain how you approach learning a new technology or framework.',
          ];
          fallbackQuestions.push(pick(generalTechQ));
        }

        // ── Q4: JD-relevant question ──────────────────────────────────
        if (matchedSkills.length > 0) {
          const matched = pick(matchedSkills);
          const matchPool = techQuestionPools[matched];
          if (matchPool) fallbackQuestions.push(pick(matchPool));
          else fallbackQuestions.push(`This role requires ${matched}. How has your experience prepared you to contribute immediately in this area?`);
        } else if (unmatchedJDSkills.length > 0) {
          const gap = pick(unmatchedJDSkills);
          fallbackQuestions.push(`The role mentions ${gap} as a requirement. While building up experience, how would you approach learning it quickly to meet team expectations?`);
        } else {
          const problemSolvingQ = [
            'What was the hardest bug you ever had to fix? Walk me through how you found and resolved it.',
            'Tell me about a time your code caused a production issue. How did you debug and fix it?',
            'How do you handle performance bottlenecks in an application?',
          ];
          fallbackQuestions.push(pick(problemSolvingQ));
        }

        // ── Q5 & Q5b: Specific Named-Project Questions ────────────────
        // Build questions from ACTUAL projects extracted from the resume
        const projectQuestionTemplates = [
          (p) => `I see you built "${p.name}"${p.techStack.length ? ` using ${p.techStack.slice(0,3).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(', ')}` : ''} — walk me through the overall architecture and one major challenge you solved.`,
          (p) => `Tell me about your "${p.name}" project — what was your specific role, how did you structure the codebase, and what would you do differently if you built it today?`,
          (p) => `In your "${p.name}" project, how did you handle${p.techStack.includes('mongodb') || p.techStack.includes('sql') || p.techStack.includes('mysql') || p.techStack.includes('postgresql') ? ' the database design and data relationships?' : p.techStack.includes('react') || p.techStack.includes('angular') || p.techStack.includes('flutter') ? ' state management and the user interface components?' : ' the most technically complex feature?'}`,
          (p) => `What was the biggest technical challenge you faced while building "${p.name}" and how did you overcome it? What did you learn from that experience?`,
          (p) => `How did you test, debug, and deploy "${p.name}"? If you had to make it production-ready for 10,000 users, what would you change?`,
        ];

        if (projectEntries.length > 0) {
          // Shuffle templates so each interview uses a different order
          const shuffledTemplates = shuffle([...projectQuestionTemplates]);

          // Q5 — First project with template[0] from shuffled list
          const proj1 = projectEntries[0];
          fallbackQuestions.push(shuffledTemplates[0](proj1));

          // Q5b — Second project (or depth question on proj1) with template[1]
          if (projectEntries.length > 1) {
            const proj2 = projectEntries[1];
            fallbackQuestions.push(shuffledTemplates[1](proj2)); // guaranteed different template
          } else {
            // Only one project — ask a depth follow-up with a different template
            fallbackQuestions.push(shuffledTemplates[1](proj1));
          }
        } else {
          // No projects extracted — use generic architecture questions
          const architecturePool = [
            'Describe the architecture of the most complex project you have built. What trade-offs did you make?',
            'How do you decide between a monolithic and a microservices architecture for a new project?',
            'If your application suddenly needed to handle 10x more traffic, what changes would you make?',
            'How do you think about API design? What makes a good REST API?',
          ];
          fallbackQuestions.push(pick(architecturePool));
          fallbackQuestions.push('Describe a project you are most proud of — what technical decisions did you make and what would you do differently today?');
        }


        // ── Q6: Behavioral STAR \u2014 large randomized pool ──────────────
        const behavioralPool = shuffle([
          'Tell me about a time you had a tight deadline and had to make trade-offs. How did you handle it?',
          'Describe a situation where you disagreed with a teammate on a technical approach. How did you resolve it?',
          'Give an example of when you received critical feedback on your code. How did you respond?',
          'Tell me about a time you had to learn a new technology very quickly. How did you approach it?',
          'Describe a project that failed or didn\u2019t go as planned. What did you learn from it?',
          'Tell me about a time you identified and fixed a significant bug before it reached production.',
          'Describe a time you had to explain a complex technical concept to a non-technical stakeholder.',
          'Give an example of when you proactively improved something that wasn\u2019t part of your task.',
          'Tell me about a time you had to work with a difficult team member. How did you handle it?',
          'Describe a situation where you had to make a decision with incomplete information.',
        ]);
        fallbackQuestions.push(behavioralPool[0]); // always picks differently due to shuffle

        // ── Q7: Motivation / company-fit ─────────────────────────────
        const motivationPool = [
          `Why are you specifically interested in joining ${company}, and how does this role align with your career goals?`,
          `Where do you see yourself in 3–5 years, and how does this position at ${company} fit that path?`,
          `What excites you most about this opportunity at ${company}? What do you hope to learn or contribute?`,
          `Why are you looking for a new role right now, and what makes ${company} stand out to you?`,
        ];
        fallbackQuestions.push(pick(motivationPool));

        // ── Q8 & Q9: Core CS Subject Questions (randomly picked) ──────
        // Large bank of 60 questions across 6 subjects — 2 are picked randomly per session
        const csCoreBank = {
          DBMS: [
            'What is a primary key and how is it different from a foreign key? Give an example.',
            'What is normalization? Explain 1NF, 2NF, and 3NF with a simple example.',
            'Explain ACID properties in a database transaction. Why are they important?',
            'What is the difference between DELETE, DROP, and TRUNCATE in SQL?',
            'What is a JOIN in SQL? Explain INNER JOIN, LEFT JOIN, and RIGHT JOIN with examples.',
            'What is an index in a database and why is it used? What are its trade-offs?',
            'What is the difference between DBMS and RDBMS?',
            'Explain the concept of database transactions and when you would use them.',
            'What is DDL vs DML vs DCL vs TCL in SQL? Give examples of each.',
            'What is a stored procedure and when would you use one over a regular query?',
          ],
          OS: [
            'What is the difference between a process and a thread?',
            'What is a deadlock? Explain the four necessary conditions for a deadlock to occur.',
            'Explain process scheduling. What is the difference between FCFS, SJF, and Round Robin?',
            'What is virtual memory and how does paging work?',
            'What is context switching and when does it happen?',
            'What is the difference between stack memory and heap memory?',
            'What is multitasking vs multiprocessing vs multithreading?',
            'What is a semaphore? How does it help in process synchronization?',
            'Explain the concept of thrashing in an operating system.',
            'What is the difference between a preemptive and non-preemptive scheduling algorithm?',
          ],
          CN: [
            'Explain the OSI model. What are its 7 layers and what does each do?',
            'What is the difference between TCP and UDP? When would you use each?',
            'What is the difference between HTTP and HTTPS?',
            'What is DNS and how does it resolve a domain name to an IP address?',
            'What is the difference between IPv4 and IPv6?',
            'What is a MAC address and how is it different from an IP address?',
            'What is the TCP/IP model? How does it differ from the OSI model?',
            'What is the difference between a router, a switch, and a hub?',
            'What is a subnet mask and what is it used for?',
            'Explain the three-way handshake in TCP.',
          ],
          OOP: [
            'Explain the four pillars of Object-Oriented Programming: Encapsulation, Inheritance, Polymorphism, Abstraction.',
            'What is the difference between method overloading and method overriding?',
            'What is the difference between a class and an object?',
            'What is encapsulation and why is it important in OOP?',
            'What is inheritance? Explain single, multiple, and multilevel inheritance.',
            'What is polymorphism? Explain compile-time vs runtime polymorphism.',
            'What is abstraction? How is it achieved in Java or C++?',
            'What is the difference between an interface and an abstract class?',
            'What is a constructor and what is a destructor?',
            'Explain the concept of "IS-A" vs "HAS-A" relationships in OOP.',
          ],
          DSA: [
            'What is the difference between an array and a linked list? When would you use each?',
            'What is a stack? Give two real-world examples of stack usage.',
            'What is a queue? Explain the difference between a queue and a stack.',
            'What is a binary search tree (BST)? Explain insertion and search operations.',
            'What is the difference between BFS and DFS? When would you use each?',
            'What is hashing? What is a hash collision and how is it resolved?',
            'What is a tree? What is the difference between a binary tree and a BST?',
            'What is a graph? Explain directed vs undirected graphs.',
            'What is a doubly linked list and how does it differ from a singly linked list?',
            'Explain the concept of dynamic programming. Give a simple example.',
          ],
          Algorithms: [
            'What is time complexity? Explain Big-O notation with examples.',
            'What is space complexity and why does it matter?',
            'Explain the difference between linear search and binary search. What are their time complexities?',
            'Explain bubble sort. What is its best and worst case time complexity?',
            'What is merge sort? How does it differ from quick sort?',
            'What is recursion? Explain with a factorial or Fibonacci example.',
            'What is the difference between O(n) and O(log n) algorithms?',
            'Explain selection sort and insertion sort. How do they compare?',
            'What is a greedy algorithm? Give an example.',
            'What is the difference between a stable and an unstable sorting algorithm?',
          ],
        };

        // Pick 2 random subjects (without repeat) and 1 random question from each
        const subjectKeys = shuffle(Object.keys(csCoreBank));
        const chosenSubjects = subjectKeys.slice(0, 2);
        chosenSubjects.forEach(subject => {
          fallbackQuestions.push(pick(csCoreBank[subject]));
        });

        questions = fallbackQuestions;


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

      // ── Question-aware scoring engine ─────────────────────────────────
      evaluations = answers.map((a) => {
        const text = (a.transcript || '').trim();
        const words = text ? text.split(/\s+/) : [];
        const wordCount = words.length;
        const question = (a.question || '');
        const qLower = question.toLowerCase();
        const tLower = text.toLowerCase();

        // No answer at all
        if (wordCount === 0) {
          return {
            score: 0,
            feedback: `⚠️ No response recorded for: "${question.slice(0, 60)}". Please speak clearly into the microphone — even a brief answer is better than silence.`
          };
        }

        let score = 35; // base
        const feedbackParts = [];

        // ══════════════════════════════════════════════════════════════
        // STEP 1 — Detect question type from the question text itself
        // ══════════════════════════════════════════════════════════════
        const isIntro      = /tell me about yourself/i.test(qLower);
        const isBehavioral = /(tell me about a time|describe a (situation|time)|give an example|have you ever|when you (had to|faced|dealt)|how did you handle)/i.test(qLower);
        const isMotivation = /(why (do|are|would) you|why this (company|role)|where do you see yourself|career goal|interested in (joining|this)|what attracts you)/i.test(qLower);
        const isDesign     = /(design|architecture|scalab|system|how would you build|how would you approach)/i.test(qLower);
        const isTechnical  = !isIntro && !isBehavioral && !isMotivation && !isDesign;

        // ══════════════════════════════════════════════════════════════
        // STEP 2 — Extract topic keywords FROM the question
        //          (so scoring matches exactly what was asked)
        // ══════════════════════════════════════════════════════════════
        const topicMap = [
          { pattern: /\breact\b/i,               label: 'React',          terms: ['react', 'component', 'hook', 'usestate', 'useeffect', 'props', 'jsx', 'redux', 'virtual dom', 'context', 'render', 'state'] },
          { pattern: /\bnode(\.?js)?\b|\bexpress\b/i, label: 'Node.js/Express', terms: ['node', 'express', 'server', 'middleware', 'route', 'request', 'response', 'npm', 'api', 'rest', 'http', 'callback', 'async'] },
          { pattern: /\bmongo(db)?\b/i,           label: 'MongoDB',        terms: ['mongodb', 'mongoose', 'schema', 'collection', 'document', 'query', 'aggregation', 'index', 'crud', 'nosql'] },
          { pattern: /\b(sql|mysql|postgresql|database)\b/i, label: 'SQL/Database', terms: ['sql', 'query', 'table', 'join', 'index', 'database', 'relation', 'transaction', 'primary key', 'foreign key', 'normalize'] },
          { pattern: /\bpython\b/i,               label: 'Python',         terms: ['python', 'django', 'flask', 'pandas', 'numpy', 'function', 'class', 'library', 'pip', 'decorator', 'list'] },
          { pattern: /\bjava\b/i,                 label: 'Java',           terms: ['java', 'spring', 'class', 'object', 'inheritance', 'interface', 'jvm', 'oop', 'exception', 'thread', 'collection'] },
          { pattern: /\b(javascript|typescript|js|ts)\b/i, label: 'JavaScript', terms: ['javascript', 'typescript', 'async', 'promise', 'closure', 'event', 'dom', 'es6', 'arrow function', 'callback', 'prototype'] },
          { pattern: /\b(docker|kubernetes|k8s|devops|ci\/cd|pipeline)\b/i, label: 'DevOps/Docker', terms: ['docker', 'container', 'image', 'kubernetes', 'deploy', 'ci', 'cd', 'pipeline', 'build', 'environment'] },
          { pattern: /\b(aws|azure|gcp|cloud)\b/i, label: 'Cloud',        terms: ['aws', 'cloud', 'ec2', 's3', 'lambda', 'service', 'bucket', 'deploy', 'storage', 'azure', 'gcp'] },
          { pattern: /\b(machine learning|ml|ai|deep learning|tensorflow|pytorch|neural)\b/i, label: 'ML/AI', terms: ['model', 'training', 'dataset', 'accuracy', 'neural', 'tensorflow', 'pytorch', 'classification', 'feature', 'overfitting'] },
          { pattern: /\b(git|version control|github|gitlab)\b/i, label: 'Git',  terms: ['git', 'commit', 'branch', 'merge', 'pull request', 'conflict', 'rebase', 'repository', 'push'] },
          { pattern: /\b(test|testing|unit test|tdd)\b/i, label: 'Testing',    terms: ['test', 'unit test', 'integration', 'mock', 'assert', 'jest', 'cypress', 'tdd', 'coverage', 'debug'] },
          { pattern: /\b(flutter|dart|mobile|android|ios)\b/i, label: 'Mobile', terms: ['flutter', 'dart', 'widget', 'mobile', 'android', 'ios', 'screen', 'navigation', 'state management', 'build'] },
          { pattern: /\b(api|rest|graphql|endpoint)\b/i, label: 'API Design',  terms: ['api', 'endpoint', 'rest', 'graphql', 'get', 'post', 'put', 'delete', 'request', 'response', 'status code', 'authentication'] },
          { pattern: /\b(algorithm|data structure|complexity|big o)\b/i, label: 'Algorithms', terms: ['algorithm', 'data structure', 'complexity', 'array', 'linked list', 'tree', 'graph', 'sorting', 'search', 'recursion', 'time complexity'] },
          { pattern: /\b(security|authentication|authorization|oauth|jwt)\b/i, label: 'Security', terms: ['security', 'authentication', 'authorization', 'jwt', 'token', 'oauth', 'password', 'hash', 'encryption', 'https'] },
          { pattern: /\b(performance|optimiz|cache|scalab)\b/i, label: 'Performance', terms: ['performance', 'cache', 'optimiz', 'load', 'latency', 'memory', 'cpu', 'bottleneck', 'profil', 'speed'] },
        ];

        let topicMatched = false;
        for (const topic of topicMap) {
          if (topic.pattern.test(qLower)) {
            topicMatched = true;
            const topicHits = topic.terms.filter(t => tLower.includes(t)).length;
            if (topicHits >= 4) {
              score += 22;
              feedbackParts.push(`✅ Excellent — your answer shows clear, detailed knowledge of ${topic.label}. You used ${topicHits} relevant concepts.`);
            } else if (topicHits >= 2) {
              score += 13;
              feedbackParts.push(`💡 You mentioned ${topic.label} terms but could go deeper. Try covering: ${topic.terms.slice(topicHits, topicHits + 3).join(', ')}.`);
            } else if (topicHits === 1) {
              score += 5;
              feedbackParts.push(`⚠️ The question was about ${topic.label} but you barely addressed it. Mention specific concepts like: ${topic.terms.slice(0, 4).join(', ')}.`);
            } else {
              score -= 8;
              feedbackParts.push(`⚠️ The question specifically asked about ${topic.label}, but your answer did not address it. Next time, focus on: ${topic.terms.slice(0, 4).join(', ')}.`);
            }
            break;
          }
        }

        // If no specific topic in question, give general tech bonus
        if (!topicMatched && isTechnical) {
          const generalTech = ['api', 'database', 'server', 'code', 'function', 'class', 'logic', 'bug', 'debug', 'deploy', 'test', 'implement', 'architecture', 'framework'];
          const generalHits = generalTech.filter(t => tLower.includes(t)).length;
          score += Math.min(generalHits * 3, 12);
        }

        // ══════════════════════════════════════════════════════════════
        // STEP 3 — Question-type specific quality checks
        // ══════════════════════════════════════════════════════════════

        if (isIntro) {
          const hasWho  = /\b(i am|i'm|my name)\b/i.test(text);
          const hasEdu  = /\b(degree|university|college|studied|graduate|bachelor|master|b\.?e|b\.?tech|m\.?tech|year|pursuing)\b/i.test(text);
          const hasExp  = /\b(experience|worked|internship|project|built|developed|years|fresher|student)\b/i.test(text);
          const hasGoal = /\b(looking for|interested in|excited|passionate|goal|want to|hope to|aim|aspire|joining|contribute)\b/i.test(text);
          const checks  = [hasWho, hasEdu, hasExp, hasGoal];
          score += checks.filter(Boolean).length * 3;
          if (!hasEdu)  feedbackParts.push('💡 Mention your education (college, degree, year) in your introduction.');
          if (!hasExp)  feedbackParts.push('💡 Briefly highlight a key project or internship experience.');
          if (!hasGoal) feedbackParts.push('💡 End with WHY you want this role — connect your goals to the opportunity.');
          if (checks.filter(Boolean).length === 4) feedbackParts.push('✅ Great self-intro — covered who you are, your education, experience, and motivation.');
        }

        else if (isBehavioral) {
          const hasStory  = /\b(once|one time|when i was|during my|in a project|at my|for example|there was a time|i remember)\b/i.test(text);
          const hasAction = /\b(i decided|i chose|i took|i approached|i worked|i resolved|my approach|what i did|so i)\b/i.test(text);
          const hasResult = /\b(result|outcome|ended up|eventually|finally|as a result|because of this|which led|improved|resolved|success|learned)\b/i.test(text);
          if (!hasStory)  feedbackParts.push('⚠️ Behavioral questions need a specific story/example. Start with "When I was working on..." or "There was a time..."');
          else            feedbackParts.push('✅ Good — you grounded your answer in a specific real situation.');
          if (!hasAction) feedbackParts.push('💡 Clearly state what YOU specifically did (the Action in STAR method).');
          if (!hasResult) feedbackParts.push('💡 Always end with the RESULT — what happened because of your action?');
          if (hasStory && hasAction && hasResult) { score += 10; feedbackParts.push('✅ Strong STAR structure — situation, action, and result all present.'); }
        }

        else if (isMotivation) {
          const hasCompany  = /\b(company|product|culture|mission|values|team|known for|impressed|work|innovation|impact|growth)\b/i.test(text);
          const hasPersonal = /\b(passionate|love|enjoy|excited|align|goals|career|aspire|see myself|contribute|grow|learn)\b/i.test(text);
          if (!hasCompany)  feedbackParts.push('⚠️ Show you researched the company — mention something specific about their product, culture, or values.');
          else              feedbackParts.push('✅ Good — you referenced the company/role context.');
          if (!hasPersonal) feedbackParts.push('💡 Personalize it — connect this role to your own career aspirations and what you want to learn/achieve.');
          if (hasCompany && hasPersonal) { score += 8; feedbackParts.push('✅ Well-balanced motivation answer.'); }
        }

        else if (isDesign) {
          const hasComponents  = /\b(component|service|layer|module|database|cache|load balancer|queue|api gateway|microservice)\b/i.test(text);
          const hasTradeoffs   = /\b(trade.?off|because|chose|vs|instead of|better than|limitation|constraint|scale|downside|benefit)\b/i.test(text);
          const hasScalability = /\b(scale|scalab|traffic|load|millions|thousand|horizontal|vertical|shard|replica|partition)\b/i.test(text);
          if (!hasComponents)  feedbackParts.push('⚠️ For system design, name the key components you would use (e.g. database, cache, load balancer, API).');
          if (!hasTradeoffs)   feedbackParts.push('💡 Discuss trade-offs — why did you choose one approach over another?');
          if (hasScalability)  { score += 8; feedbackParts.push('✅ Good — you considered scalability in your design.'); }
          else                 feedbackParts.push('💡 Address how your design would handle scale (many users/requests).');
        }

        // ══════════════════════════════════════════════════════════════
        // STEP 4 — Answer length scoring (up to +15 pts)
        // ══════════════════════════════════════════════════════════════
        if (wordCount >= 80)       score += 15;
        else if (wordCount >= 50)  score += 11;
        else if (wordCount >= 30)  score += 7;
        else if (wordCount >= 15)  score += 3;
        else {
          score += 1;
          feedbackParts.push(`⚠️ Answer too short (${wordCount} words). Aim for at least 50 words — interviewers expect detailed responses.`);
        }

        // ══════════════════════════════════════════════════════════════
        // STEP 5 — Filler word penalty (up to -8 pts)
        // ══════════════════════════════════════════════════════════════
        const fillerMatches = tLower.match(/\b(um+|uh+|like|you know|basically|honestly|literally|kind of|sort of|i mean|so yeah|right\?)\b/g) || [];
        const fillerRatio   = fillerMatches.length / Math.max(wordCount, 1);
        const fillerPenalty = Math.min(Math.round(fillerRatio * 40), 8);
        score -= fillerPenalty;
        if (fillerPenalty >= 4) feedbackParts.push(`⚠️ Reduce filler words ("um", "uh", "like", "basically") — found ~${fillerMatches.length} instances. Practice speaking in complete sentences.`);

        // ── 5. Self-introduction quality for Q1 ───────────────────────
        if (/tell me about yourself/i.test(qLower)) {
          const hasName    = /\b(i am|i'm|my name)\b/i.test(text);
          const hasEdu     = /\b(degree|university|college|studied|graduate|bachelor|master)\b/i.test(text);
          const hasExp     = /\b(experience|worked|internship|project|built|developed|years)\b/i.test(text);
          const hasGoal    = /\b(looking|interested|excited|passionate|goal|want to|hope to|aim to)\b/i.test(text);
          const introScore = [hasName, hasEdu, hasExp, hasGoal].filter(Boolean).length;
          score += introScore * 2;
          if (!hasEdu)  feedbackParts.push('💡 Mention your educational background when introducing yourself.');
          if (!hasExp)  feedbackParts.push('💡 Include a highlight from your work/project experience in your intro.');
          if (!hasGoal) feedbackParts.push('💡 End your intro with your career goal or why you are excited about this role.');
          if (introScore === 4) feedbackParts.push('✅ Well-rounded introduction covering background, experience, and motivation.');
        }

        // ── 6. Behavioral question quality ────────────────────────────
        if (/(tell me about a time|describe a situation|give an example|how did you handle)/i.test(qLower)) {
          const hasSpecific = /\b(specifically|in particular|for example|for instance|that time|one project|one situation)\b/i.test(text);
          if (!hasSpecific) feedbackParts.push('💡 Use a specific real example from your past experience — behavioral questions need concrete stories, not general statements.');
          else feedbackParts.push('✅ Good — you used a specific example, which is exactly what behavioral questions require.');
        }

        // ── Cap score ─────────────────────────────────────────────────
        score = Math.max(5, Math.min(score, 98));

        // ── Build final feedback ───────────────────────────────────────
        let finalFeedback;
        if (feedbackParts.length > 0) {
          finalFeedback = feedbackParts.join(' ');
        } else if (score >= 80) {
          finalFeedback = `✅ Excellent answer (${wordCount} words)! You covered the question thoroughly with good depth and clarity. Keep this level of detail in your real interviews.`;
        } else if (score >= 60) {
          finalFeedback = `💡 Decent answer (${wordCount} words). To improve, add more specific examples, use the STAR method, and include relevant technical terms.`;
        } else {
          finalFeedback = `⚠️ Your answer needs more depth (${wordCount} words). Aim for at least 50+ words, use specific examples from your experience, and structure your response clearly.`;
        }

        return { score, feedback: finalFeedback };
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
