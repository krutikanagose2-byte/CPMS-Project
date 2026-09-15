import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import { dataInterpretationQuestions } from '../../../data/dataInterpretationQuestions';

// Group questions by topic
const questionsByTopic = dataInterpretationQuestions.reduce((acc, q) => {
  if (!acc[q.topic]) {
    acc[q.topic] = [];
  }
  acc[q.topic].push(q);
  return acc;
}, {});

const subTopics = Object.keys(questionsByTopic).map((topicName, index) => {
  const colors = ['blue', 'green', 'purple', 'red', 'orange', 'yellow'];
  const color = colors[index % colors.length];
  
  // Create a clean title for display by stripping numbering and extra text if needed
  // Examples: "1. TABLE DI — 20 Questions" -> "TABLE DI"
  let cleanTitle = topicName;
  const match = cleanTitle.match(/^\d+\.\s*(.*?)\s*—/);
  if (match) {
    cleanTitle = match[1];
  } else {
      const match2 = cleanTitle.match(/^\d+\.\s*(.*)/);
      if (match2) {
          cleanTitle = match2[1];
      }
  }

  return {
    id: index + 1,
    title: cleanTitle,
    questions: questionsByTopic[topicName].length,
    color: color,
    data: questionsByTopic[topicName]
  };
});

const DataInterpretationMenu = ({ onBack }) => {
  const [selectedSubTopic, setSelectedSubTopic] = useState(null);

  const handleSubTopicClick = (topic) => {
    setSelectedSubTopic(topic);
  };

  const handleBackToMenu = () => {
    setSelectedSubTopic(null);
  };

  if (selectedSubTopic) {
    return (
      <QuizComponent 
        topicTitle={`Data Interpretation - ${selectedSubTopic.title}`} 
        questions={selectedSubTopic.data} 
        onBack={handleBackToMenu} 
      />
    );
  }

  return (
    <div className="di-menu-container">
      <button onClick={onBack} className="back-button" style={{ margin: '20px', cursor: 'pointer', padding: '10px 15px', background: '#f0f0f0', border: 'none', borderRadius: '5px' }}>
        &larr; Back to Aptitude
      </button>
      <TopicsGrid 
        topics={subTopics}
        bannerTitle="Data Interpretation Practice"
        bannerSubtitle="Select a DI topic to begin practicing."
        bannerButtonText="Master DI Topics"
        onTopicClick={handleSubTopicClick}
      />
    </div>
  );
};

export default DataInterpretationMenu;
