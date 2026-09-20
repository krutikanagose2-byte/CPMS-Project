import React from 'react';
import Technical from '../CognizantMenu/Technical';
import Interview from '../CognizantMenu/Interview';

const TechnicalInterview1 = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Amazon'} - Technical Interview 1</h2>
        <p className="csr-paragraph">Coding/DSA + Technical + Behavioral</p>
        <div style={{marginTop: '20px'}}><h3>Technical</h3><Technical /></div>
        <div style={{marginTop: '20px'}}><h3>Interview</h3><Interview /></div>

      </div>
    </div>
  );
};

export default TechnicalInterview1;
