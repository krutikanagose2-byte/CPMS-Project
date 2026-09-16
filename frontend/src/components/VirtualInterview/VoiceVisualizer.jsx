import React from 'react';
import './VirtualInterview.css';

const VoiceVisualizer = ({ isActive }) => {
  return (
    <div className="vi-visualizer">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={`vi-bar ${!isActive ? 'idle' : ''}`}
          style={{ animationDelay: isActive ? `${i * 0.15}s` : '0s' }}
        />
      ))}
    </div>
  );
};

export default VoiceVisualizer;
