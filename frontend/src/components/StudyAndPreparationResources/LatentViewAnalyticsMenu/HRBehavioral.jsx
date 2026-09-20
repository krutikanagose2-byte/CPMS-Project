import React from 'react';
import Interview from '../CognizantMenu/Interview';

const HRBehavioral = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'LatentView Analytics'} - HR/Behavioral</h2>
        <p className="csr-paragraph">Communication + Career/Role fit</p>
        <Interview />

      </div>
    </div>
  );
};

export default HRBehavioral;
