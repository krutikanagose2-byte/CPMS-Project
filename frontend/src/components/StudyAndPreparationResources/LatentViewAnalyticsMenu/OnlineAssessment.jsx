import React, { useState } from 'react';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';
import LogicalReasoning from '../CognizantMenu/LogicalReasoning';

const assessmentTopics = [
  { id: 1, title: 'Quantitative Aptitude', questions: '150+ Questions', color: '#e0f2fe', iconColor: '#0ea5e9', icon: '📐' },
  { id: 2, title: 'Logical Reasoning', questions: '120+ Questions', color: '#fef3c7', iconColor: '#f59e0b', icon: '🧩' }
];

const OnlineAssessment = ({ company }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (selectedTopic === 'Quantitative Aptitude') {
    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Assessment
        </button>
        <QuantitativeAptitude company={company} />
      </div>
    );
  }

  if (selectedTopic === 'Logical Reasoning') {
    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Assessment
        </button>
        <LogicalReasoning company={company} />
      </div>
    );
  }

  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'LatentView Analytics'} - Online Assessment</h2>
        <p className="csr-paragraph">
          Prepare for LatentView Analytics assessment with Quantitative Aptitude and Logical Reasoning practice questions.
        </p>

        <div className="csr-topics-grid" style={{ marginTop: '24px' }}>
          {assessmentTopics.map((topic) => (
            <div
              key={topic.id}
              className="csr-topic-card"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedTopic(topic.title)}
            >
              <div className="csr-topic-icon" style={{ backgroundColor: topic.color, color: topic.iconColor }}>
                <span style={{ fontSize: '20px' }}>{topic.icon}</span>
              </div>
              <div className="csr-topic-info">
                <h3 className="csr-topic-title">{topic.title}</h3>
                <span className="csr-topic-questions">{topic.questions}</span>
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

export default OnlineAssessment;
