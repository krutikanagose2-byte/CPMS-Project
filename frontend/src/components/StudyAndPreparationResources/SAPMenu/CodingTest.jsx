import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import {
  cCodingQuestions, cppCodingQuestions, javaCodingQuestions,
  pythonCodingQuestions, sqlCodingQuestions, javascriptCodingQuestions,
  webDevCodingQuestions
} from './TechnicalQuestions';

const CodingTest = ({ company }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { id: 1, title: 'C', questions: 15, color: '#e0f2fe', iconColor: '#0ea5e9', data: cCodingQuestions },
    { id: 2, title: 'C++', questions: 15, color: '#fef3c7', iconColor: '#f59e0b', data: cppCodingQuestions },
    { id: 3, title: 'Java', questions: 15, color: '#f3e8ff', iconColor: '#a855f7', data: javaCodingQuestions },
    { id: 4, title: 'Python', questions: 15, color: '#dcfce7', iconColor: '#22c55e', data: pythonCodingQuestions },
    { id: 5, title: 'SQL', questions: 15, color: '#ffedd5', iconColor: '#f97316', data: sqlCodingQuestions },
    { id: 7, title: 'Web Development (HTML/CSS/JS)', questions: 11, color: '#e0f2fe', iconColor: '#0ea5e9', data: webDevCodingQuestions },
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
        hideOptions={true}
      />
    );
  }

  const pyqHeaderContent = (
    <div className="pyq-section">
      <h2 className="csr-topics-title" style={{ marginBottom: '20px' }}>Previous Year Questions</h2>
      <div className="pyq-grid">
        <a href="/pyq/pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 1" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Technical PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Technical PYQ 2</h4>
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

export default CodingTest;
