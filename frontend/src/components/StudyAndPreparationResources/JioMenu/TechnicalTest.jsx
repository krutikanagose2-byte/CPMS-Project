import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalTest = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Jio'} - Technical/Functional Test</h2>
        <p className="csr-paragraph">Role-specific technical knowledge</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalTest;
