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
  {
    "id": 1,
    "title": "Table DI",
    "questions": 20,
    "color": "blue",
    "data": tableDIQuestions
  },
  {
    "id": 2,
    "title": "Bar Graph",
    "questions": 20,
    "color": "green",
    "data": barGraphQuestions
  },
  {
    "id": 3,
    "title": "Line Graph",
    "questions": 20,
    "color": "purple",
    "data": lineGraphQuestions
  },
  {
    "id": 4,
    "title": "Pie Chart",
    "questions": 20,
    "color": "red",
    "data": pieChartQuestions
  },
  {
    "id": 5,
    "title": "Histogram",
    "questions": 20,
    "color": "orange",
    "data": histogramQuestions
  },
  {
    "id": 6,
    "title": "Caselet DI",
    "questions": 20,
    "color": "yellow",
    "data": caseletDIQuestions
  },
  {
    "id": 7,
    "title": "Mixed Graph DI",
    "questions": 20,
    "color": "blue",
    "data": mixedGraphQuestions
  },
  {
    "id": 8,
    "title": "Tabular Data",
    "questions": 20,
    "color": "green",
    "data": tabularDataQuestions
  },
  {
    "id": 9,
    "title": "Percentage-Based DI",
    "questions": 20,
    "color": "purple",
    "data": percentageBasedDIQuestions
  },
  {
    "id": 10,
    "title": "Ratio-Based DI",
    "questions": 20,
    "color": "red",
    "data": ratioBasedDIQuestions
  },
  {
    "id": 11,
    "title": "Average-Based DI",
    "questions": 20,
    "color": "orange",
    "data": averageBasedDIQuestions
  },
  {
    "id": 12,
    "title": "Profit & Loss DI",
    "questions": 20,
    "color": "yellow",
    "data": profitAndLossDIQuestions
  },
  {
    "id": 13,
    "title": "Time & Work DI",
    "questions": 20,
    "color": "blue",
    "data": timeAndWorkDIQuestions
  },
  {
    "id": 14,
    "title": "Time, Speed & Distance DI",
    "questions": 20,
    "color": "green",
    "data": tsdDIQuestions
  },
  {
    "id": 15,
    "title": "Population DI",
    "questions": 20,
    "color": "purple",
    "data": populationDIQuestions
  },
  {
    "id": 16,
    "title": "Sales & Revenue DI",
    "questions": 20,
    "color": "red",
    "data": salesAndRevenueDIQuestions
  },
  {
    "id": 17,
    "title": "Production DI",
    "questions": 20,
    "color": "orange",
    "data": productionDIQuestions
  },
  {
    "id": 18,
    "title": "Growth & Decline DI",
    "questions": 20,
    "color": "yellow",
    "data": growthAndDeclineDIQuestions
  },
  {
    "id": 19,
    "title": "Missing Data DI",
    "questions": 20,
    "color": "blue",
    "data": missingDataDIQuestions
  },
  {
    "id": 20,
    "title": "Data Sufficiency",
    "questions": 20,
    "color": "green",
    "data": dataSufficiencyQuestions
  },
  {
    "id": 21,
    "title": "Comparison-Based DI",
    "questions": 20,
    "color": "purple",
    "data": comparisonBasedDIQuestions
  },
  {
    "id": 22,
    "title": "Combination of Tables & Graphs",
    "questions": 20,
    "color": "red",
    "data": combinationOfTablesAndGraphsQuestions
  },
  {
    "id": 23,
    "title": "Quantitative Data Analysis",
    "questions": 20,
    "color": "orange",
    "data": quantitativeDataAnalysisQuestions
  },
  {
    "id": 24,
    "title": "Approximation-Based DI",
    "questions": 20,
    "color": "yellow",
    "data": approximationBasedDIQuestions
  },
  {
    "id": 25,
    "title": "Data-Based Percentage Change",
    "questions": 20,
    "color": "blue",
    "data": dataBasedPercentageChangeQuestions
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
