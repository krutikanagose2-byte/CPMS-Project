import React from 'react';
import Technical from '../CognizantMenu/Technical';
import LogicalReasoning from '../CognizantMenu/LogicalReasoning';

const OnlineAssessment = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Amazon'} - Online Assessment (OA)</h2>
        <p className="csr-paragraph">Coding/Technical + Work-style/Behavioral</p>
        <div style={{marginTop: '20px'}}><h3>Technical</h3><Technical /></div>
        <div style={{marginTop: '20px'}}><h3>Logical Reasoning</h3><LogicalReasoning /></div>

      </div>
    </div>
  );
};

export default OnlineAssessment;
