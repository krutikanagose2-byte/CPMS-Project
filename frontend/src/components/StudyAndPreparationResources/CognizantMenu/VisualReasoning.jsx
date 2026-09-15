import { paperFoldingQuestions } from '../../../data/paperFoldingQuestions';
import { paperCuttingQuestions } from '../../../data/paperCuttingQuestions';
import { embeddedFiguresQuestions } from '../../../data/embeddedFiguresQuestions';
import { countingFiguresQuestions } from '../../../data/countingFiguresQuestions';
import { patternCompletionQuestions } from '../../../data/patternCompletionQuestions';
import { cubeAndDiceQuestions } from '../../../data/cubeAndDiceQuestions';
import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';


const VisualReasoning = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { id: 1, title: 'Figure Series', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: null },
    { id: 2, title: 'Figure Analogy', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: null },
    { id: 3, title: 'Figure Classification', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: null },
    { id: 4, title: 'Mirror Images', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: null },
    { id: 5, title: 'Water Images', questions: 20, color: '#dcfce7', iconColor: '#22c55e', data: null },
    { id: 6, title: 'Paper Folding', questions: 20, color: '#ffedd5', iconColor: '#f97316', data: paperFoldingQuestions },
    { id: 7, title: 'Paper Cutting', questions: 20, color: '#fce7f3', iconColor: '#ec4899', data: paperCuttingQuestions },
    { id: 8, title: 'Embedded Figures', questions: 20, color: '#ccfbf1', iconColor: '#14b8a6', data: embeddedFiguresQuestions },
    { id: 9, title: 'Counting Figures', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: countingFiguresQuestions },
    { id: 10, title: 'Pattern Completion', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: patternCompletionQuestions },
    { id: 11, title: 'Cube & Dice', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: cubeAndDiceQuestions },
    { id: 12, title: 'Figure Rotation', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: null },
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
