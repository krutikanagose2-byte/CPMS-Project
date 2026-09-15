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

  const topics = [
  {
    "id": 1,
    "title": "Figure Classification",
    "questions": 15,
    "color": "blue",
    "data": figureClassificationQuestions
  },
  {
    "id": 2,
    "title": "Figure Analogy",
    "questions": 15,
    "color": "green",
    "data": figureAnalogyQuestions
  },
  {
    "id": 3,
    "title": "Figure Series",
    "questions": 15,
    "color": "purple",
    "data": figureSeriesQuestions
  },
  {
    "id": 4,
    "title": "Missing Figure",
    "questions": 15,
    "color": "red",
    "data": missingFigureQuestions
  },
  {
    "id": 5,
    "title": "Odd Figure Out",
    "questions": 15,
    "color": "orange",
    "data": oddFigureOutQuestions
  },
  {
    "id": 6,
    "title": "Mirror Images",
    "questions": 15,
    "color": "yellow",
    "data": mirrorImagesQuestions
  },
  {
    "id": 7,
    "title": "Water Images",
    "questions": 15,
    "color": "blue",
    "data": waterImagesQuestions
  },
  {
    "id": 8,
    "title": "Rotation of Figures",
    "questions": 15,
    "color": "green",
    "data": rotationOfFiguresQuestions
  },
  {
    "id": 9,
    "title": "Paper Folding",
    "questions": 15,
    "color": "purple",
    "data": paperFoldingQuestions
  },
  {
    "id": 10,
    "title": "Paper Cutting",
    "questions": 15,
    "color": "red",
    "data": paperCuttingQuestions
  },
  {
    "id": 11,
    "title": "Embedded Figures",
    "questions": 15,
    "color": "orange",
    "data": embeddedFiguresQuestions
  },
  {
    "id": 12,
    "title": "Figure Completion",
    "questions": 15,
    "color": "yellow",
    "data": figureCompletionQuestions
  },
  {
    "id": 13,
    "title": "Pattern Completion",
    "questions": 15,
    "color": "blue",
    "data": patternCompletionQuestions
  },
  {
    "id": 14,
    "title": "Shape Matching",
    "questions": 15,
    "color": "green",
    "data": shapeMatchingQuestions
  },
  {
    "id": 15,
    "title": "Visual Counting",
    "questions": 15,
    "color": "purple",
    "data": visualCountingQuestions
  },
  {
    "id": 16,
    "title": "Cube & Dice",
    "questions": 15,
    "color": "red",
    "data": cubeAndDiceQuestions
  },
  {
    "id": 17,
    "title": "2D to 3D Visualization",
    "questions": 15,
    "color": "orange",
    "data": visualization2DTo3DQuestions
  },
  {
    "id": 18,
    "title": "Spatial Orientation",
    "questions": 15,
    "color": "yellow",
    "data": spatialOrientationQuestions
  },
  {
    "id": 19,
    "title": "Image Comparison",
    "questions": 15,
    "color": "blue",
    "data": imageComparisonQuestions
  },
  {
    "id": 20,
    "title": "Visual Memory",
    "questions": 15,
    "color": "green",
    "data": visualMemoryQuestions
  },
  {
    "id": 21,
    "title": "Position & Direction",
    "questions": 15,
    "color": "purple",
    "data": positionDirectionQuestions
  },
  {
    "id": 22,
    "title": "Symmetry",
    "questions": 15,
    "color": "red",
    "data": symmetryQuestions
  },
  {
    "id": 23,
    "title": "Hidden Figures",
    "questions": 15,
    "color": "orange",
    "data": hiddenFiguresQuestions
  },
  {
    "id": 24,
    "title": "Matrix-Based Figures",
    "questions": 15,
    "color": "yellow",
    "data": matrixBasedFiguresQuestions
  },
  {
    "id": 25,
    "title": "Shape Transformation",
    "questions": 15,
    "color": "blue",
    "data": shapeTransformationQuestions
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
