import React from 'react';

const HRFinalSelection = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'IBM'} - HR/Final Selection</h2>
        <p className="csr-paragraph">Final result</p>

      </div>
    </div>
  );
};

export default HRFinalSelection;
