import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import {
  figureClassificationQuestions, figureAnalogyQuestions, figureSeriesQuestions,
  missingFigureQuestions, oddFigureOutQuestions, mirrorImagesQuestions,
  waterImagesQuestions, rotationOfFiguresQuestions
} from './VisualReasoningQuestions1';
import {
  paperFoldingQuestions, paperCuttingQuestions, embeddedFiguresQuestions,
  figureCompletionQuestions, patternCompletionQuestions, shapeMatchingQuestions,
  visualCountingQuestions, cubeAndDiceQuestions
} from './VisualReasoningQuestions2';
import {
  visualization2DTo3DQuestions, spatialOrientationQuestions, imageComparisonQuestions,
  visualMemoryQuestions, positionDirectionQuestions, symmetryQuestions,
  hiddenFiguresQuestions, matrixBasedFiguresQuestions, shapeTransformationQuestions
} from './VisualReasoningQuestions3';

const VisualReasoning = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = []; // Placeholder for actual topics

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
