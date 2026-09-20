import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRManagerial = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Airtel'} - HR/Managerial</h2>
        <p className="csr-paragraph">Behavioral + Communication + Role fit</p>
        <Interview />

      </div>
    </div>
  );
};

export default HRManagerial;
