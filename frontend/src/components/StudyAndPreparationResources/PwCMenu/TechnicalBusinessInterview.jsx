import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalBusinessInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'PwC'} - Technical/Business Interview</h2>
        <p className="csr-paragraph">Technical + Aptitude + Business acumen</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalBusinessInterview;
