export const tata_motorsData = {
  pattern: {
    paragraphs: [
      "Tata Motors hires primarily for core engineering roles, focusing on domain knowledge (Mechanical, Electrical, Civil) along with basic aptitude."
    ],
    summary: [
      { label: 'Sections', value: 'Aptitude + Domain' },
      { label: 'Duration', value: '120 minutes', colorClass: 'csr-icon-green' }
    ],
    rounds: [
      { name: 'Aptitude Test', sections: 'Quant, Logic, English', time: '60 mins', questions: '60' },
      { name: 'Domain Test', sections: 'Core Engineering Subjects', time: '60 mins', questions: '40' },
      { name: 'Technical Interview', sections: 'Projects & Core subjects', time: '45 mins', questions: 'Varies' }
    ]
  },
  syllabus: [
    {
      name: "Core Engineering Domain",
      icon: "🏗️",
      topics: ["Thermodynamics / Fluid Mechanics", "Circuit Theory", "Strength of Materials", "Engineering Mathematics"]
    }
  ],
  sections: [
    {
      name: "Core Engineering Domain",
      icon: "🏗️",
      questions: [
        {
          question: "In an ideal Rankine cycle, the expansion of steam in the turbine is assumed to be:",
          options: ["Isothermal", "Isobaric", "Isentropic", "Isochoric"],
          correctAnswer: 2,
          explanation: "The expansion in an ideal turbine is assumed to be reversible and adiabatic, which means isentropic."
        }
      ]
    }
  ]
};
