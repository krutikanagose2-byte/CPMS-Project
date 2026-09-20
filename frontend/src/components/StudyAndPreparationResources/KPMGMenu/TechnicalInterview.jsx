import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">Technical Interview</h2>
        <p className="csr-paragraph">
          The Technical Interview round at {company?.name || 'KPMG'} assesses your Technical skills, core CS concepts, and involves a deep dive into your Projects.
        </p>
        <Technical />
      </div>
    </div>
  );
};

export default TechnicalInterview;
