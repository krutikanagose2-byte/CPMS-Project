import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRFinal = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Fractal Analytics'} - HR/Final</h2>
        <p className="csr-paragraph">Behavioral + Communication</p>
        <Interview company={company} onOpenAIInterview={onOpenAIInterview} />

      </div>
    </div>
  );
};

export default HRFinal;
