import React from 'react';
import QuizComponent from './QuizComponent';

const grammarQuestions = [
  // Part A — Grammar (Q1–Q12)
  {
    id: 1,
    text: "Choose the correct sentence.",
    options: [
      "She don't like coffee.",
      "She doesn't likes coffee.",
      "She doesn't like coffee.",
      "She not like coffee."
    ],
    answer: 2,
    explanation: "'Doesn't' is the correct negative auxiliary for the third-person singular, and it is followed by the base form of the verb 'like'.",
    difficulty: "Medium"
  },
  {
    id: 2,
    text: "Fill in the blank: The employees ___ working on the project since morning.",
    options: [
      "is",
      "are",
      "have been",
      "has been"
    ],
    answer: 2,
    explanation: "'Employees' is plural, and 'since morning' indicates an action continuing from the past, requiring the present perfect continuous tense 'have been'.",
    difficulty: "Medium"
  },
  {
    id: 3,
    text: "Choose the correct option: If I ___ enough money, I would buy a new laptop.",
    options: [
      "have",
      "had",
      "will have",
      "having"
    ],
    answer: 1,
    explanation: "This is a second conditional sentence, which uses the past simple 'had' in the if-clause.",
    difficulty: "Medium"
  },
  {
    id: 4,
    text: "Identify the error: He is senior than me in the company.",
    options: [
      "He",
      "is",
      "senior than",
      "No error"
    ],
    answer: 2,
    explanation: "The correct preposition after 'senior', 'junior', 'superior', or 'inferior' is 'to', not 'than'. It should be 'senior to me'.",
    difficulty: "Medium"
  },
  {
    id: 5,
    text: "Fill in the blank: She is good ___ solving mathematical problems.",
    options: [
      "in",
      "at",
      "on",
      "for"
    ],
    answer: 1,
    explanation: "The correct preposition to use after 'good' when talking about skills or abilities is 'at'.",
    difficulty: "Easy"
  },
  {
    id: 6,
    text: "Choose the correct passive voice: The manager approved the project.",
    options: [
      "The project approved the manager.",
      "The project was approved by the manager.",
      "The project is approved by the manager.",
      "The manager was approved by the project."
    ],
    answer: 1,
    explanation: "The object 'the project' becomes the subject, the verb becomes 'was approved' (past simple passive), and the subject 'the manager' becomes the agent.",
    difficulty: "Easy"
  },
  {
    id: 7,
    text: "Choose the correct reported speech: Rahul said, \"I am busy.\"",
    options: [
      "Rahul said that I am busy.",
      "Rahul said that he was busy.",
      "Rahul says that he was busy.",
      "Rahul said that he is busy."
    ],
    answer: 1,
    explanation: "In reported speech, the present tense 'am' changes to the past tense 'was', and the pronoun 'I' changes to 'he'.",
    difficulty: "Medium"
  },
  {
    id: 8,
    text: "Fill in the blank: Neither the manager nor the employees ___ responsible for the mistake.",
    options: [
      "is",
      "was",
      "are",
      "has"
    ],
    answer: 2,
    explanation: "In a 'neither... nor' structure, the verb agrees with the noun closest to it. Since 'employees' is plural, the verb must be plural ('are').",
    difficulty: "Hard"
  },
  {
    id: 9,
    text: "Choose the correct sentence:",
    options: [
      "She has completed her work yesterday.",
      "She completed her work yesterday.",
      "She had complete her work yesterday.",
      "She completing her work yesterday."
    ],
    answer: 1,
    explanation: "When a specific past time ('yesterday') is mentioned, the past simple tense ('completed') should be used, not the present perfect.",
    difficulty: "Medium"
  },
  {
    id: 10,
    text: "Fill in the blank: I have been living in Pune ___ 2022.",
    options: [
      "for",
      "from",
      "since",
      "by"
    ],
    answer: 2,
    explanation: "'Since' is used with a specific point in time (2022) to indicate when an action started.",
    difficulty: "Easy"
  },
  {
    id: 11,
    text: "Choose the correct article: He is ___ honest employee.",
    options: [
      "a",
      "an",
      "the",
      "no article"
    ],
    answer: 1,
    explanation: "'Honest' begins with a vowel sound (silent 'h'), so the article 'an' is required.",
    difficulty: "Easy"
  },
  {
    id: 12,
    text: "Choose the correct option: By the time we reached the station, the train ___.",
    options: [
      "leaves",
      "has left",
      "had left",
      "leaving"
    ],
    answer: 2,
    explanation: "The past perfect 'had left' is used to describe an action that was completed before another action in the past ('reached').",
    difficulty: "Hard"
  },
  
  // Part B — Comprehension (Q13–Q20)
  {
    id: 13,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #f59e0b', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage:</strong> Modern companies increasingly rely on technology to improve their efficiency and productivity. Digital tools allow employees to communicate quickly, store information securely, and automate repetitive tasks. However, technology alone cannot guarantee success. Employees must know how to use these tools effectively and adapt to changing technologies.<br /><br />
          Continuous learning has therefore become important in the modern workplace. Employees who regularly improve their technical and communication skills are better prepared to handle new challenges. Companies can support this process by providing training programs and opportunities for professional development.
        </div>
        <div style={{ fontWeight: '600' }}>What is the main idea of the passage?</div>
      </>
    ),
    options: [
      "Technology is replacing all employees.",
      "Technology and continuous learning are important for modern workplaces.",
      "Companies should stop using technology.",
      "Communication skills are not important."
    ],
    answer: 1,
    explanation: "The passage discusses both the importance of technology and the necessity of continuous learning for employees.",
    difficulty: "Medium"
  },
  {
    id: 14,
    text: "How does technology help employees? (Refer to passage)",
    options: [
      "By increasing repetitive work",
      "By preventing communication",
      "By improving communication and automating repetitive tasks",
      "By eliminating training"
    ],
    answer: 2,
    explanation: "The passage explicitly states that digital tools allow employees to communicate quickly and automate repetitive tasks.",
    difficulty: "Easy"
  },
  {
    id: 15,
    text: "According to the passage, technology alone:",
    options: [
      "Guarantees success",
      "Cannot guarantee success",
      "Is unnecessary",
      "Creates no challenges"
    ],
    answer: 1,
    explanation: "The passage explicitly states: 'However, technology alone cannot guarantee success.'",
    difficulty: "Easy"
  },
  {
    id: 16,
    text: "Why is continuous learning important?",
    options: [
      "Technologies keep changing.",
      "Employees do not need new skills.",
      "Companies avoid training.",
      "It reduces communication."
    ],
    answer: 0,
    explanation: "Employees must know how to adapt to changing technologies, making continuous learning important.",
    difficulty: "Medium"
  },
  {
    id: 17,
    text: "Employees who improve their skills are better prepared to:",
    options: [
      "Avoid technology",
      "Handle new challenges",
      "Leave their jobs",
      "Reduce productivity"
    ],
    answer: 1,
    explanation: "The passage states: 'Employees who regularly improve their technical and communication skills are better prepared to handle new challenges.'",
    difficulty: "Easy"
  },
  {
    id: 18,
    text: "How can companies support employee development?",
    options: [
      "By reducing training",
      "By avoiding new technologies",
      "By providing training and professional-development opportunities",
      "By increasing repetitive tasks"
    ],
    answer: 2,
    explanation: "Companies can support this process by providing training programs and opportunities for professional development.",
    difficulty: "Easy"
  },
  {
    id: 19,
    text: "What does \"adapt\" mean in the passage?",
    options: [
      "To refuse to change",
      "To adjust to new situations",
      "To stop learning",
      "To avoid responsibility"
    ],
    answer: 1,
    explanation: "In this context, 'adapt' means to adjust or modify oneself to fit new situations, such as changing technologies.",
    difficulty: "Medium"
  },
  {
    id: 20,
    text: "Which statement is TRUE according to the passage?",
    options: [
      "Technical skills are the only skills employees need.",
      "Technology makes training unnecessary.",
      "Employees need to develop both technical and communication skills.",
      "Companies should avoid professional development."
    ],
    answer: 2,
    explanation: "The passage states that employees should regularly improve their technical and communication skills.",
    difficulty: "Medium"
  }
];

const GrammarAndComprehension = ({ onBack }) => {
  return (
    <div style={{ padding: '20px' }}>
      <QuizComponent 
        topicTitle="Grammar and Comprehension" 
        questions={grammarQuestions}
        onBack={onBack} 
      />
    </div>
  );
};

export default GrammarAndComprehension;
