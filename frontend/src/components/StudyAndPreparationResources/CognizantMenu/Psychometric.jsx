import { personalityQuestions } from '../../../data/personalityQuestions';
import { situationalJudgementQuestions } from '../../../data/situationalJudgementQuestions';
import { behaviouralQuestions } from '../../../data/behaviouralQuestions';
import { workStyleQuestions } from '../../../data/workStyleQuestions';
import { leadershipQuestions } from '../../../data/leadershipQuestions';
import { teamworkQuestions } from '../../../data/teamworkQuestions';
import { communicationQuestions } from '../../../data/communicationQuestions';
import { problemSolvingQuestions } from '../../../data/problemSolvingQuestions';
import { decisionMakingQuestions } from '../../../data/decisionMakingQuestions';
import { stressManagementQuestions } from '../../../data/stressManagementQuestions';
import { adaptabilityQuestions } from '../../../data/adaptabilityQuestions';
import { motivationAttitudeQuestions } from '../../../data/motivationAttitudeQuestions';
import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';


const Psychometric = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { id: 1, title: 'Personality Questions', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: personalityQuestions },
    { id: 2, title: 'Situational Judgement', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: situationalJudgementQuestions },
    { id: 3, title: 'Behavioural Questions', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: behaviouralQuestions },
    { id: 4, title: 'Work Style', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: workStyleQuestions },
    { id: 5, title: 'Leadership', questions: 20, color: '#dcfce7', iconColor: '#22c55e', data: leadershipQuestions },
    { id: 6, title: 'Teamwork', questions: 20, color: '#ffedd5', iconColor: '#f97316', data: teamworkQuestions },
    { id: 7, title: 'Communication', questions: 20, color: '#fce7f3', iconColor: '#ec4899', data: communicationQuestions },
    { id: 8, title: 'Problem Solving', questions: 20, color: '#ccfbf1', iconColor: '#14b8a6', data: problemSolvingQuestions },
    { id: 9, title: 'Decision Making', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: decisionMakingQuestions },
    { id: 10, title: 'Stress Management', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: stressManagementQuestions },
    { id: 11, title: 'Adaptability', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: adaptabilityQuestions },
    { id: 12, title: 'Motivation & Attitude', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: motivationAttitudeQuestions },
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
