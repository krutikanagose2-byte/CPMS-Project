import React from 'react';
import QuizComponent from './QuizComponent';

const speakingAndListeningQuestions = [
  // SET 1 - Part A (Speaking) Q1 - Q10
  {
    id: 1,
    text: "Interviewer: \"Tell me about yourself.\"",
    options: [
      "What do you want to know?",
      "I am Shweta. I am a recent graduate with an interest in software development. I have worked on academic and personal projects and I am eager to learn and contribute.",
      "I don't know what to say.",
      "Everything is already in my resume."
    ],
    answer: 1,
    explanation: "Option B provides a professional summary of the candidate's background and enthusiasm.",
    difficulty: "Medium"
  },
  {
    id: 2,
    text: "Interviewer: \"Why do you want to join our company?\"",
    options: [
      "Because I need a job.",
      "My friend told me to apply.",
      "I am interested in the company's work and believe this role will give me opportunities to learn and contribute.",
      "Because the salary is good."
    ],
    answer: 2,
    explanation: "Option C shows genuine interest and a desire to contribute professionally.",
    difficulty: "Easy"
  },
  {
    id: 3,
    text: "Choose the correct sentence for a formal situation:",
    options: [
      "I wanna discuss something.",
      "I want discuss something.",
      "I would like to discuss something with you.",
      "I gotta discuss something."
    ],
    answer: 2,
    explanation: "'I would like to' is the standard polite phrasing for a formal situation.",
    difficulty: "Easy"
  },
  {
    id: 4,
    text: "Your interviewer asks you a question that you don't understand. What should you say?",
    options: [
      "What?",
      "I don't understand you.",
      "Could you please repeat or clarify the question?",
      "Leave it."
    ],
    answer: 2,
    explanation: "It is perfectly acceptable and professional to ask for repetition or clarification politely.",
    difficulty: "Easy"
  },
  {
    id: 5,
    text: "Interviewer: \"What are your strengths?\"",
    options: [
      "I don't have any weaknesses.",
      "I am a quick learner, and I work well in a team.",
      "My friends say I am good.",
      "Everything is my strength."
    ],
    answer: 1,
    explanation: "Option B provides specific, relevant professional strengths without being arrogant.",
    difficulty: "Medium"
  },
  {
    id: 6,
    text: "Choose the most appropriate sentence:",
    options: [
      "Give me one minute.",
      "Wait.",
      "Could you please give me a moment to think about that?",
      "I need time."
    ],
    answer: 2,
    explanation: "Option C is the most polite and professional way to ask for time to think.",
    difficulty: "Easy"
  },
  {
    id: 7,
    text: "You disagree with your teammate. What is the best way to communicate?",
    options: [
      "You are completely wrong.",
      "I don't agree with you.",
      "I understand your point, but I have a different perspective.",
      "Don't say that."
    ],
    answer: 2,
    explanation: "Option C acknowledges the teammate's point of view before respectfully presenting a different one.",
    difficulty: "Medium"
  },
  {
    id: 8,
    text: "Choose the sentence with correct pronunciation emphasis for professional communication:",
    options: [
      "Speak very fast so that you finish early.",
      "Speak clearly at a comfortable pace.",
      "Speak as loudly as possible.",
      "Use complicated words whenever possible."
    ],
    answer: 1,
    explanation: "Clear pronunciation at a moderate pace ensures that the listener understands you.",
    difficulty: "Easy"
  },
  {
    id: 9,
    text: "Your interviewer asks, \"Where do you see yourself in five years?\"",
    options: [
      "I don't know.",
      "I hope to develop my skills, take on greater responsibilities, and contribute to the organization.",
      "I want your position.",
      "I will probably change companies."
    ],
    answer: 1,
    explanation: "Option B shows ambition and alignment with the company's growth.",
    difficulty: "Medium"
  },
  {
    id: 10,
    text: "Which is most important during professional speaking?",
    options: [
      "Using difficult vocabulary",
      "Speaking very quickly",
      "Clear communication and confidence",
      "Speaking continuously without pauses"
    ],
    answer: 2,
    explanation: "Clarity and confidence are the most important aspects of professional speaking.",
    difficulty: "Easy"
  },

  // SET 1 - Part B (Listening) Q11 - Q20
  {
    id: 11,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #a855f7', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Listening Passage 1:</strong> "The meeting scheduled for Monday has been moved to Tuesday at 10 a.m. because the project manager will be unavailable on Monday. All team members are requested to bring their project updates."
        </div>
        <div style={{ fontWeight: '600' }}>When is the meeting now scheduled?</div>
      </>
    ),
    options: [
      "Monday at 10 a.m.",
      "Tuesday at 10 a.m.",
      "Tuesday at 2 p.m.",
      "Wednesday at 10 a.m."
    ],
    answer: 1,
    explanation: "The passage states the meeting was moved to Tuesday at 10 a.m.",
    difficulty: "Easy"
  },
  {
    id: 12,
    text: "Why was the meeting rescheduled? (Refer to Passage 1)",
    options: [
      "The project was completed.",
      "Team members were unavailable.",
      "The project manager was unavailable.",
      "The office was closed."
    ],
    answer: 2,
    explanation: "The meeting was moved because the project manager will be unavailable on Monday.",
    difficulty: "Easy"
  },
  {
    id: 13,
    text: "What should team members bring? (Refer to Passage 1)",
    options: [
      "Their resumes",
      "Their project updates",
      "Their laptops only",
      "Their reports from last year"
    ],
    answer: 1,
    explanation: "All team members are requested to bring their project updates.",
    difficulty: "Medium"
  },
  {
    id: 14,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #a855f7', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Listening Passage 2:</strong> "The company has introduced a new training program for fresh employees. The program will begin next month and will cover communication skills, technical skills, and workplace practices. Employees who complete the program will receive a certificate."
        </div>
        <div style={{ fontWeight: '600' }}>Who is the training program mainly for?</div>
      </>
    ),
    options: [
      "Managers",
      "Customers",
      "Fresh employees",
      "Retired employees"
    ],
    answer: 2,
    explanation: "The company introduced a new training program for fresh employees.",
    difficulty: "Easy"
  },
  {
    id: 15,
    text: "When will the program begin? (Refer to Passage 2)",
    options: [
      "Today",
      "Next week",
      "Next month",
      "Next year"
    ],
    answer: 2,
    explanation: "The program will begin next month.",
    difficulty: "Easy"
  },
  {
    id: 16,
    text: "Which of the following is NOT mentioned as part of the training? (Refer to Passage 2)",
    options: [
      "Communication skills",
      "Technical skills",
      "Workplace practices",
      "Financial management"
    ],
    answer: 3,
    explanation: "Financial management is not mentioned. The program covers communication skills, technical skills, and workplace practices.",
    difficulty: "Medium"
  },
  {
    id: 17,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #a855f7', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Listening Passage 3:</strong> "Riya planned to travel to Mumbai by train on Friday evening. However, her train was cancelled because of heavy rainfall. She decided to travel the next morning by bus instead. She informed her manager that she would reach the office late."
        </div>
        <div style={{ fontWeight: '600' }}>Where did Riya plan to travel?</div>
      </>
    ),
    options: [
      "Pune",
      "Mumbai",
      "Delhi",
      "Hyderabad"
    ],
    answer: 1,
    explanation: "Riya planned to travel to Mumbai.",
    difficulty: "Easy"
  },
  {
    id: 18,
    text: "Why was her train cancelled? (Refer to Passage 3)",
    options: [
      "Technical problems",
      "A strike",
      "Heavy rainfall",
      "Lack of passengers"
    ],
    answer: 2,
    explanation: "Her train was cancelled because of heavy rainfall.",
    difficulty: "Easy"
  },
  {
    id: 19,
    text: "How did Riya decide to travel instead? (Refer to Passage 3)",
    options: [
      "By flight",
      "By car",
      "By bus",
      "By taxi"
    ],
    answer: 2,
    explanation: "She decided to travel the next morning by bus instead.",
    difficulty: "Medium"
  },
  {
    id: 20,
    text: "What did Riya tell her manager? (Refer to Passage 3)",
    options: [
      "She would not come to work.",
      "She would reach the office late.",
      "She would work from home permanently.",
      "She had cancelled her trip."
    ],
    answer: 1,
    explanation: "She informed her manager that she would reach the office late.",
    difficulty: "Medium"
  },

  // SET 2 - Part A (Speaking) Q21 - Q30
  {
    id: 21,
    text: "Interviewer: \"What is one weakness you are working on?\"",
    options: [
      "I have no weaknesses.",
      "I sometimes spend too much time perfecting my work, so I am learning to manage my time better.",
      "My weakness is my college.",
      "I don't want to answer."
    ],
    answer: 1,
    explanation: "Option B provides a real weakness and shows active steps being taken to improve it.",
    difficulty: "Medium"
  },
  {
    id: 22,
    text: "You are late for an interview. What should you say?",
    options: [
      "Sorry, I got late.",
      "I apologize for being late. Thank you for your patience.",
      "Traffic was bad, so it is not my fault.",
      "You should have waited."
    ],
    answer: 1,
    explanation: "Option B is polite, takes accountability, and shows appreciation for the interviewer's time.",
    difficulty: "Easy"
  },
  {
    id: 23,
    text: "Choose the most professional sentence.",
    options: [
      "Send me the document.",
      "Can you send document?",
      "Could you please send me the document?",
      "You send document now."
    ],
    answer: 2,
    explanation: "Using 'Could you please' makes a request formal and polite.",
    difficulty: "Easy"
  },
  {
    id: 24,
    text: "Interviewer: \"Do you have any questions for us?\"",
    options: [
      "No, nothing.",
      "When will I get a promotion?",
      "Could you tell me more about the learning and growth opportunities in this role?",
      "How many holidays do I get?"
    ],
    answer: 2,
    explanation: "Asking about learning and growth opportunities shows enthusiasm for the role and the company.",
    difficulty: "Medium"
  },
  {
    id: 25,
    text: "Which sentence is grammatically and professionally correct?",
    options: [
      "I have completed the project yesterday.",
      "I completed the project yesterday.",
      "I am completed the project yesterday.",
      "I had complete project yesterday."
    ],
    answer: 1,
    explanation: "When a specific past time ('yesterday') is used, the past simple tense ('completed') is correct.",
    difficulty: "Medium"
  },
  {
    id: 26,
    text: "Your teammate has helped you with a task. What should you say?",
    options: [
      "Okay.",
      "Thanks for your help. I really appreciate it.",
      "You had to help me.",
      "Finally, you helped me."
    ],
    answer: 1,
    explanation: "Expressing sincere appreciation is the most professional response.",
    difficulty: "Easy"
  },
  {
    id: 27,
    text: "You need clarification about a task. What is the best response?",
    options: [
      "I don't know this.",
      "Could you please clarify the requirements for this task?",
      "This task is confusing.",
      "You explain it again."
    ],
    answer: 1,
    explanation: "Option B politely asks for specific clarification.",
    difficulty: "Easy"
  },
  {
    id: 28,
    text: "Which sentence sounds most confident in an interview?",
    options: [
      "Maybe I can do it.",
      "I think I might be able to do it.",
      "I am confident that I can learn and handle the task effectively.",
      "I don't know whether I can do it."
    ],
    answer: 2,
    explanation: "Option C expresses confidence while remaining open to learning.",
    difficulty: "Easy"
  },
  {
    id: 29,
    text: "Choose the best response when you make a mistake at work.",
    options: [
      "It wasn't my mistake.",
      "I will ignore it.",
      "I made a mistake. I will correct it and make sure it does not happen again.",
      "Someone else caused it."
    ],
    answer: 2,
    explanation: "Taking responsibility and offering a solution is the hallmark of a true professional.",
    difficulty: "Medium"
  },
  {
    id: 30,
    text: "Which is the best way to end a professional conversation?",
    options: [
      "Okay, bye.",
      "That's it.",
      "Thank you for your time. It was a pleasure speaking with you.",
      "I have to go now."
    ],
    answer: 2,
    explanation: "Option C is a formal and appreciative way to end a conversation.",
    difficulty: "Easy"
  },

  // SET 2 - Part B (Listening) Q31 - Q40
  {
    id: 31,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #a855f7', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Listening Passage 4:</strong> "The HR department has informed all new employees that the orientation program will begin at 9:30 a.m. on Wednesday. Employees should report to the main conference room at least fifteen minutes before the program begins. They should also carry their joining documents."
        </div>
        <div style={{ fontWeight: '600' }}>When will the orientation program begin?</div>
      </>
    ),
    options: [
      "9:00 a.m.",
      "9:15 a.m.",
      "9:30 a.m.",
      "10:00 a.m."
    ],
    answer: 2,
    explanation: "The orientation program will begin at 9:30 a.m.",
    difficulty: "Easy"
  },
  {
    id: 32,
    text: "Where should employees report? (Refer to Passage 4)",
    options: [
      "HR office",
      "Main conference room",
      "Reception area",
      "Training room"
    ],
    answer: 1,
    explanation: "Employees should report to the main conference room.",
    difficulty: "Easy"
  },
  {
    id: 33,
    text: "How early should employees arrive? (Refer to Passage 4)",
    options: [
      "5 minutes early",
      "10 minutes early",
      "15 minutes early",
      "30 minutes early"
    ],
    answer: 2,
    explanation: "Employees should arrive at least fifteen minutes before the program begins.",
    difficulty: "Medium"
  },
  {
    id: 34,
    text: "What should employees carry? (Refer to Passage 4)",
    options: [
      "Project reports",
      "Joining documents",
      "Laptops only",
      "Identity cards only"
    ],
    answer: 1,
    explanation: "They should also carry their joining documents.",
    difficulty: "Easy"
  },
  {
    id: 35,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #a855f7', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Listening Passage 5:</strong> "The software development team has completed the first phase of the application. The second phase will focus on testing and fixing bugs. The team expects to complete this phase within two weeks. After testing, the application will be presented to the client for approval."
        </div>
        <div style={{ fontWeight: '600' }}>Which phase has been completed?</div>
      </>
    ),
    options: [
      "Testing phase",
      "Second phase",
      "First phase",
      "Final phase"
    ],
    answer: 2,
    explanation: "The software development team has completed the first phase of the application.",
    difficulty: "Easy"
  },
  {
    id: 36,
    text: "What will the second phase focus on? (Refer to Passage 5)",
    options: [
      "Designing a new application",
      "Testing and fixing bugs",
      "Hiring employees",
      "Presenting the project"
    ],
    answer: 1,
    explanation: "The second phase will focus on testing and fixing bugs.",
    difficulty: "Easy"
  },
  {
    id: 37,
    text: "How long is the second phase expected to take? (Refer to Passage 5)",
    options: [
      "One week",
      "Two weeks",
      "Three weeks",
      "One month"
    ],
    answer: 1,
    explanation: "The team expects to complete this phase within two weeks.",
    difficulty: "Medium"
  },
  {
    id: 38,
    text: "Who will receive the application after testing? (Refer to Passage 5)",
    options: [
      "Employees",
      "HR department",
      "Client",
      "Customers only"
    ],
    answer: 2,
    explanation: "After testing, the application will be presented to the client for approval.",
    difficulty: "Easy"
  },
  {
    id: 39,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #a855f7', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Listening Passage 6:</strong> "Anita usually travels to work by bus. Today, however, she decided to take the metro because heavy traffic was expected on the roads. She left home at 8 a.m. and reached the office at 8:45 a.m. Her meeting was scheduled for 9 a.m."
        </div>
        <div style={{ fontWeight: '600' }}>How does Anita usually travel to work?</div>
      </>
    ),
    options: [
      "By car",
      "By train",
      "By bus",
      "By metro"
    ],
    answer: 2,
    explanation: "Anita usually travels to work by bus.",
    difficulty: "Easy"
  },
  {
    id: 40,
    text: "Why did she take the metro today? (Refer to Passage 6)",
    options: [
      "Her bus was cancelled.",
      "Heavy traffic was expected.",
      "She wanted to travel with her friend.",
      "The metro was cheaper."
    ],
    answer: 1,
    explanation: "She decided to take the metro because heavy traffic was expected on the roads.",
    difficulty: "Medium"
  }
];

const SpeakingAndListening = ({ onBack }) => {
  return (
    <div style={{ padding: '20px' }}>
      <QuizComponent 
        topicTitle="Speaking and Listening" 
        questions={speakingAndListeningQuestions}
        onBack={onBack} 
      />
    </div>
  );
};

export default SpeakingAndListening;
