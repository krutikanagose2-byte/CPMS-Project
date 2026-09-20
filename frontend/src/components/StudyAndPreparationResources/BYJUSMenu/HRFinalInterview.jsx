import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRFinalInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || "BYJU'S"} - HR/Final Interview</h2>
        <p className="csr-paragraph">HR + Communication</p>
        <Interview />

      </div>
    </div>
  );
};

export default HRFinalInterview;
