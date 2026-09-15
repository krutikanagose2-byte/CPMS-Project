import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import DataInterpretationMenu from './DataInterpretationMenu';

import { numberSystemQuestions } from '../../../data/numberSystemQuestions';
import { hcfLcmQuestions } from '../../../data/hcfLcmQuestions';
import { percentagesQuestions } from '../../../data/percentagesQuestions';
import { profitLossQuestions } from '../../../data/profitLossQuestions';
import { ratioProportionQuestions } from '../../../data/ratioProportionQuestions';
import { averageQuestions } from '../../../data/averageQuestions';
import { interestQuestions } from '../../../data/interestQuestions';

import { timeAndWorkQuestions } from '../../../data/timeAndWorkQuestions';
import { pipesCisternsQuestions } from '../../../data/pipesCisternsQuestions';
import { timeSpeedDistanceQuestions } from '../../../data/timeSpeedDistanceQuestions';
import { trainsQuestions } from '../../../data/trainsQuestions';
import { boatsStreamsQuestions } from '../../../data/boatsStreamsQuestions';
import { mixtureAlligationQuestions } from '../../../data/mixtureAlligationQuestions';
import { permutationCombinationQuestions } from '../../../data/permutationCombinationQuestions';
import { probabilityQuestions } from '../../../data/probabilityQuestions';
import { mensurationQuestions } from '../../../data/mensurationQuestions';
import { dataInterpretationQuestions } from '../../../data/dataInterpretationQuestions';

const QuantitativeAptitude = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const aptitudeTopics = [
    { id: 1, title: 'Number System', questions: 20, color: 'blue', data: numberSystemQuestions },
    { id: 2, title: 'HCF & LCM', questions: 20, color: 'blue', data: hcfLcmQuestions },
    { id: 3, title: 'Percentages', questions: 20, color: 'green', data: percentagesQuestions },
    { id: 4, title: 'Profit and Loss', questions: 20, color: 'purple', data: profitLossQuestions },
    { id: 5, title: 'Ratio and Proportion', questions: 20, color: 'red', data: ratioProportionQuestions },
    { id: 6, title: 'Averages', questions: 20, color: 'orange', data: averageQuestions },
    { id: 7, title: 'Simple & Compound Interest', questions: 20, color: 'yellow', data: interestQuestions },
    { id: 8, title: 'Time and Work', questions: 20, color: 'blue', data: timeAndWorkQuestions },
    { id: 9, title: 'Pipes and Cisterns', questions: 20, color: 'green', data: pipesCisternsQuestions },
    { id: 10, title: 'Time, Speed and Distance', questions: 20, color: 'purple', data: timeSpeedDistanceQuestions },
    { id: 11, title: 'Problems on Trains', questions: 20, color: 'yellow', data: trainsQuestions },
    { id: 12, title: 'Boats and Streams', questions: 20, color: 'red', data: boatsStreamsQuestions },
    { id: 13, title: 'Mixture and Alligation', questions: 20, color: 'blue', data: mixtureAlligationQuestions },
    { id: 14, title: 'Permutation & Combination', questions: 20, color: 'green', data: permutationCombinationQuestions },
    { id: 15, title: 'Probability', questions: 20, color: 'purple', data: probabilityQuestions },
    { id: 16, title: 'Mensuration', questions: 20, color: 'orange', data: mensurationQuestions },
    { id: 17, title: 'Data Interpretation', questions: 320, color: 'yellow', data: 'SUBMENU' },
  ];

  const handleTopicClick = (topic) => {
    if (topic.data === 'SUBMENU' || topic.data) {
      setSelectedTopic(topic);
    } else {
      alert(`Content for ${topic.title} will be added soon!`);
    }
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    if (selectedTopic.data === 'SUBMENU') {
      return <DataInterpretationMenu onBack={handleBackToTopics} />;
    }
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
            <h4 className="pyq-name">Quant PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Quant PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Quant PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={aptitudeTopics}
      bannerTitle="Ready to Test Your Aptitude?"
      bannerSubtitle="Take a full length test and analyze your numerical ability."
      bannerButtonText="Take an Online Aptitude Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default QuantitativeAptitude;
