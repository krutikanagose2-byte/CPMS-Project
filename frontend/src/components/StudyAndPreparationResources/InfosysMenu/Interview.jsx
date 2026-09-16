import React from 'react';

const interviewTopics = [
  { id: 1, title: 'Technical Interview', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', isAI: true },
  { id: 2, title: 'HR / Managerial Interview', questions: 15, color: '#f3e8ff', iconColor: '#a855f7', isAI: true },
];

const Interview = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-aptitude-header">
        <h1 className="csr-page-title">Interviews</h1>
      </div>
      
      <div className="csr-topics-grid">
        {interviewTopics.map((topic) => (
          <div
            key={topic.id}
            className="csr-topic-card"
            onClick={topic.isAI && onOpenAIInterview ? () => onOpenAIInterview(company) : undefined}
            style={{ cursor: topic.isAI ? 'pointer' : 'default' }}
          >
            <div className="csr-topic-icon" style={{ backgroundColor: topic.color, color: topic.iconColor }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <div className="csr-topic-info">
              <h3 className="csr-topic-title">{topic.title}</h3>
              <span className="csr-topic-questions">
                {topic.isAI ? '🎙️ Start AI Interview' : `${topic.questions} Questions`}
              </span>
            </div>
            <div className="csr-topic-arrow">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interview;
