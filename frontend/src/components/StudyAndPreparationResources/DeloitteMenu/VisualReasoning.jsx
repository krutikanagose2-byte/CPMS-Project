import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';

const VisualReasoning = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
  {
    "id": 1,
    "title": "Figure Classification",
    "questions": 3,
    "color": "blue"
  },
  {
    "id": 2,
    "title": "Figure Analogy",
    "questions": 3,
    "color": "green"
  },
  {
    "id": 3,
    "title": "Figure Series",
    "questions": 3,
    "color": "purple"
  },
  {
    "id": 4,
    "title": "Missing Figure",
    "questions": 3,
    "color": "red"
  },
  {
    "id": 5,
    "title": "Odd Figure Out",
    "questions": 3,
    "color": "orange"
  },
  {
    "id": 6,
    "title": "Mirror Images",
    "questions": 3,
    "color": "yellow"
  },
  {
    "id": 7,
    "title": "Water Images",
    "questions": 3,
    "color": "blue"
  },
  {
    "id": 8,
    "title": "Rotation of Figures",
    "questions": 3,
    "color": "green"
  },
  {
    "id": 9,
    "title": "Paper Folding",
    "questions": 3,
    "color": "purple"
  },
  {
    "id": 10,
    "title": "Paper Cutting",
    "questions": 3,
    "color": "red"
  },
  {
    "id": 11,
    "title": "Embedded Figures",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 12,
    "title": "Figure Completion",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 13,
    "title": "Pattern Completion",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 14,
    "title": "Shape Matching",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 15,
    "title": "Visual Counting",
    "questions": 2,
    "color": "purple"
  },
  {
    "id": 16,
    "title": "Cube & Dice",
    "questions": 2,
    "color": "red"
  },
  {
    "id": 17,
    "title": "2D to 3D Visualization",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 18,
    "title": "Spatial Orientation",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 19,
    "title": "Image Comparison",
    "questions": 2,
    "color": "blue"
  },
  {
    "id": 20,
    "title": "Visual Memory",
    "questions": 2,
    "color": "green"
  },
  {
    "id": 21,
    "title": "Position & Direction",
    "questions": 2,
    "color": "purple"
  },
  {
    "id": 22,
    "title": "Symmetry",
    "questions": 2,
    "color": "red"
  },
  {
    "id": 23,
    "title": "Hidden Figures",
    "questions": 2,
    "color": "orange"
  },
  {
    "id": 24,
    "title": "Matrix-Based Figures",
    "questions": 2,
    "color": "yellow"
  },
  {
    "id": 25,
    "title": "Shape Transformation",
    "questions": 2,
    "color": "blue"
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
            <h4 className="pyq-name">Visual Reasoning PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Visual Reasoning PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Visual Reasoning PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Visual Reasoning?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Visual Reasoning Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default VisualReasoning;
