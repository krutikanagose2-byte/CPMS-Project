import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Fractal Analytics'} - Technical Interview</h2>
        <p className="csr-paragraph">Statistics + SQL + Python + ML</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalInterview;
