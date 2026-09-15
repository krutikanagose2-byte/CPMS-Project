import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import { rulesbasedLogicGamesQuestions } from '../../../data/rulesbasedLogicGamesQuestions';
import { rankingOrderingGamesQuestions } from '../../../data/rankingOrderingGamesQuestions';
import { pathfindingGameQuestions } from '../../../data/pathfindingGameQuestions';
import { numberGamesQuestions } from '../../../data/numberGamesQuestions';
import { memoryGamesQuestions } from '../../../data/memoryGamesQuestions';
import { patternRecognitionQuestions } from '../../../data/patternRecognitionQuestions';
import { logicalPuzzleGamesQuestions } from '../../../data/logicalPuzzleGamesQuestions';
import { sequenceSeriesGamesQuestions } from '../../../data/sequenceSeriesGamesQuestions';
import { strategyGamesQuestions } from '../../../data/strategyGamesQuestions';
import { probabilityGamesQuestions } from '../../../data/probabilityGamesQuestions';
import { gridbasedGamesQuestions } from '../../../data/gridbasedGamesQuestions';
import { matchingGroupingGamesQuestions } from '../../../data/matchingGroupingGamesQuestions';
import { schedulingGamesQuestions } from '../../../data/schedulingGamesQuestions';
import { optimizationGamesQuestions } from '../../../data/optimizationGamesQuestions';
import { reactionAttentionGamesQuestions } from '../../../data/reactionAttentionGamesQuestions';
import { mathematicalGamesQuestions } from '../../../data/mathematicalGamesQuestions';
import { visualPatternGamesQuestions } from '../../../data/visualPatternGamesQuestions';
import { resourceManagementGamesQuestions } from '../../../data/resourceManagementGamesQuestions';
import { pathfindingGamesQuestions } from '../../../data/pathfindingGamesQuestions';


const GameBasedAptitude = () => {
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
