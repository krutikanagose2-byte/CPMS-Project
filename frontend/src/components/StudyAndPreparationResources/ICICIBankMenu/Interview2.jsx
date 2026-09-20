import React from 'react';
import Interview from '../CognizantMenu/Interview';

const Interview2 = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'ICICI Bank'} - Interview 2</h2>
        <p className="csr-paragraph">ICICI Bank interview</p>
        <Interview />

      </div>
    </div>
  );
};

export default Interview2;
