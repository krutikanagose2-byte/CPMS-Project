import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import {
  alphabetToNumberCodingQuestions, numberToLetterCodingQuestions, letterValueProblemsQuestions,
  simpleAdditionCryptarithmsQuestions, subtractionCryptarithmsQuestions, multiplicationCryptarithmsQuestions,
  divisionCryptarithmsQuestions, carryBasedProblemsQuestions, missingDigitProblemsQuestions, uniqueDigitAssignmentQuestions
} from './CryptarithmeticQuestions1';
import {
  alphameticPuzzlesQuestions, wordAdditionQuestions, wordSubtractionQuestions,
  wordMultiplicationQuestions, wordDivisionQuestions, base10CryptarithmsQuestions,
  constraintBasedCryptarithmsQuestions, repeatedLetterProblemsQuestions,
  leadingDigitRestrictionsQuestions, multiWordCryptarithmsQuestions
} from './CryptarithmeticQuestions2';

const Cryptarithmetic = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
  {
    "id": 1,
    "title": "Alphabet-to-Number Coding",
    "questions": 10,
    "color": "blue",
    "data": alphabetToNumberCodingQuestions
  },
  {
    "id": 2,
    "title": "Number-to-Letter Coding",
    "questions": 10,
    "color": "green",
    "data": numberToLetterCodingQuestions
  },
  {
    "id": 3,
    "title": "Letter Value Problems",
    "questions": 10,
    "color": "purple",
    "data": letterValueProblemsQuestions
  },
  {
    "id": 4,
    "title": "Simple Addition Cryptarithms",
    "questions": 10,
    "color": "red",
    "data": simpleAdditionCryptarithmsQuestions
  },
  {
    "id": 5,
    "title": "Subtraction Cryptarithms",
    "questions": 10,
    "color": "orange",
    "data": subtractionCryptarithmsQuestions
  },
  {
    "id": 6,
    "title": "Multiplication Cryptarithms",
    "questions": 10,
    "color": "yellow",
    "data": multiplicationCryptarithmsQuestions
  },
  {
    "id": 7,
    "title": "Division Cryptarithms",
    "questions": 10,
    "color": "blue",
    "data": divisionCryptarithmsQuestions
  },
  {
    "id": 8,
    "title": "Carry-Based Problems",
    "questions": 10,
    "color": "green",
    "data": carryBasedProblemsQuestions
  },
  {
    "id": 9,
    "title": "Missing Digit Problems",
    "questions": 10,
    "color": "purple",
    "data": missingDigitProblemsQuestions
  },
  {
    "id": 10,
    "title": "Unique Digit Assignment",
    "questions": 10,
    "color": "red",
    "data": uniqueDigitAssignmentQuestions
  },
  {
    "id": 11,
    "title": "Alphametic Puzzles",
    "questions": 10,
    "color": "orange",
    "data": alphameticPuzzlesQuestions
  },
  {
    "id": 12,
    "title": "Word Addition",
    "questions": 10,
    "color": "yellow",
    "data": wordAdditionQuestions
  },
  {
    "id": 13,
    "title": "Word Subtraction",
    "questions": 10,
    "color": "blue",
    "data": wordSubtractionQuestions
  },
  {
    "id": 14,
    "title": "Word Multiplication",
    "questions": 10,
    "color": "green",
    "data": wordMultiplicationQuestions
  },
  {
    "id": 15,
    "title": "Word Division",
    "questions": 10,
    "color": "purple",
    "data": wordDivisionQuestions
  },
  {
    "id": 16,
    "title": "Base-10 Cryptarithms",
    "questions": 10,
    "color": "red",
    "data": base10CryptarithmsQuestions
  },
  {
    "id": 17,
    "title": "Constraint-Based Cryptarithms",
    "questions": 10,
    "color": "orange",
    "data": constraintBasedCryptarithmsQuestions
  },
  {
    "id": 18,
    "title": "Repeated Letter Problems",
    "questions": 10,
    "color": "yellow",
    "data": repeatedLetterProblemsQuestions
  },
  {
    "id": 19,
    "title": "Leading-Digit Restrictions",
    "questions": 10,
    "color": "blue",
    "data": leadingDigitRestrictionsQuestions
  },
  {
    "id": 20,
    "title": "Multi-Word Cryptarithms",
    "questions": 10,
    "color": "green",
    "data": multiWordCryptarithmsQuestions
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
            <h4 className="pyq-name">Cryptarithmetic PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Cryptarithmetic PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Cryptarithmetic PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Cryptarithmetic?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Cryptarithmetic Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default Cryptarithmetic;
