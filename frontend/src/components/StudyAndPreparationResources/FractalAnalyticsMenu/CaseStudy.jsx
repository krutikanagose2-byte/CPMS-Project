import React from 'react';
import Interview from '../CognizantMenu/Interview';

const CaseStudy = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Fractal Analytics'} - Case Study/Business Round</h2>
        <p className="csr-paragraph">Data/business problem solving</p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />

      </div>
    </div>
  );
};

export default CaseStudy;
