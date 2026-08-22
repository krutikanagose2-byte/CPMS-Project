import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';

const Cryptarithmetic = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
  {
    "id": 1,
    "title": "Alphabet-to-Number Coding",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 2,
    "title": "Number-to-Letter Coding",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 3,
    "title": "Letter Value Problems",
    "questions": 2,
    "color": "purple"
  },
  {
    "id": 4,
    "title": "Simple Addition Cryptarithms",
    "questions": 2,
    "color": "red"
  },
  {
    "id": 5,
    "title": "Subtraction Cryptarithms",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 6,
    "title": "Multiplication Cryptarithms",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 7,
    "title": "Division Cryptarithms",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 8,
    "title": "Carry-Based Problems",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 9,
    "title": "Missing Digit Problems",
    "questions": 2,
    "color": "purple"
  },
  {
    "id": 10,
    "title": "Unique Digit Assignment",
    "questions": 2,
    "color": "red"
  },
  {
    "id": 11,
    "title": "Alphametic Puzzles",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 12,
    "title": "Word Addition",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 13,
    "title": "Word Subtraction",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 14,
    "title": "Word Multiplication",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 15,
    "title": "Word Division",
    "questions": 2,
    "color": "purple"
  },
  {
    "id": 16,
    "title": "Base-10 Cryptarithms",
    "questions": 2,
    "color": "red"
  },
  {
    "id": 17,
    "title": "Constraint-Based Cryptarithms",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 18,
    "title": "Repeated Letter Problems",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 19,
    "title": "Leading-Digit Restrictions",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 20,
    "title": "Multi-Word Cryptarithms",
    "questions": 2,
    "color": "green"
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
            <h4 className="pyq-name">Cryptarithmetic PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Cryptarithmetic PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Cryptarithmetic PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Cryptarithmetic?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Cryptarithmetic Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default Cryptarithmetic;
