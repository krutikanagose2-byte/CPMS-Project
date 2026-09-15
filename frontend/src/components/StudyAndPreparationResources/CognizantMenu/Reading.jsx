import React from 'react';
import QuizComponent from './QuizComponent';

const readingQuestions = [
  {
    id: 1,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 1:</strong> Technology has changed the way people communicate. In the past, people depended mainly on letters and face-to-face conversations. Today, smartphones, emails, and social media allow people to communicate instantly, regardless of distance. However, excessive use of technology can sometimes reduce meaningful personal interaction. Therefore, technology should be used as a tool to improve communication rather than completely replace traditional forms of interaction.
        </div>
        <div style={{ fontWeight: '600' }}>What is the main idea of the passage?</div>
      </>
    ),
    options: [
      "Technology has made communication impossible",
      "Technology has changed communication and should be used wisely",
      "People no longer communicate face-to-face",
      "Letters are better than smartphones"
    ],
    answer: 1,
    explanation: "The passage discusses how technology changed communication and advises using it to improve, not replace, traditional interaction.",
    difficulty: "Medium"
  },
  {
    id: 2,
    text: "What was mainly used for communication in the past? (Refer to Passage 1)",
    options: [
      "Social media",
      "Smartphones",
      "Letters and face-to-face conversations",
      "Emails"
    ],
    answer: 2,
    explanation: "The passage explicitly states: 'In the past, people depended mainly on letters and face-to-face conversations.'",
    difficulty: "Easy"
  },
  {
    id: 3,
    text: "What is one disadvantage of excessive technology use? (Refer to Passage 1)",
    options: [
      "Faster communication",
      "Reduced meaningful personal interaction",
      "Better communication",
      "Lower distance between people"
    ],
    answer: 1,
    explanation: "The passage mentions that excessive use of technology can sometimes reduce meaningful personal interaction.",
    difficulty: "Easy"
  },
  {
    id: 4,
    text: "According to the passage, technology should be used as a: (Refer to Passage 1)",
    options: [
      "Replacement for people",
      "Source of entertainment only",
      "Tool to improve communication",
      "Replacement for traditional communication"
    ],
    answer: 2,
    explanation: "The passage concludes by stating that technology should be used as a tool to improve communication.",
    difficulty: "Medium"
  },
  {
    id: 5,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 2:</strong> Many organizations are encouraging employees to work in teams. Teamwork allows individuals with different skills and experiences to work toward a common goal. A successful team requires good communication, trust, and cooperation among its members. However, disagreements may occur when team members have different opinions. Such disagreements can be useful if they are handled respectfully because they may lead to better ideas and solutions.
        </div>
        <div style={{ fontWeight: '600' }}>Why do organizations encourage teamwork?</div>
      </>
    ),
    options: [
      "To reduce communication",
      "To combine different skills and experiences",
      "To avoid responsibilities",
      "To eliminate disagreements"
    ],
    answer: 1,
    explanation: "Teamwork allows individuals with different skills and experiences to work toward a common goal.",
    difficulty: "Medium"
  },
  {
    id: 6,
    text: "Which of the following is necessary for a successful team? (Refer to Passage 2)",
    options: [
      "Competition",
      "Isolation",
      "Trust and cooperation",
      "Individual decision-making"
    ],
    answer: 2,
    explanation: "A successful team requires good communication, trust, and cooperation among its members.",
    difficulty: "Easy"
  },
  {
    id: 7,
    text: "What can disagreements in a team sometimes lead to? (Refer to Passage 2)",
    options: [
      "Better ideas and solutions",
      "Poor communication only",
      "Less productivity always",
      "Failure of the organization"
    ],
    answer: 0,
    explanation: "Disagreements can be useful if handled respectfully because they may lead to better ideas and solutions.",
    difficulty: "Medium"
  },
  {
    id: 8,
    text: "The word \"respectfully\" in the passage means: (Refer to Passage 2)",
    options: [
      "Rudely",
      "Politely",
      "Quickly",
      "Secretly"
    ],
    answer: 1,
    explanation: "Respectfully means showing politeness or deference.",
    difficulty: "Medium"
  },
  {
    id: 9,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 3:</strong> Reading regularly provides several benefits. It improves vocabulary, develops concentration, and helps people understand different perspectives. Reading does not necessarily mean reading books only; newspapers, articles, research papers, and even well-written online content can be useful. However, readers should choose reliable sources because the internet contains both accurate and misleading information.
        </div>
        <div style={{ fontWeight: '600' }}>Which is NOT mentioned as a benefit of reading?</div>
      </>
    ),
    options: [
      "Improved vocabulary",
      "Better concentration",
      "Understanding different perspectives",
      "Improved physical strength"
    ],
    answer: 3,
    explanation: "Improved physical strength is not mentioned. The passage mentions vocabulary, concentration, and understanding perspectives.",
    difficulty: "Easy"
  },
  {
    id: 10,
    text: "According to the passage, reading can include: (Refer to Passage 3)",
    options: [
      "Only novels",
      "Only newspapers",
      "Books, articles, research papers, and online content",
      "Only research papers"
    ],
    answer: 2,
    explanation: "The passage explicitly lists newspapers, articles, research papers, and well-written online content.",
    difficulty: "Medium"
  },
  {
    id: 11,
    text: "Why should readers choose reliable sources? (Refer to Passage 3)",
    options: [
      "Books are expensive",
      "The internet contains misleading information",
      "Reading is difficult",
      "Newspapers are unavailable"
    ],
    answer: 1,
    explanation: "Readers should choose reliable sources because the internet contains both accurate and misleading information.",
    difficulty: "Medium"
  },
  {
    id: 12,
    text: "What does \"perspectives\" mean in the passage? (Refer to Passage 3)",
    options: [
      "Opinions or ways of seeing things",
      "Physical locations",
      "Reading speed",
      "Written mistakes"
    ],
    answer: 0,
    explanation: "Perspectives in this context refers to different points of view or ways of seeing things.",
    difficulty: "Hard"
  },
  {
    id: 13,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 4:</strong> Time management is an important skill for students and professionals. People who manage their time effectively can complete their tasks without unnecessary stress. One useful method is to prioritize tasks according to their importance and deadlines. Another method is to avoid distractions while working. Although multitasking may seem productive, focusing on one task at a time often results in better concentration and quality.
        </div>
        <div style={{ fontWeight: '600' }}>What is the main purpose of the passage?</div>
      </>
    ),
    options: [
      "To explain the importance of time management",
      "To explain why students should study all day",
      "To criticize professionals",
      "To explain multitasking"
    ],
    answer: 0,
    explanation: "The passage is primarily about the importance of time management and methods to achieve it.",
    difficulty: "Medium"
  },
  {
    id: 14,
    text: "What should people do first when managing tasks? (Refer to Passage 4)",
    options: [
      "Ignore deadlines",
      "Prioritize tasks",
      "Take long breaks",
      "Multitask"
    ],
    answer: 1,
    explanation: "One useful method is to prioritize tasks according to their importance and deadlines.",
    difficulty: "Medium"
  },
  {
    id: 15,
    text: "What is one way to improve concentration? (Refer to Passage 4)",
    options: [
      "Avoid distractions",
      "Do many tasks simultaneously",
      "Ignore important tasks",
      "Work without planning"
    ],
    answer: 0,
    explanation: "Avoiding distractions and focusing on one task at a time improves concentration.",
    difficulty: "Easy"
  },
  {
    id: 16,
    text: "According to the passage, focusing on one task at a time can result in: (Refer to Passage 4)",
    options: [
      "Less concentration",
      "Better concentration and quality",
      "More distractions",
      "More stress"
    ],
    answer: 1,
    explanation: "Focusing on one task at a time often results in better concentration and quality.",
    difficulty: "Medium"
  },
  {
    id: 17,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 5:</strong> Artificial intelligence is becoming increasingly common in everyday life. It is used in recommendation systems, virtual assistants, online shopping, healthcare, and many other fields. AI can process large amounts of information quickly and help people make decisions. However, AI systems can sometimes produce incorrect results if they are trained on poor-quality data. Therefore, human supervision remains important when using AI-based systems.
        </div>
        <div style={{ fontWeight: '600' }}>Where is AI used according to the passage?</div>
      </>
    ),
    options: [
      "Only in healthcare",
      "Only in online shopping",
      "In several fields including healthcare and online shopping",
      "Only in virtual assistants"
    ],
    answer: 2,
    explanation: "The passage explicitly lists recommendation systems, virtual assistants, online shopping, healthcare, and many other fields.",
    difficulty: "Medium"
  },
  {
    id: 18,
    text: "What is one advantage of AI? (Refer to Passage 5)",
    options: [
      "It can process large amounts of information quickly",
      "It never makes mistakes",
      "It does not require data",
      "It completely replaces humans"
    ],
    answer: 0,
    explanation: "AI can process large amounts of information quickly and help people make decisions.",
    difficulty: "Easy"
  },
  {
    id: 19,
    text: "When can AI produce incorrect results? (Refer to Passage 5)",
    options: [
      "When it processes information quickly",
      "When it is used online",
      "When it is trained on poor-quality data",
      "When humans supervise it"
    ],
    answer: 2,
    explanation: "AI systems can sometimes produce incorrect results if they are trained on poor-quality data.",
    difficulty: "Medium"
  },
  {
    id: 20,
    text: "What does the passage suggest about human supervision? (Refer to Passage 5)",
    options: [
      "It is unnecessary",
      "It remains important",
      "It should be completely removed",
      "It slows down every AI system"
    ],
    answer: 1,
    explanation: "The passage states: 'Therefore, human supervision remains important when using AI-based systems.'",
    difficulty: "Easy"
  },
  {
    id: 21,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 6:</strong> Remote work has become increasingly common in many organizations. It allows employees to work from locations outside the traditional office and can reduce commuting time. Employees may also experience greater flexibility in managing their schedules. However, remote work requires discipline and effective communication. Without proper planning, employees may become distracted or feel disconnected from their teams. Therefore, organizations need to provide appropriate tools and maintain regular communication with remote employees.
        </div>
        <div style={{ fontWeight: '600' }}>What is one major benefit of remote work?</div>
      </>
    ),
    options: [
      "More office meetings",
      "Reduced commuting time",
      "Increased travel",
      "Less flexibility"
    ],
    answer: 1,
    explanation: "The passage states that remote work can reduce commuting time.",
    difficulty: "Easy"
  },
  {
    id: 22,
    text: "What does remote work require from employees? (Refer to Passage 6)",
    options: [
      "Discipline and communication",
      "More commuting",
      "Less planning",
      "Physical meetings every day"
    ],
    answer: 0,
    explanation: "The passage mentions that remote work requires discipline and effective communication.",
    difficulty: "Medium"
  },
  {
    id: 23,
    text: "What problem may remote employees face? (Refer to Passage 6)",
    options: [
      "Too much office space",
      "Increased commuting",
      "Feeling disconnected from their teams",
      "Lack of flexibility"
    ],
    answer: 2,
    explanation: "Employees may become distracted or feel disconnected from their teams without proper planning.",
    difficulty: "Medium"
  },
  {
    id: 24,
    text: "What should organizations provide to remote employees? (Refer to Passage 6)",
    options: [
      "More travel opportunities",
      "Appropriate tools and regular communication",
      "Fewer responsibilities",
      "Traditional offices only"
    ],
    answer: 1,
    explanation: "Organizations need to provide appropriate tools and maintain regular communication with remote employees.",
    difficulty: "Easy"
  },
  {
    id: 25,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 7:</strong> Environmental protection has become an important responsibility for individuals, businesses, and governments. Rapid industrialization and excessive consumption of natural resources have contributed to pollution and climate change. Simple actions such as reducing plastic use, saving electricity, using public transportation, and planting trees can help protect the environment. Although individual actions may seem small, collective efforts can create significant positive changes.
        </div>
        <div style={{ fontWeight: '600' }}>Why has environmental protection become important?</div>
      </>
    ),
    options: [
      "Because pollution and climate change are increasing",
      "Because people are travelling less",
      "Because industries are disappearing",
      "Because natural resources are unlimited"
    ],
    answer: 0,
    explanation: "Rapid industrialization and excessive consumption of natural resources have contributed to pollution and climate change, making environmental protection important.",
    difficulty: "Medium"
  },
  {
    id: 26,
    text: "Which action can help protect the environment? (Refer to Passage 7)",
    options: [
      "Increasing plastic use",
      "Wasting electricity",
      "Planting trees",
      "Using more private vehicles"
    ],
    answer: 2,
    explanation: "Planting trees is listed among the simple actions that can help protect the environment.",
    difficulty: "Easy"
  },
  {
    id: 27,
    text: "What does \"collective efforts\" mean? (Refer to Passage 7)",
    options: [
      "Actions taken by one person",
      "Actions taken together by many people",
      "Government actions only",
      "Industrial activities"
    ],
    answer: 1,
    explanation: "Collective efforts refer to actions taken together by many people.",
    difficulty: "Medium"
  },
  {
    id: 28,
    text: "What is the main message of the passage? (Refer to Passage 7)",
    options: [
      "Only governments can protect the environment",
      "Individual and collective actions can help protect the environment",
      "Industrialization should stop completely",
      "Environmental problems cannot be solved"
    ],
    answer: 1,
    explanation: "The passage emphasizes that both small individual actions and collective efforts can create significant positive changes for the environment.",
    difficulty: "Medium"
  },
  {
    id: 29,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 8:</strong> Failure is often considered a negative experience, but it can provide valuable lessons. When people fail, they can identify their weaknesses and understand what needs improvement. Successful individuals often experience failures before achieving their goals. Instead of giving up after failure, people should analyze what went wrong and make another attempt with a better strategy. In this way, failure can become an important part of personal and professional growth.
        </div>
        <div style={{ fontWeight: '600' }}>What can failure help people identify?</div>
      </>
    ),
    options: [
      "Their strengths only",
      "Their weaknesses",
      "Their friends",
      "Their salary"
    ],
    answer: 1,
    explanation: "When people fail, they can identify their weaknesses and understand what needs improvement.",
    difficulty: "Easy"
  },
  {
    id: 30,
    text: "What should people do after failure? (Refer to Passage 8)",
    options: [
      "Give up immediately",
      "Ignore the problem",
      "Analyze what went wrong and try again",
      "Blame others"
    ],
    answer: 2,
    explanation: "People should analyze what went wrong and make another attempt with a better strategy.",
    difficulty: "Medium"
  },
  {
    id: 31,
    text: "According to the passage, successful individuals: (Refer to Passage 8)",
    options: [
      "Never experience failure",
      "Often experience failure before achieving their goals",
      "Always avoid challenges",
      "Never change their strategies"
    ],
    answer: 1,
    explanation: "The passage states that successful individuals often experience failures before achieving their goals.",
    difficulty: "Easy"
  },
  {
    id: 32,
    text: "What can failure become according to the passage? (Refer to Passage 8)",
    options: [
      "A reason to stop learning",
      "An important part of growth",
      "A permanent disadvantage",
      "A waste of time"
    ],
    answer: 1,
    explanation: "Failure can become an important part of personal and professional growth.",
    difficulty: "Medium"
  },
  {
    id: 33,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 9:</strong> Online education has made learning accessible to people from different locations. Students can attend classes, watch recorded lectures, and access study materials through digital platforms. It also provides flexibility for learners who may have work or other responsibilities. However, online learning requires self-discipline because students may easily become distracted. Technical problems and limited interaction with teachers can also create challenges.
        </div>
        <div style={{ fontWeight: '600' }}>What has online education made possible?</div>
      </>
    ),
    options: [
      "Learning only in classrooms",
      "Learning from different locations",
      "Eliminating teachers",
      "Avoiding study materials"
    ],
    answer: 1,
    explanation: "Online education has made learning accessible to people from different locations.",
    difficulty: "Easy"
  },
  {
    id: 34,
    text: "Which is an advantage of online education? (Refer to Passage 9)",
    options: [
      "Flexibility",
      "More commuting",
      "Less access to materials",
      "No learning resources"
    ],
    answer: 0,
    explanation: "It provides flexibility for learners who may have work or other responsibilities.",
    difficulty: "Easy"
  },
  {
    id: 35,
    text: "Why does online learning require self-discipline? (Refer to Passage 9)",
    options: [
      "Students may become distracted",
      "Teachers are always present",
      "Classes are always difficult",
      "Students cannot access lectures"
    ],
    answer: 0,
    explanation: "Online learning requires self-discipline because students may easily become distracted.",
    difficulty: "Medium"
  },
  {
    id: 36,
    text: "Which is a challenge of online education? (Refer to Passage 9)",
    options: [
      "Too many classrooms",
      "Technical problems",
      "Excessive travelling",
      "Lack of flexibility"
    ],
    answer: 1,
    explanation: "Technical problems and limited interaction with teachers can create challenges.",
    difficulty: "Easy"
  },
  {
    id: 37,
    text: (
      <>
        <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0ea5e9', fontSize: '0.95em', lineHeight: '1.5' }}>
          <strong>Passage 10:</strong> A positive workplace environment can improve employee satisfaction and productivity. Employees are more likely to perform well when they feel respected and supported by their colleagues and managers. Clear communication, recognition of good work, and opportunities for professional development can contribute to a healthy workplace. On the other hand, poor communication and excessive stress may reduce motivation. Therefore, organizations should create an environment where employees can communicate openly and develop their skills.
        </div>
        <div style={{ fontWeight: '600' }}>What can a positive workplace environment improve?</div>
      </>
    ),
    options: [
      "Employee satisfaction and productivity",
      "Employee stress only",
      "Working hours",
      "Office expenses only"
    ],
    answer: 0,
    explanation: "A positive workplace environment can improve employee satisfaction and productivity.",
    difficulty: "Easy"
  },
  {
    id: 38,
    text: "When are employees more likely to perform well? (Refer to Passage 10)",
    options: [
      "When they feel respected and supported",
      "When they receive no feedback",
      "When communication is poor",
      "When they experience excessive stress"
    ],
    answer: 0,
    explanation: "Employees are more likely to perform well when they feel respected and supported by their colleagues and managers.",
    difficulty: "Easy"
  },
  {
    id: 39,
    text: "Which can contribute to a healthy workplace? (Refer to Passage 10)",
    options: [
      "Poor communication",
      "Recognition of good work",
      "Excessive stress",
      "Lack of development opportunities"
    ],
    answer: 1,
    explanation: "Clear communication, recognition of good work, and opportunities for professional development contribute to a healthy workplace.",
    difficulty: "Medium"
  },
  {
    id: 40,
    text: "What should organizations encourage? (Refer to Passage 10)",
    options: [
      "Employees working without communication",
      "Open communication and skill development",
      "Excessive competition",
      "Avoiding professional development"
    ],
    answer: 1,
    explanation: "Organizations should create an environment where employees can communicate openly and develop their skills.",
    difficulty: "Medium"
  }
];

const Reading = ({ onBack }) => {
  return (
    <div style={{ padding: '20px' }}>
      <QuizComponent 
        topicTitle="Reading Comprehension" 
        questions={readingQuestions}
        onBack={onBack} 
      />
    </div>
  );
};

export default Reading;
