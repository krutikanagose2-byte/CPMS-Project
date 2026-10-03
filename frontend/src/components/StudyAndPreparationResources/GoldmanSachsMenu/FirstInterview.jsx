import React from 'react';
import Technical from '../CognizantMenu/Technical';
import Interview from '../CognizantMenu/Interview';

const FirstInterview = ({ company, onOpenAIInterview }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Goldman Sachs'} - Video/First Interview</h2>
        <p className="csr-paragraph">Technical + Behavioral</p>
        <div style={{marginTop: '20px'}}><h3>Technical</h3><Technical /></div>
        <div style={{marginTop: '20px'}}><h3>Interview</h3><Interview company={company} onOpenAIInterview={onOpenAIInterview} /></div>

      </div>
    </div>
  );
};

export default FirstInterview;
