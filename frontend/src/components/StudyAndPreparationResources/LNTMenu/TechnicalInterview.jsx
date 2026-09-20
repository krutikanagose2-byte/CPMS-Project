import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'L&T'} - Personal/Technical Interview</h2>
        <p className="csr-paragraph">Core technical + Problem Solving</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalInterview;
