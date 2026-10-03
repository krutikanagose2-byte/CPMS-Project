import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRBehaviouralInterview = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'PwC'} - HR/Behavioural Interview</h2>
        <p className="csr-paragraph">CV + Behavioural questions</p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />

      </div>
    </div>
  );
};

export default HRBehaviouralInterview;
