import React from 'react';
import './TopicsGrid.css';

const TopicsGrid = ({ topics, bannerTitle, bannerSubtitle, bannerButtonText, onTopicClick, headerContent }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-topics-container">
        
        {headerContent && headerContent}

        <div className="csr-topics-header">
          <h2 className="csr-topics-title">All Topics</h2>
          <div className="csr-topics-controls">
            <button className="csr-topics-btn">
              <span>Y Filter </span>
              <span style={{ fontSize: '12px' }}>v</span>
            </button>
            <button className="csr-topics-btn">
              <span>↑↓ Sort</span>
              <span style={{ fontSize: '12px' }}>v</span>
            </button>
          </div>
        </div>

        <div className="csr-topics-grid">
          {topics.map((topic, index) => (
            <div 
              key={topic.id} 
              className="csr-topic-card"
              onClick={() => onTopicClick && onTopicClick(topic)}
            >
              <div className={`csr-topic-icon-wrapper icon-${topic.color}`}>
                📁
              </div>
              <div className="csr-topic-info">
                <h4 className="csr-topic-name">{index + 1}. {topic.title}</h4>
                <p className="csr-topic-meta">{topic.questions} Questions</p>
              </div>
              <div className="csr-topic-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="csr-banner">
          <div className="csr-banner-content">
            <div className="csr-banner-icon">🎯</div>
            <div className="csr-banner-text">
              <h3>{bannerTitle}</h3>
              <p>{bannerSubtitle}</p>
            </div>
          </div>
          <button className="csr-banner-btn">
            {bannerButtonText} →
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopicsGrid;
