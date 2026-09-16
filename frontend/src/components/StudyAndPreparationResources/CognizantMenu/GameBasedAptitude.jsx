import { diceGamesQuestions } from '../../../data/diceGamesQuestions';
import { cardsPlayingGamesQuestions } from '../../../data/cardsPlayingGamesQuestions';
import { coinGamesQuestions } from '../../../data/coinGamesQuestions';
import { selectionGamesQuestions } from '../../../data/selectionGamesQuestions';
import { arrangementGamesQuestions } from '../../../data/arrangementGamesQuestions';
import { scoreBasedGamesQuestions } from '../../../data/scoreBasedGamesQuestions';
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

  const topics = [
    { id: 1, title: 'Number Games', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: numberGamesQuestions },
    { id: 2, title: 'Dice Games', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: diceGamesQuestions },
    { id: 3, title: 'Cards & Playing Games', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: cardsPlayingGamesQuestions },
    { id: 4, title: 'Coin Games', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: coinGamesQuestions },
    { id: 5, title: 'Selection Games', questions: 20, color: '#dcfce7', iconColor: '#22c55e', data: selectionGamesQuestions },
    { id: 6, title: 'Arrangement Games', questions: 20, color: '#ffedd5', iconColor: '#f97316', data: arrangementGamesQuestions },
    { id: 7, title: 'Game/Score Based Problems', questions: 20, color: '#fce7f3', iconColor: '#ec4899', data: scoreBasedGamesQuestions },
    { id: 8, title: 'Logical Game Puzzles', questions: 20, color: '#ccfbf1', iconColor: '#14b8a6', data: logicalPuzzleGamesQuestions },
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
