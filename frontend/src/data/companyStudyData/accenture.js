export const accentureData = {
  pattern: {
    paragraphs: [
      "Accenture focuses on analytical thinking, communication skills, and case study problem solving.",
      "Their assessments evaluate cognitive ability, verbal skills, and business acumen."
    ],
    summary: [
      { label: 'Sections', value: 'Cognitive & Technical' },
      { label: 'Duration', value: '90 minutes', colorClass: 'csr-icon-green' }
    ],
    rounds: [
      { name: 'Cognitive Assessment', sections: 'English, Logic, Quant', time: '50 mins', questions: '50' },
      { name: 'Technical Assessment', sections: 'Pseudocode, Fundamentals', time: '40 mins', questions: '40' },
      { name: 'Communication/Case', sections: 'Verbal/Case Study', time: '30 mins', questions: 'Varies' }
    ]
  },
  syllabus: [
    {
      name: "Cognitive Ability",
      icon: "🧠",
      topics: ["Critical Reasoning", "Data Interpretation", "Reading Comprehension"]
    }
  ],
  sections: [
    {
      name: "Cognitive Ability",
      icon: "🧠",
      questions: [
        {
          question: "If all Z are Y, and some Y are X, which of the following must be true?",
          options: ["All X are Z", "Some Z are X", "Some Y are Z", "None of the above"],
          correctAnswer: 2,
          explanation: "If all Z are Y, it inherently means some Y are Z."
        }
      ]
    }
  ]
};
