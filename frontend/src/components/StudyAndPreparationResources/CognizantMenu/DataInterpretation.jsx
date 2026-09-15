import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import { 
  tableDIQuestions, barGraphQuestions, lineGraphQuestions, pieChartQuestions, 
  histogramQuestions, caseletDIQuestions, mixedGraphQuestions, tabularDataQuestions 
} from './DataInterpretationQuestions';
import {
  percentageBasedDIQuestions, ratioBasedDIQuestions, averageBasedDIQuestions,
  profitAndLossDIQuestions, timeAndWorkDIQuestions, tsdDIQuestions,
  populationDIQuestions, salesAndRevenueDIQuestions, productionDIQuestions
} from './DataInterpretationQuestions2';
import {
  growthAndDeclineDIQuestions, missingDataDIQuestions, dataSufficiencyQuestions,
  comparisonBasedDIQuestions, combinationOfTablesAndGraphsQuestions, quantitativeDataAnalysisQuestions,
  approximationBasedDIQuestions, dataBasedPercentageChangeQuestions
} from './DataInterpretationQuestions3';

const DataInterpretation = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = []; // Placeholder for actual topics

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
