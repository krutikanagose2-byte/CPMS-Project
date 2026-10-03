import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRBehavioral = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Morgan Stanley'} - HR/Behavioral</h2>
        <p className="csr-paragraph">Communication + Fit</p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />

      </div>
    </div>
  );
};

export default HRBehavioral;
