import React from 'react';
import Interview from '../CognizantMenu/Interview';

const CaseStudy = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Mu Sigma'} - Case Study / Problem Solving</h2>
        <p className="csr-paragraph">Business/Analytical Problem</p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />

      </div>
    </div>
  );
};

export default CaseStudy;
