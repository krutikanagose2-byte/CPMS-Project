import React from 'react';
import Interview from '../CognizantMenu/Interview';

const CaseStudy = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Mu Sigma'} - Case Study / Problem Solving</h2>
        <p className="csr-paragraph">Business/Analytical Problem</p>
        <Interview />

      </div>
    </div>
  );
};

export default CaseStudy;
