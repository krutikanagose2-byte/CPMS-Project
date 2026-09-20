import React from 'react';

const FinalSelection = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Jio'} - Final Selection</h2>
        <p className="csr-paragraph">Panel feedback + Management approval</p>

      </div>
    </div>
  );
};

export default FinalSelection;
