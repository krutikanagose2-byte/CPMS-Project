import React from 'react';

const BackgroundCheck = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Tata Motors'} - Medical/Background Check</h2>
        <p className="csr-paragraph">where applicable</p>

      </div>
    </div>
  );
};

export default BackgroundCheck;
