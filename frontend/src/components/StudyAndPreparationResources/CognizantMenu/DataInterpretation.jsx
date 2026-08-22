import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';

const DataInterpretation = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
  {
    "id": 1,
    "title": "Table DI",
    "questions": 4,
    "color": "blue"
  },
  {
    "id": 2,
    "title": "Bar Graph",
    "questions": 4,
    "color": "green"
  },
  {
    "id": 3,
    "title": "Line Graph",
    "questions": 4,
    "color": "purple"
  },
  {
    "id": 4,
    "title": "Pie Chart",
    "questions": 4,
    "color": "red"
  },
  {
    "id": 5,
    "title": "Histogram",
    "questions": 4,
    "color": "orange"
  },
  {
    "id": 6,
    "title": "Caselet DI",
    "questions": 4,
    "color": "yellow"
  },
  {
    "id": 7,
    "title": "Mixed Graph DI",
    "questions": 4,
    "color": "blue"
  },
  {
    "id": 8,
    "title": "Tabular Data",
    "questions": 4,
    "color": "green"
  },
  {
    "id": 9,
    "title": "Percentage-Based DI",
    "questions": 4,
    "color": "purple"
  },
  {
    "id": 10,
    "title": "Ratio-Based DI",
    "questions": 4,
    "color": "red"
  },
  {
    "id": 11,
    "title": "Average-Based DI",
    "questions": 4,
    "color": "orange"
  },
  {
    "id": 12,
    "title": "Profit & Loss DI",
    "questions": 4,
    "color": "yellow"
  },
  {
    "id": 13,
    "title": "Time & Work DI",
    "questions": 4,
    "color": "blue"
  },
  {
    "id": 14,
    "title": "Time, Speed & Distance DI",
    "questions": 4,
    "color": "green"
  },
  {
    "id": 15,
    "title": "Population DI",
    "questions": 4,
    "color": "purple"
  },
  {
    "id": 16,
    "title": "Sales & Revenue DI",
    "questions": 3,
    "color": "red"
  },
  {
    "id": 17,
    "title": "Production DI",
    "questions": 3,
    "color": "orange"
  },
  {
    "id": 18,
    "title": "Growth & Decline DI",
    "questions": 3,
    "color": "yellow"
  },
  {
    "id": 19,
    "title": "Missing Data DI",
    "questions": 3,
    "color": "blue"
  },
  {
    "id": 20,
    "title": "Data Sufficiency",
    "questions": 3,
    "color": "green"
  },
  {
    "id": 21,
    "title": "Comparison-Based DI",
    "questions": 3,
    "color": "purple"
  },
  {
    "id": 22,
    "title": "Combination of Tables & Graphs",
    "questions": 3,
    "color": "red"
  },
  {
    "id": 23,
    "title": "Quantitative Data Analysis",
    "questions": 3,
    "color": "orange"
  },
  {
    "id": 24,
    "title": "Approximation-Based DI",
    "questions": 3,
    "color": "yellow"
  },
  {
    "id": 25,
    "title": "Data-Based Percentage Change",
    "questions": 3,
    "color": "blue"
  }
];

  const handleTopicClick = (t) => {
    if (t.data) {
      setSelectedTopic(t);
    } else {
      alert('Content for ' + t.title + ' will be added soon!');
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

  const pyqHeaderContent = (
    <div className="pyq-section">
      <h2 className="csr-topics-title" style={{marginBottom: '20px'}}>Previous Year Questions</h2>
      <div className="pyq-grid">
        <a href="/pyq/pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 1" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Data Interpretation PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Data Interpretation PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Data Interpretation PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Data Interpretation?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Data Interpretation Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default DataInterpretation;
