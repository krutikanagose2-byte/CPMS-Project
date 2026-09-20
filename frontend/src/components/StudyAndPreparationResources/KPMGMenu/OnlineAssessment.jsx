import React, { useState } from 'react';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';
import LogicalReasoning from '../CognizantMenu/LogicalReasoning';
import VerbalAbility from '../CognizantMenu/VerbalAbility';
import Psychometric from '../CognizantMenu/Psychometric';

const aptitudeTopics = [
  { id: 1, title: 'Quantitative Aptitude', questions: 150, color: '#e0f2fe', iconColor: '#0ea5e9' },
  { id: 2, title: 'Logical Reasoning', questions: 120, color: '#fef3c7', iconColor: '#f59e0b' },
  { id: 3, title: 'Verbal Ability', questions: 100, color: '#f3e8ff', iconColor: '#a855f7' },
  { id: 4, title: 'Psychometric', questions: 450, color: '#fee2e2', iconColor: '#ef4444' },
];

const OnlineAssessment = ({ company }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (selectedTopic === 'Quantitative Aptitude') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px'}}>
           ← Back to Assessment
         </button>
         <QuantitativeAptitude />
      </div>
    );
  }

  if (selectedTopic === 'Logical Reasoning') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px'}}>
           ← Back to Assessment
         </button>
         <LogicalReasoning />
      </div>
    );
  }

  if (selectedTopic === 'Verbal Ability') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px'}}>
           ← Back to Assessment
         </button>
         <VerbalAbility />
      </div>
    );
  }

  if (selectedTopic === 'Psychometric') {
    return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => setSelectedTopic(null)} className="csr-back-btn" style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px'}}>
           ← Back to Assessment
         </button>
         <Psychometric />
      </div>
    );
  }

  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">Online Assessment</h2>
        <p className="csr-paragraph">
          The Online Assessment for {company?.name || 'KPMG'} typically includes Aptitude, Logical/Verbal reasoning, and a Psychometric test to assess candidates.
        </p>

        <div className="csr-topics-grid">
          {aptitudeTopics.map((topic) => (
            <div
              key={topic.id}
              className="csr-topic-card"
              style={{ backgroundColor: topic.color, cursor: 'pointer' }}
              onClick={() => setSelectedTopic(topic.title)}
            >
              <div className="csr-topic-icon-wrapper" style={{ color: topic.iconColor }}>
                <span className="csr-topic-icon">📚</span>
              </div>
              <div className="csr-topic-info">
                <h3 className="csr-topic-title">{topic.title}</h3>
                <p className="csr-topic-questions">{topic.questions}+ Questions</p>
              </div>
              <div className="csr-topic-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineAssessment;
