import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalInterview2 = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Morgan Stanley'} - Technical Interview 2</h2>
        <p className="csr-paragraph">Advanced Technical + Projects</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalInterview2;
