import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRFinal = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Fractal Analytics'} - HR/Final</h2>
        <p className="csr-paragraph">Behavioral + Communication</p>
        <Interview />

      </div>
    </div>
  );
};

export default HRFinal;
