import React from 'react';
import Interview from '../CognizantMenu/Interview';

const BehavioralHR = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Oracle'} - Behavioral/HR</h2>
        <p className="csr-paragraph">Communication + Behavioral</p>
        <Interview />

      </div>
    </div>
  );
};

export default BehavioralHR;
