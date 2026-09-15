import React, { useState } from 'react';
import QuizComponent from './QuizComponent';
import { readingComprehensionQuestions } from '../../../data/readingComprehensionQuestions';
import { speakingAndListeningQuestions } from '../../../data/speakingAndListeningQuestions';
import { grammarAndComprehensionQuestions } from '../../../data/grammarAndComprehensionQuestions';

const communicationTopics = [
  { id: 1, title: 'Reading', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: readingComprehensionQuestions },
  { id: 2, title: 'Grammar and Comprehension', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: grammarAndComprehensionQuestions },
  { id: 3, title: 'Speaking and Listening', questions: 40, color: '#f3e8ff', iconColor: '#a855f7', data: speakingAndListeningQuestions },
];

const CommunicationAssessment = ({ company }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    if (topic.data) {
      // slice the first 20 questions for the reading test since we only need 20
      const dataToPass = topic.id === 1 ? topic.data.slice(0, 20) : topic.data;
      setSelectedTopic({ ...topic, data: dataToPass });
    } else {
      alert(`Content for ${topic.title} will be added soon!`);
    }
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    return (
      <QuizComponent 
        topicTitle={selectedTopic.title} 
        questions={selectedTopic.data} 
        onBack={handleBackToTopics} 
      />
    );
  }

  return (
    <div className="csr-content-body">
      <div className="csr-aptitude-header">
        <h1 className="csr-page-title">All Topics</h1>
        <div className="csr-aptitude-actions">
          <button className="csr-action-btn">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            Filter
          </button>
          <button className="csr-action-btn">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
            Sort
          </button>
        </div>
      </div>
      
      <div className="csr-topics-grid">
        {communicationTopics.map((topic) => (
          <div 
            key={topic.id} 
            className="csr-topic-card" 
            onClick={() => handleTopicClick(topic)}
            style={{ cursor: 'pointer' }}
          >
            <div className="csr-topic-icon" style={{ backgroundColor: topic.color, color: topic.iconColor }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <div className="csr-topic-info">
              <h3 className="csr-topic-title">{topic.title}</h3>
              <span className="csr-topic-questions">{topic.questions} Questions</span>
            </div>
            <div className="csr-topic-arrow">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunicationAssessment;
