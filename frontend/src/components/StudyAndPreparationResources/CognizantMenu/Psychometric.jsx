import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import {
  personalityTraitsQuestions, introversionExtroversionQuestions, emotionalStabilityQuestions,
  opennessToExperienceQuestions, conscientiousnessQuestions, agreeablenessQuestions,
  leadershipTraitsQuestions, confidenceQuestions, adaptabilityQuestions, responsibilityQuestions
} from './PsychometricQuestions1';
import {
  teamworkQuestions, communicationQuestions, timeManagementQuestions,
  decisionMakingQuestions, problemSolvingQuestions, stressManagementQuestions,
  conflictManagementQuestions, initiativeQuestions, accountabilityQuestions, workEthicsQuestions
} from './PsychometricQuestions2';
import {
  workplaceScenariosQuestions, ethicalSituationsQuestions, teamConflictsQuestions,
  leadershipSituationsQuestions, customerSituationsQuestions, deadlineManagementQuestions,
  workplacePrioritizationQuestions, handlingFailureQuestions, handlingCriticismQuestions,
  workplaceDecisionMakingQuestions
} from './PsychometricQuestions3';

const Psychometric = () => {
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
            <h4 className="pyq-name">Psychometric PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Psychometric PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Psychometric PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Psychometric?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Psychometric Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default Psychometric;
