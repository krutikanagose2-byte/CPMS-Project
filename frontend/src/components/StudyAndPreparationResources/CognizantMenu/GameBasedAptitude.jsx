import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';

const GameBasedAptitude = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
  {
    "id": 1,
    "title": "Number Games",
    "questions": 4,
    "color": "blue"
  },
  {
    "id": 2,
    "title": "Memory Games",
    "questions": 4,
    "color": "green"
  },
  {
    "id": 3,
    "title": "Pattern Recognition",
    "questions": 4,
    "color": "purple"
  },
  {
    "id": 4,
    "title": "Logical Puzzle Games",
    "questions": 4,
    "color": "red"
  },
  {
    "id": 5,
    "title": "Sequence & Series Games",
    "questions": 4,
    "color": "orange"
  },
  {
    "id": 6,
    "title": "Spatial Reasoning Games",
    "questions": 4,
    "color": "yellow"
  },
  {
    "id": 7,
    "title": "Decision-Making Games",
    "questions": 4,
    "color": "blue"
  },
  {
    "id": 8,
    "title": "Strategy Games",
    "questions": 4,
    "color": "green"
  },
  {
    "id": 9,
    "title": "Probability Games",
    "questions": 4,
    "color": "purple"
  },
  {
    "id": 10,
    "title": "Grid-Based Games",
    "questions": 4,
    "color": "red"
  },
  {
    "id": 11,
    "title": "Matching & Grouping Games",
    "questions": 4,
    "color": "orange"
  },
  {
    "id": 12,
    "title": "Scheduling Games",
    "questions": 4,
    "color": "yellow"
  },
  {
    "id": 13,
    "title": "Optimization Games",
    "questions": 4,
    "color": "blue"
  },
  {
    "id": 14,
    "title": "Reaction & Attention Games",
    "questions": 4,
    "color": "green"
  },
  {
    "id": 15,
    "title": "Mathematical Games",
    "questions": 4,
    "color": "purple"
  },
  {
    "id": 16,
    "title": "Visual Pattern Games",
    "questions": 4,
    "color": "red"
  },
  {
    "id": 17,
    "title": "Resource Management Games",
    "questions": 4,
    "color": "orange"
  },
  {
    "id": 18,
    "title": "Path-Finding Games",
    "questions": 4,
    "color": "yellow"
  },
  {
    "id": 19,
    "title": "Ranking & Ordering Games",
    "questions": 4,
    "color": "blue"
  },
  {
    "id": 20,
    "title": "Rules-Based Logic Games",
    "questions": 4,
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
            <h4 className="pyq-name">Game Based Aptitude PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Game Based Aptitude PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Game Based Aptitude PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Game Based Aptitude?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Game Based Aptitude Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default GameBasedAptitude;
