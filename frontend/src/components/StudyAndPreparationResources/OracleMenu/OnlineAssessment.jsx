import React from 'react';
import Technical from '../CognizantMenu/Technical';

const OnlineAssessment = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Oracle'} - Online Assessment</h2>
        <p className="csr-paragraph">Coding/Technical (role-dependent)</p>
        <Technical />

      </div>
    </div>
  );
};

export default OnlineAssessment;
