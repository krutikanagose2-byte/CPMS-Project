import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalInterview1 = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Morgan Stanley'} - Technical Interview 1</h2>
        <p className="csr-paragraph">DSA + Coding + Core CS</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalInterview1;
