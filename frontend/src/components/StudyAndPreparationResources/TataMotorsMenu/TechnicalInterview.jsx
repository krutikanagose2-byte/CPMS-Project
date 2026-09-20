import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Tata Motors'} - Technical Interview</h2>
        <p className="csr-paragraph">Core/domain + Projects</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalInterview;
