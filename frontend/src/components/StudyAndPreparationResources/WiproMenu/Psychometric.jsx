import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';

const Psychometric = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
  {
    "id": 1,
    "title": "Personality Traits",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 2,
    "title": "Introversion & Extroversion",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 3,
    "title": "Emotional Stability",
    "questions": 2,
    "color": "purple"
  },
  {
    "id": 4,
    "title": "Openness to Experience",
    "questions": 2,
    "color": "red"
  },
  {
    "id": 5,
    "title": "Conscientiousness",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 6,
    "title": "Agreeableness",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 7,
    "title": "Leadership Traits",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 8,
    "title": "Confidence",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 9,
    "title": "Adaptability",
    "questions": 2,
    "color": "purple"
  },
  {
    "id": 10,
    "title": "Responsibility",
    "questions": 2,
    "color": "red"
  },
  {
    "id": 11,
    "title": "Teamwork",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 12,
    "title": "Communication",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 13,
    "title": "Time Management",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 14,
    "title": "Decision Making",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 15,
    "title": "Problem Solving",
    "questions": 2,
    "color": "purple"
  },
  {
    "id": 16,
    "title": "Stress Management",
    "questions": 2,
    "color": "red"
  },
  {
    "id": 17,
    "title": "Conflict Management",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 18,
    "title": "Initiative",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 19,
    "title": "Accountability",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 20,
    "title": "Work Ethics",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 21,
    "title": "Workplace Scenarios",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 22,
    "title": "Ethical Situations",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 23,
    "title": "Team Conflicts",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 24,
    "title": "Leadership Situations",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 25,
    "title": "Customer Situations",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 26,
    "title": "Deadline Management",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 27,
    "title": "Workplace Prioritization",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 28,
    "title": "Handling Failure",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 29,
    "title": "Handling Criticism",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 30,
    "title": "Workplace Decision Making",
    "questions": 1,
    "color": "yellow"
  }
];

  const handleTopicClick = (t) => {
    if (t.data) {
      setSelectedTopic(t);
    } else {
      alert('Content for ' + t.title + ' will be added soon!');
    }
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    return (
      <QuizComponent 
        topicTitle={selectedTopic.title} 
        questions={selectedTopic.data} 
        onBack={handleBackToTopics} 
      />
    );
  }

  const pyqHeaderContent = (
    <div className="pyq-section">
      <h2 className="csr-topics-title" style={{marginBottom: '20px'}}>Previous Year Questions</h2>
      <div className="pyq-grid">
        <a href="/pyq/pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 1" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Psychometric PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Psychometric PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Psychometric PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Psychometric?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Psychometric Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default Psychometric;
