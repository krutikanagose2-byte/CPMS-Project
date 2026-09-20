import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Bosch'} - HR/Personal Interview</h2>
        <p className="csr-paragraph">HR + Fit</p>
        <Interview />

      </div>
    </div>
  );
};

export default HRInterview;
