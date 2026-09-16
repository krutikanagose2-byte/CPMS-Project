export const oracleData = {
  pattern: {
    paragraphs: [
      "Oracle conducts a rigorous recruitment process focusing heavily on Data Structures, Algorithms, and System Design.",
      "The initial rounds are online coding assessments, followed by multiple technical interviews."
    ],
    summary: [
      { label: 'Sections', value: 'Coding & MCQs' },
      { label: 'Duration', value: '90-120 minutes', colorClass: 'csr-icon-green' },
      { label: 'Focus', value: 'DSA & Core CS', colorClass: 'csr-icon-purple' }
    ],
    rounds: [
      { name: 'Online Assessment', sections: 'Coding (2-3 Qs)', time: '90 mins', questions: '2-3' },
      { name: 'Technical Interview 1', sections: 'DSA & Problem Solving', time: '45-60 mins', questions: '2' },
      { name: 'Technical Interview 2', sections: 'System Design / Advanced DSA', time: '60 mins', questions: '1-2' },
      { name: 'HR/Googlyness', sections: 'Behavioral', time: '45 mins', questions: 'Varies' }
    ]
  },
  syllabus: [
    {
      name: "Data Structures",
      icon: "🌳",
      topics: ["Arrays", "Linked Lists", "Trees & Graphs", "Hash Tables", "Heaps"]
    },
    {
      name: "Algorithms",
      icon: "⚙️",
      topics: ["Dynamic Programming", "Sorting & Searching", "Greedy Algorithms", "Backtracking"]
    }
  ],
  sections: [
    {
      name: "Algorithms",
      icon: "⚙️",
      questions: [
        {
          question: "What is the time complexity of searching an element in a balanced Binary Search Tree?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          correctAnswer: 2,
          explanation: "In a balanced BST, the height is log n. So searching takes O(log n) time."
        }
      ]
    }
  ]
};
