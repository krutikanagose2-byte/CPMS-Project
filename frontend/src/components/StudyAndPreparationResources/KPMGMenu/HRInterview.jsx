import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRInterview = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">HR/Recruiter Interview</h2>
        <p className="csr-paragraph">
          The HR/Recruiter Interview round at {company?.name || 'KPMG'} is mainly about Behavioral questions and Cultural Fitment.
        </p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />
      </div>
    </div>
  );
};

export default HRInterview;
