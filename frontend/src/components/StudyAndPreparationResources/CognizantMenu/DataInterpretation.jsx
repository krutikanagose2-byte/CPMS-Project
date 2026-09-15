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

  const topics = [
    { id: 1, title: 'Tables', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: tableDIQuestions },
    { id: 2, title: 'Bar Graphs', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: barGraphQuestions },
    { id: 3, title: 'Line Graphs', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: lineGraphQuestions },
    { id: 4, title: 'Pie Charts', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: pieChartQuestions },
    { id: 5, title: 'Caselets', questions: 20, color: '#dcfce7', iconColor: '#22c55e', data: caseletDIQuestions },
    { id: 6, title: 'Mixed Graphs', questions: 20, color: '#ffedd5', iconColor: '#f97316', data: mixedGraphQuestions },
    { id: 7, title: 'Data Sufficiency', questions: 20, color: '#fce7f3', iconColor: '#ec4899', data: dataSufficiencyQuestions },
    { id: 8, title: 'Missing Data', questions: 20, color: '#ccfbf1', iconColor: '#14b8a6', data: missingDataDIQuestions },
    { id: 9, title: 'Percentage-based DI', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: percentageBasedDIQuestions },
    { id: 10, title: 'Ratio-based DI', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: ratioBasedDIQuestions },
    { id: 11, title: 'Average-based DI', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: averageBasedDIQuestions },
    { id: 12, title: 'Profit & Loss DI', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: profitAndLossDIQuestions },
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
