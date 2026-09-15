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

  const topics = [
  {
    "id": 1,
    "title": "Personality Traits",
    "questions": 15,
    "color": "blue",
    "data": personalityTraitsQuestions
  },
  {
    "id": 2,
    "title": "Introversion & Extroversion",
    "questions": 15,
    "color": "green",
    "data": introversionExtroversionQuestions
  },
  {
    "id": 3,
    "title": "Emotional Stability",
    "questions": 15,
    "color": "purple",
    "data": emotionalStabilityQuestions
  },
  {
    "id": 4,
    "title": "Openness to Experience",
    "questions": 15,
    "color": "red",
    "data": opennessToExperienceQuestions
  },
  {
    "id": 5,
    "title": "Conscientiousness",
    "questions": 15,
    "color": "orange",
    "data": conscientiousnessQuestions
  },
  {
    "id": 6,
    "title": "Agreeableness",
    "questions": 15,
    "color": "yellow",
    "data": agreeablenessQuestions
  },
  {
    "id": 7,
    "title": "Leadership Traits",
    "questions": 15,
    "color": "blue",
    "data": leadershipTraitsQuestions
  },
  {
    "id": 8,
    "title": "Confidence",
    "questions": 15,
    "color": "green",
    "data": confidenceQuestions
  },
  {
    "id": 9,
    "title": "Adaptability",
    "questions": 15,
    "color": "purple",
    "data": adaptabilityQuestions
  },
  {
    "id": 10,
    "title": "Responsibility",
    "questions": 15,
    "color": "red",
    "data": responsibilityQuestions
  },
  {
    "id": 11,
    "title": "Teamwork",
    "questions": 15,
    "color": "orange",
    "data": teamworkQuestions
  },
  {
    "id": 12,
    "title": "Communication",
    "questions": 15,
    "color": "yellow",
    "data": communicationQuestions
  },
  {
    "id": 13,
    "title": "Time Management",
    "questions": 15,
    "color": "blue",
    "data": timeManagementQuestions
  },
  {
    "id": 14,
    "title": "Decision Making",
    "questions": 15,
    "color": "green",
    "data": decisionMakingQuestions
  },
  {
    "id": 15,
    "title": "Problem Solving",
    "questions": 15,
    "color": "purple",
    "data": problemSolvingQuestions
  },
  {
    "id": 16,
    "title": "Stress Management",
    "questions": 15,
    "color": "red",
    "data": stressManagementQuestions
  },
  {
    "id": 17,
    "title": "Conflict Management",
    "questions": 15,
    "color": "orange",
    "data": conflictManagementQuestions
  },
  {
    "id": 18,
    "title": "Initiative",
    "questions": 15,
    "color": "yellow",
    "data": initiativeQuestions
  },
  {
    "id": 19,
    "title": "Accountability",
    "questions": 15,
    "color": "blue",
    "data": accountabilityQuestions
  },
  {
    "id": 20,
    "title": "Work Ethics",
    "questions": 15,
    "color": "green",
    "data": workEthicsQuestions
  },
  {
    "id": 21,
    "title": "Workplace Scenarios",
    "questions": 15,
    "color": "purple",
    "data": workplaceScenariosQuestions
  },
  {
    "id": 22,
    "title": "Ethical Situations",
    "questions": 15,
    "color": "red",
    "data": ethicalSituationsQuestions
  },
  {
    "id": 23,
    "title": "Team Conflicts",
    "questions": 15,
    "color": "orange",
    "data": teamConflictsQuestions
  },
  {
    "id": 24,
    "title": "Leadership Situations",
    "questions": 15,
    "color": "yellow",
    "data": leadershipSituationsQuestions
  },
  {
    "id": 25,
    "title": "Customer Situations",
    "questions": 15,
    "color": "blue",
    "data": customerSituationsQuestions
  },
  {
    "id": 26,
    "title": "Deadline Management",
    "questions": 15,
    "color": "green",
    "data": deadlineManagementQuestions
  },
  {
    "id": 27,
    "title": "Workplace Prioritization",
    "questions": 15,
    "color": "purple",
    "data": workplacePrioritizationQuestions
  },
  {
    "id": 28,
    "title": "Handling Failure",
    "questions": 15,
    "color": "red",
    "data": handlingFailureQuestions
  },
  {
    "id": 29,
    "title": "Handling Criticism",
    "questions": 15,
    "color": "orange",
    "data": handlingCriticismQuestions
  },
  {
    "id": 30,
    "title": "Workplace Decision Making",
    "questions": 15,
    "color": "yellow",
    "data": workplaceDecisionMakingQuestions
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
