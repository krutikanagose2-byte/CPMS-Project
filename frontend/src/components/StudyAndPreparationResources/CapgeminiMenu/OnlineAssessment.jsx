import React, { useState } from 'react';
import LogicalReasoning from './LogicalReasoning';
import QuantitativeAptitude from './QuantitativeAptitude';
import VerbalAbility from './VerbalAbility';
import DataInterpretation from './DataInterpretation';
import VisualReasoning from './VisualReasoning';
import Psychometric from './Psychometric';
import Cryptarithmetic from './Cryptarithmetic';
import EssayWriting from './EssayWriting';

const aptitudeTopics = [
  { id: 1, title: 'Quantitative Aptitude', questions: 150, color: '#e0f2fe', iconColor: '#0ea5e9' },
  { id: 2, title: 'Logical Reasoning', questions: 120, color: '#fef3c7', iconColor: '#f59e0b' },
  { id: 3, title: 'Verbal', questions: 100, color: '#f3e8ff', iconColor: '#a855f7' },
  { id: 5, title: 'Data Interpretation', questions: 90, color: '#ffedd5', iconColor: '#f97316' },
  { id: 6, title: 'Visual Reasoning', questions: 60, color: '#fee2e2', iconColor: '#ef4444' },
  { id: 7, title: 'Psychometric', questions: 50, color: '#fef3c7', iconColor: '#f59e0b' },
  { id: 8, title: 'Cryptarithmetic', questions: 40, color: '#e0f2fe', iconColor: '#0ea5e9' },
  { id: 9, title: 'Essay Writing', questions: 20, color: '#dcfce7', iconColor: '#22c55e' },
];

const OnlineAssessment = ({ company }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (selectedTopic === 'Logical Reasoning') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px'}}>
           <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
           </svg>
           Back to Online Assessment
         </button>
         <LogicalReasoning />
      </div>
    );
  }

  if (selectedTopic === 'Quantitative Aptitude') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px'}}>
           <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
           </svg>
           Back to Online Assessment
         </button>
         <QuantitativeAptitude />
      </div>
    );
  }

  if (selectedTopic === 'Verbal') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px'}}>+? Back to Online Assessment</button>
         <VerbalAbility />
      </div>
    );
  }

  if (selectedTopic === 'Data Interpretation') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px'}}>+? Back to Online Assessment</button>
         <DataInterpretation />
      </div>
    );
  }

  if (selectedTopic === 'Visual Reasoning') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px'}}>+? Back to Online Assessment</button>
         <VisualReasoning />
      </div>
    );
  }

  if (selectedTopic === 'Psychometric') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px'}}>+? Back to Online Assessment</button>
         <Psychometric />
      </div>
    );
  }

  if (selectedTopic === 'Cryptarithmetic') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px'}}>+? Back to Online Assessment</button>
         <Cryptarithmetic />
      </div>
    );
  }

  if (selectedTopic === 'Essay Writing') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px'}}>+? Back to Online Assessment</button>
         <EssayWriting />
      </div>
    );
  }

  return (
    <div className="csr-content-body">
      <div className="csr-aptitude-header">
        <h1 className="csr-page-title">All Topics</h1>
        <div className="csr-aptitude-actions">
          <button className="csr-action-btn">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            Filter
          </button>
          <button className="csr-action-btn">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
            Sort
          </button>
        </div>
      </div>
      
      <div className="csr-topics-grid">
        {aptitudeTopics.map((topic) => (
          <div 
            key={topic.id} 
            className="csr-topic-card" 
            onClick={() => setSelectedTopic(topic.title)}
            style={{ cursor: 'pointer' }}
          >
            <div className="csr-topic-icon" style={{ backgroundColor: topic.color, color: topic.iconColor }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <div className="csr-topic-info">
              <h3 className="csr-topic-title">{topic.title}</h3>
              <span className="csr-topic-questions">{topic.questions} Questions</span>
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

export default OnlineAssessment;
