import React from 'react';
import Interview from '../CognizantMenu/Interview';

const CaseStudy = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Fractal Analytics'} - Case Study/Business Round</h2>
        <p className="csr-paragraph">Data/business problem solving</p>
        <Interview />

      </div>
    </div>
  );
};

export default CaseStudy;
