import React, { useState } from 'react';
import Technical from '../CognizantMenu/Technical';
import Interview from '../CognizantMenu/Interview';

const interviewSections = [
  { id: 1, title: 'Technical Preparation', description: 'Core CS Concepts, Coding & Architecture', color: '#dcfce7', iconColor: '#22c55e', icon: '💻' },
  { id: 2, title: 'Managerial & HR Interview', description: 'Behavioral Questions & AI Mock Practice', color: '#f0fdf4', iconColor: '#16a34a', icon: '🎙️' }
];

const TechnicalInterview = ({ company, onOpenAIInterview }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  if (selectedSection === 'Technical Preparation') {
    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setSelectedSection(null)} className="csr-back-btn" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Technical Interview
        </button>
        <Technical company={company} />
      </div>
    );
  }

  if (selectedSection === 'Managerial & HR Interview') {
    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setSelectedSection(null)} className="csr-back-btn" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Technical Interview
        </button>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />
      </div>
    );
  }

  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'IBM'} - Technical & Managerial Interview</h2>
        <p className="csr-paragraph">
          Prepare for IBM Technical interview questions and HR managerial rounds.
        </p>

        <div className="csr-topics-grid" style={{ marginTop: '24px' }}>
          {interviewSections.map((sec) => (
            <div
              key={sec.id}
              className="csr-topic-card"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedSection(sec.title)}
            >
              <div className="csr-topic-icon" style={{ backgroundColor: sec.color, color: sec.iconColor }}>
                <span style={{ fontSize: '20px' }}>{sec.icon}</span>
              </div>
              <div className="csr-topic-info">
                <h3 className="csr-topic-title">{sec.title}</h3>
                <span className="csr-topic-questions">{sec.description}</span>
              </div>
              <div className="csr-topic-arrow">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalInterview;
