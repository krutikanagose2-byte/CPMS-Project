import React from 'react';
import Interview from '../CognizantMenu/Interview';

const Interview1 = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'ICICI Bank'} - Interview 1</h2>
        <p className="csr-paragraph">General/Role-related</p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />

      </div>
    </div>
  );
};

export default Interview1;
