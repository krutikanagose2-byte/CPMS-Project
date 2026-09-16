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
    <>
      {/* Video Lectures & Playlists Section - Same size as Previous Year Questions */}
      <div className="pyq-section">
        <h2 className="csr-topics-title" style={{marginBottom: '20px'}}>Video Lectures &amp; Playlists</h2>
        <div className="pyq-grid">
          <div className="pyq-card">
            <div className="pyq-image-container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLMufDeLh5x2CxNp_LLqFnCGtcXBa1sCPw"
                title="Psychometric Test Video Playlist"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="pyq-info">
              <a
                href="https://youtube.com/playlist?list=PLMufDeLh5x2CxNp_LLqFnCGtcXBa1sCPw"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1e293b' }}
              >
                <h4 className="pyq-name" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="18" height="18" fill="#ef4444" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Psychometric Playlist
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>

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
    </>
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
