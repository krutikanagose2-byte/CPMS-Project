export const goldman_sachsData = {
  pattern: {
    paragraphs: [
      "Goldman Sachs evaluates candidates heavily on quantitative aptitude, logical reasoning, and software engineering basics (for tech roles).",
      "They are known for tricky probability and puzzle-based questions."
    ],
    summary: [
      { label: 'Sections', value: 'Quant, Logic, Coding' },
      { label: 'Duration', value: '120 minutes', colorClass: 'csr-icon-green' }
    ],
    rounds: [
      { name: 'Aptitude & Math', sections: 'Probability, Quant', time: '60 mins', questions: '40' },
      { name: 'Coding Assessment', sections: '2-3 Programs', time: '60 mins', questions: '2' },
      { name: 'Technical Interview', sections: 'DSA, System Design, Puzzles', time: '60 mins', questions: 'Varies' }
    ]
  },
  syllabus: [
    {
      name: "Quantitative & Puzzles",
      icon: "🧩",
      topics: ["Probability", "Permutations & Combinations", "Puzzles", "Data Interpretation"]
    }
  ],
  sections: [
    {
      name: "Quantitative & Puzzles",
      icon: "🧩",
      questions: [
        {
          question: "If you have a perfectly fair coin and flip it 3 times, what is the probability of getting exactly 2 heads?",
          options: ["1/8", "3/8", "1/2", "5/8"],
          correctAnswer: 1,
          explanation: "Total outcomes = 2^3 = 8. Outcomes with exactly 2 heads: HHT, HTH, THH (3 outcomes). So 3/8."
        }
      ]
    }
  ]
};
