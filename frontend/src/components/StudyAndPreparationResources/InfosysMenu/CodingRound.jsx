import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import CodingAssessmentEnvironment from '../../common/CodingAssessmentEnvironment';

const CodingRound = ({ company }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { id: 1, title: 'C', questions: 10, color: '#e0f2fe', iconColor: '#0ea5e9' },
    { id: 2, title: 'C++', questions: 10, color: '#fef3c7', iconColor: '#f59e0b' },
    { id: 3, title: 'Java', questions: 10, color: '#f3e8ff', iconColor: '#a855f7' },
    { id: 4, title: 'Python', questions: 10, color: '#dcfce7', iconColor: '#22c55e' },
    { id: 5, title: 'SQL', questions: 10, color: '#ffedd5', iconColor: '#f97316' },
    { id: 6, title: 'Web Development (HTML/CSS/JS)', questions: 10, color: '#e0f2fe', iconColor: '#0ea5e9' },
  ];

  const handleTopicClick = (t) => {
    setSelectedTopic(t);
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    return (
      <CodingAssessmentEnvironment
        initialLanguage={selectedTopic.title}
        onBack={handleBackToTopics}
        companyName={company?.name || 'Infosys'}
      />
    );
  }

  const pyqHeaderContent = (
    <div className="pyq-section">
      <h2 className="csr-topics-title" style={{ marginBottom: '20px' }}>Previous Year Questions</h2>
      <div className="pyq-grid">
        <a href="/pyq/tech_pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/tech_pyq1_thumb.png" alt="PYQ 1" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Technical PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/tech_pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/tech_pyq2_thumb.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Technical PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/tech_pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/tech_pyq3_thumb.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Technical PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid
      topics={topics}
      bannerTitle="Ready to Test Your Technical Skills?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Technical Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default CodingRound;
