import React from 'react';
import Technical from '../CognizantMenu/Technical';

const TechnicalInterview1 = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Airtel'} - Technical Interview 1</h2>
        <p className="csr-paragraph">DSA + OOP + DBMS + OS + SQL</p>
        <Technical />

      </div>
    </div>
  );
};

export default TechnicalInterview1;
