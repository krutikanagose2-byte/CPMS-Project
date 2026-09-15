import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import { numberSeriesQuestions } from '../../../data/numberSeriesQuestions';
import { alphabetSeriesQuestions } from '../../../data/alphabetSeriesQuestions';
import { codingDecodingQuestions } from '../../../data/codingDecodingQuestions';
import { bloodRelationsQuestions } from '../../../data/bloodRelationsQuestions';
import { directionSenseQuestions } from '../../../data/directionSenseQuestions';
import { essentialPartQuestions } from '../../../data/essentialPartQuestions';
import { analogiesQuestions } from '../../../data/analogiesQuestions';
import { artificialLanguageQuestions } from '../../../data/artificialLanguageQuestions';
import { matchingDefinitionsQuestions } from '../../../data/matchingDefinitionsQuestions';
import { makingJudgmentsQuestions } from '../../../data/makingJudgmentsQuestions';
import { verbalReasoningQuestions } from '../../../data/verbalReasoningQuestions';
import { logicalProblemsQuestions } from '../../../data/logicalProblemsQuestions';
import { logicalGamesQuestions } from '../../../data/logicalGamesQuestions';
import { analyzingArgumentsQuestions } from '../../../data/analyzingArgumentsQuestions';
import { statementAssumptionQuestions } from '../../../data/statementAssumptionQuestions';
import { courseOfActionQuestions } from '../../../data/courseOfActionQuestions';
import { statementConclusionQuestions } from '../../../data/statementConclusionQuestions';
import { themeDetectionQuestions } from '../../../data/themeDetectionQuestions';
import { causeAndEffectQuestions } from '../../../data/causeAndEffectQuestions';
import { statementArgumentQuestions } from '../../../data/statementArgumentQuestions';
import { logicalDeductionQuestions } from '../../../data/logicalDeductionQuestions';
import { syllogismQuestions } from '../../../data/syllogismQuestions';
import { vennDiagramsQuestions } from '../../../data/vennDiagramsQuestions';
import { seatingArrangementQuestions } from '../../../data/seatingArrangementQuestions';

const LogicalReasoning = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const logicalReasoningTopics = [
    { id: 1, title: 'Number Series', questions: 30, color: 'blue', data: numberSeriesQuestions },
    { id: 2, title: 'Letter and Symbol Series', questions: 30, color: 'green', data: alphabetSeriesQuestions },
    { id: 3, title: 'Verbal Classification', questions: 90, color: 'purple' },
    { id: 4, title: 'Essential Part', questions: 30, color: 'yellow', data: essentialPartQuestions },
    { id: 5, title: 'Analogies', questions: 30, color: 'red', data: analogiesQuestions },
    { id: 6, title: 'Artificial Language', questions: 30, color: 'orange', data: artificialLanguageQuestions },
    { id: 7, title: 'Matching Definitions', questions: 30, color: 'blue', data: matchingDefinitionsQuestions },
    { id: 8, title: 'Making Judgments', questions: 30, color: 'green', data: makingJudgmentsQuestions },
    { id: 9, title: 'Verbal Reasoning', questions: 30, color: 'purple', data: verbalReasoningQuestions },
    { id: 10, title: 'Logical Problems', questions: 30, color: 'yellow', data: logicalProblemsQuestions },
    { id: 11, title: 'Logical Games', questions: 30, color: 'red', data: logicalGamesQuestions },
    { id: 12, title: 'Analyzing Arguments', questions: 30, color: 'orange', data: analyzingArgumentsQuestions },
    { id: 13, title: 'Statement and Assumption', questions: 30, color: 'blue', data: statementAssumptionQuestions },
    { id: 14, title: 'Course of Action', questions: 30, color: 'purple', data: courseOfActionQuestions },
    { id: 15, title: 'Statement and Conclusion', questions: 30, color: 'orange', data: statementConclusionQuestions },
    { id: 16, title: 'Theme Detection', questions: 30, color: 'yellow', data: themeDetectionQuestions },
    { id: 17, title: 'Cause and Effect', questions: 30, color: 'green', data: causeAndEffectQuestions },
    { id: 18, title: 'Statement and Argument', questions: 30, color: 'blue', data: statementArgumentQuestions },
    { id: 19, title: 'Logical Deduction', questions: 30, color: 'red', data: logicalDeductionQuestions },
    { id: 20, title: 'Syllogism', questions: 30, color: 'orange', data: syllogismQuestions },
    { id: 21, title: 'Venn Diagrams', questions: 30, color: 'yellow', data: vennDiagramsQuestions },
    { id: 22, title: 'Blood Relations', questions: 30, color: 'red', data: bloodRelationsQuestions },
    { id: 23, title: 'Directions Sense', questions: 30, color: 'blue', data: directionSenseQuestions },
    { id: 24, title: 'Seating Arrangement', questions: 30, color: 'green', data: seatingArrangementQuestions },
    { id: 25, title: 'Coding-Decoding', questions: 30, color: 'purple', data: codingDecodingQuestions },
  ];

  const handleTopicClick = (topic) => {
    if (topic.data) {
      setSelectedTopic(topic);
    } else {
      // You can add a placeholder or toast message here for topics without data yet
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

  const pyqHeaderContent = (
    <div className="pyq-section">
      <h2 className="csr-topics-title" style={{ marginBottom: '20px' }}>Previous Year Questions</h2>
      <div className="pyq-grid">
        <a href="/pyq/pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 1" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Reasoning PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Reasoning PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Reasoning PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid
      topics={logicalReasoningTopics}
      bannerTitle="Ready to Test Your Skills?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Logical Reasoning Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default LogicalReasoning;