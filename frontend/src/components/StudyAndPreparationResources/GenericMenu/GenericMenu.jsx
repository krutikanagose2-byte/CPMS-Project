import React from 'react';

const GenericMenu = ({ company, onBack }) => {
  if (!company) return null;

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: '#0ea5e9',
          cursor: 'pointer',
          fontSize: '16px',
          position: 'absolute',
          top: '40px',
          left: '40px'
        }}
      >
        ← Back
      </button>
      <h1 style={{ color: '#1f2937', marginTop: '40px' }}>{company.name} Study Resources</h1>
      <p style={{ color: '#4b5563', fontSize: '18px', marginTop: '20px' }}>
        We are currently building out the study and preparation resources for {company.name}. Check back soon!
      </p>
    </div>
  );
};

export default GenericMenu;