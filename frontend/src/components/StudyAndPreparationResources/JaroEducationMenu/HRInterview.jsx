import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRInterview = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Jaro Education'} - HR Interview</h2>
        <p className="csr-paragraph">Behaviour + Communication + Fit</p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />

      </div>
    </div>
  );
};

export default HRInterview;
