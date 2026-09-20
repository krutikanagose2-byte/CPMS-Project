import React from 'react';
import Technical from '../CognizantMenu/Technical';

const Interview1 = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Jio'} - Interview 1</h2>
        <p className="csr-paragraph">Technical/Functional + Problem Solving</p>
        <Technical />

      </div>
    </div>
  );
};

export default Interview1;
