import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalTest = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Fractal Analytics'} - Technical Test</h2>
        <p className="csr-paragraph">SQL + Python/R</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalTest;
