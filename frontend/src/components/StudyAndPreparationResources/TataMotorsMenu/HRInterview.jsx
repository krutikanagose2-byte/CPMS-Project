import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Tata Motors'} - HR Interview</h2>
        <p className="csr-paragraph">Behavioural + Fit</p>
        <Interview />

      </div>
    </div>
  );
};

export default HRInterview;
