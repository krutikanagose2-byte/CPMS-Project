import { technologyQuestions } from '../../../data/technologyQuestions';
import { aiQuestions } from '../../../data/aiQuestions';
import { educationQuestions } from '../../../data/educationQuestions';
import { socialMediaQuestions } from '../../../data/socialMediaQuestions';
import { environmentQuestions } from '../../../data/environmentQuestions';
import { digitalIndiaQuestions } from '../../../data/digitalIndiaQuestions';
import { wfhQuestions } from '../../../data/wfhQuestions';
import { womenEmpowermentQuestions } from '../../../data/womenEmpowermentQuestions';
import { onlineEducationQuestions } from '../../../data/onlineEducationQuestions';
import { cyberSecurityQuestions } from '../../../data/cyberSecurityQuestions';
import { climateChangeQuestions } from '../../../data/climateChangeQuestions';
import { startupQuestions } from '../../../data/startupQuestions';
import { aiJobsQuestions } from '../../../data/aiJobsQuestions';
import { dataPrivacyQuestions } from '../../../data/dataPrivacyQuestions';
import { teamworkEssayQuestions } from '../../../data/teamworkEssayQuestions';
import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';


const EssayWriting = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { id: 1, title: 'Technology', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: technologyQuestions },
    { id: 2, title: 'Artificial Intelligence', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: aiQuestions },
    { id: 3, title: 'Education', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: educationQuestions },
    { id: 4, title: 'Social Media', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: socialMediaQuestions },
    { id: 5, title: 'Environment', questions: 20, color: '#dcfce7', iconColor: '#22c55e', data: environmentQuestions },
    { id: 6, title: 'Digital India', questions: 20, color: '#ffedd5', iconColor: '#f97316', data: digitalIndiaQuestions },
    { id: 7, title: 'Work From Home', questions: 20, color: '#fce7f3', iconColor: '#ec4899', data: wfhQuestions },
    { id: 8, title: 'Women Empowerment', questions: 20, color: '#ccfbf1', iconColor: '#14b8a6', data: womenEmpowermentQuestions },
    { id: 9, title: 'Online Education', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: onlineEducationQuestions },
    { id: 10, title: 'Cyber Security', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: cyberSecurityQuestions },
    { id: 11, title: 'Climate Change', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: climateChangeQuestions },
    { id: 12, title: 'Startup & Entrepreneurship', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: startupQuestions },
    { id: 13, title: 'Impact of AI on Jobs', questions: 20, color: '#dcfce7', iconColor: '#22c55e', data: aiJobsQuestions },
    { id: 14, title: 'Data Privacy', questions: 20, color: '#ffedd5', iconColor: '#f97316', data: dataPrivacyQuestions },
    { id: 15, title: 'Importance of Teamwork', questions: 20, color: '#fce7f3', iconColor: '#ec4899', data: teamworkEssayQuestions },
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
      <h2 className="csr-topics-title" style={{marginBottom: '20px'}}>Previous Year Questions</h2>
      <div className="pyq-grid">
        <a href="/pyq/pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 1" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Essay Writing PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Essay Writing PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Essay Writing PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Essay Writing?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Essay Writing Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default EssayWriting;
