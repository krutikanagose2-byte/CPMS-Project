import React from 'react';

const FinalSelection = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'PwC'} - Final Selection</h2>
        <p className="csr-paragraph">Final evaluation</p>

      </div>
    </div>
  );
};

export default FinalSelection;
