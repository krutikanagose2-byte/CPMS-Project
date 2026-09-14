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
  {
    "id": 1,
    "title": "Number Games",
    "data": numberGamesQuestions,
    "questions": numberGamesQuestions.length,
    "color": "blue"
  },
  {
    "id": 2,
    "title": "Memory Games",
    "data": memoryGamesQuestions,
    "questions": memoryGamesQuestions.length,
    "color": "green"
  },
  {
    "id": 3,
    "title": "Pattern Recognition",
    "data": patternRecognitionQuestions,
    "questions": patternRecognitionQuestions.length,
    "color": "purple"
  },
  {
    "id": 4,
    "title": "Logical Puzzle Games",
    "data": logicalPuzzleGamesQuestions,
    "questions": logicalPuzzleGamesQuestions.length,
    "color": "red"
  },
  {
    "id": 5,
    "title": "Sequence & Series Games",
    "data": sequenceSeriesGamesQuestions,
    "questions": sequenceSeriesGamesQuestions.length,
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
    "data": strategyGamesQuestions,
    "questions": strategyGamesQuestions.length,
    "color": "green"
  },
  {
    "id": 9,
    "title": "Probability Games",
    "data": probabilityGamesQuestions,
    "questions": probabilityGamesQuestions.length,
    "color": "purple"
  },
  {
    "id": 10,
    "title": "Grid-Based Games",
    "data": gridbasedGamesQuestions,
    "questions": gridbasedGamesQuestions.length,
    "color": "red"
  },
  {
    "id": 11,
    "title": "Matching & Grouping Games",
    "data": matchingGroupingGamesQuestions,
    "questions": matchingGroupingGamesQuestions.length,
    "color": "orange"
  },
  {
    "id": 12,
    "title": "Scheduling Games",
    "data": schedulingGamesQuestions,
    "questions": schedulingGamesQuestions.length,
    "color": "yellow"
  },
  {
    "id": 13,
    "title": "Optimization Games",
    "data": optimizationGamesQuestions,
    "questions": optimizationGamesQuestions.length,
    "color": "blue"
  },
  {
    "id": 14,
    "title": "Reaction & Attention Games",
    "data": reactionAttentionGamesQuestions,
    "questions": reactionAttentionGamesQuestions.length,
    "color": "green"
  },
  {
    "id": 15,
    "title": "Mathematical Games",
    "data": mathematicalGamesQuestions,
    "questions": mathematicalGamesQuestions.length,
    "color": "purple"
  },
  {
    "id": 16,
    "title": "Visual Pattern Games",
    "data": visualPatternGamesQuestions,
    "questions": visualPatternGamesQuestions.length,
    "color": "red"
  },
  {
    "id": 17,
    "title": "Resource Management Games",
    "data": resourceManagementGamesQuestions,
    "questions": resourceManagementGamesQuestions.length,
    "color": "orange"
  },
  {
    "id": 18,
    "title": "Path-Finding Games",
    "data": pathfindingGameQuestions,
    "questions": pathfindingGameQuestions.length,
    "color": "yellow"
  },
  {
    "id": 19,
    "title": "Ranking & Ordering Games",
    "data": rankingOrderingGamesQuestions,
    "questions": rankingOrderingGamesQuestions.length,
    "color": "blue"
  },
  {
    "id": 20,
    "title": "Rules-Based Logic Games",
    "data": rulesbasedLogicGamesQuestions,
    "questions": rulesbasedLogicGamesQuestions.length,
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
