import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './QuizComponent.css';

const QuizComponent = ({ topicTitle, questions, onBack, hideOptions = false }) => {
  const [answers, setAnswers] = useState({});

  const handleOptionClick = (questionId, optionIndex) => {
    if (answers[questionId] !== undefined) return; // Already answered
    setAnswers({
      ...answers,
      [questionId]: optionIndex
    });
  };

  const getLabel = (index) => String.fromCharCode(65 + index); // 0 -> A, 1 -> B

  const groupedQuestions = {
    Easy: questions.filter(q => q.difficulty === 'Easy'),
    Medium: questions.filter(q => q.difficulty === 'Medium'),
    Hard: questions.filter(q => q.difficulty === 'Hard'),
    Uncategorized: questions.filter(q => !['Easy', 'Medium', 'Hard'].includes(q.difficulty))
  };

  const renderQuestions = (qs) => {
    return qs.map((q) => {
      const selectedOption = answers[q.id];
      const isAnswered = selectedOption !== undefined;
      
      return (
        <div key={q.id} className="csr-question-card">
          <div className="csr-question-text">
            {q.id}. {q.text}
          </div>
          
          {q.image && (
            <div className="csr-question-image" style={{ marginTop: '16px', textAlign: 'center' }}>
              <img src={q.image} alt="Question Visual" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </div>
          )}
          
          {!hideOptions && q.options && (
            <div className="csr-options-list">
              {q.options.map((option, idx) => {
                let optionClass = 'csr-option';
                let icon = null;
                
                if (isAnswered) {
                  optionClass += ' disabled';
                  if (idx === q.answer) {
                    optionClass += ' correct';
                    icon = <span className="csr-option-icon correct-icon">✅</span>;
                  } else if (idx === selectedOption) {
                    optionClass += ' incorrect';
                    icon = <span className="csr-option-icon incorrect-icon">❌</span>;
                  }
                }

                return (
                  <div 
                    key={idx} 
                    className={optionClass}
                    onClick={() => handleOptionClick(q.id, idx)}
                  >
                    <div className="csr-option-label">{getLabel(idx)}</div>
                    <div className="csr-option-text">{option}</div>
                    {icon}
                  </div>
                );
              })}
            </div>
          )}

          {isAnswered && (
            <div className="csr-explanation-box">
              <div className="csr-explanation-answer">
                Answer: Option <span>{getLabel(q.answer)}</span>
              </div>
              <div className="csr-explanation-title">Explanation:</div>
              <div className="csr-explanation-text">
                {q.explanation}
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  const portalTarget = document.getElementById('csr-portal-back-btn');

  return (
    <div className="csr-quiz-view">
      {portalTarget && createPortal(
        <div style={{ paddingBottom: '12px' }}>
          <button className="csr-quiz-back-btn" onClick={onBack} style={{ backgroundColor: 'white' }}>
            ← Back to Topics
          </button>
        </div>,
        portalTarget
      )}
      <div className="csr-quiz-header">
        {!portalTarget && (
          <button className="csr-quiz-back-btn" onClick={onBack}>
            ← Back to Topics
          </button>
        )}
        <h2 className="csr-quiz-title">{topicTitle} — {questions.length} Questions</h2>
      </div>

      {groupedQuestions.Easy.length > 0 && (
        <div className="csr-difficulty-section">
          <div className="csr-difficulty-title">
            <span className="csr-difficulty-dot easy"></span>
            Easy
          </div>
          {renderQuestions(groupedQuestions.Easy)}
        </div>
      )}

      {groupedQuestions.Medium.length > 0 && (
        <div className="csr-difficulty-section">
          <div className="csr-difficulty-title">
            <span className="csr-difficulty-dot medium"></span>
            Medium
          </div>
          {renderQuestions(groupedQuestions.Medium)}
        </div>
      )}

      {groupedQuestions.Hard.length > 0 && (
        <div className="csr-difficulty-section">
          <div className="csr-difficulty-title">
            <span className="csr-difficulty-dot hard"></span>
            Hard
          </div>
          {renderQuestions(groupedQuestions.Hard)}
        </div>
      )}

      {groupedQuestions.Uncategorized.length > 0 && (
        <div className="csr-difficulty-section">
          <div className="csr-difficulty-title">
            <span className="csr-difficulty-dot" style={{ backgroundColor: '#64748b' }}></span>
            Questions
          </div>
          {renderQuestions(groupedQuestions.Uncategorized)}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
