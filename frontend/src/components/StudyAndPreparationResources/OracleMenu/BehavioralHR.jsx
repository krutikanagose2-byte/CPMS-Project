import React from 'react';
import Interview from '../CognizantMenu/Interview';

const BehavioralHR = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Oracle'} - Behavioral/HR</h2>
        <p className="csr-paragraph">Communication + Behavioral</p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />

      </div>
    </div>
  );
};

export default BehavioralHR;
