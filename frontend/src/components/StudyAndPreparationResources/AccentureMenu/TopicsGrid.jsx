import React from 'react';
import './TopicsGrid.css';
import RecommendedVideos from '../../common/RecommendedVideos';

const resolveTopic = (topicName, bannerTitle, bannerSubtitle, bannerButtonText) => {
  if (topicName) return topicName;
  const str = `${bannerTitle || ''} ${bannerSubtitle || ''} ${bannerButtonText || ''}`.toLowerCase();
  if (str.includes('numerical') || str.includes('quantitative') || str.includes('quant')) return 'Quantitative Aptitude';
  if (str.includes('logical') || str.includes('reasoning')) return 'Logical Reasoning';
  if (str.includes('verbal') || str.includes('english')) return 'Verbal Ability';
  if (str.includes('technical') || str.includes('coding')) return 'Coding';
  if (str.includes('data interpretation')) return 'Data Interpretation';
  if (str.includes('visual reasoning')) return 'Visual Reasoning';
  if (str.includes('psychometric')) return 'Psychometric';
  if (str.includes('cryptarithmetic')) return 'Cryptarithmetic';
  if (str.includes('essay')) return 'Essay Writing';
  return 'Quantitative Aptitude';
};

const TopicsGrid = ({ topics, bannerTitle, bannerSubtitle, bannerButtonText, onTopicClick, headerContent, topicName, hideVideos }) => {
  const currentTopic = resolveTopic(topicName, bannerTitle, bannerSubtitle, bannerButtonText);

  return (
    <div className="csr-content-body">
      <div className="csr-topics-container">
        
        {!hideVideos && <RecommendedVideos topic={currentTopic} />}

        {headerContent && headerContent}

        <div className="csr-topics-header">
          <h2 className="csr-topics-title">All Topics</h2>
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

      </div>
    </div>
  );
};

export default TopicsGrid;
