import React, { useState } from 'react';
import game1 from '../../../assets/game1.png';
import game2 from '../../../assets/game2.png';

const GameBasedAptitude = ({ company, currentYear }) => {
  const [activeGameQuiz, setActiveGameQuiz] = useState(null);
  const [expandedExplanations, setExpandedExplanations] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const toggleExplanation = (qId) => {
    setExpandedExplanations(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleOptionSelect = (qId, option) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const geoSudoQuestions = [
    {
      id: 1,
      img: game1,
      options: [
        { text: 'Option a.', percent: '3.86%' },
        { text: 'Option b.', percent: '4.61%' },
        { text: 'Option c.', percent: '89.41%' },
        { text: 'Option d.', percent: '2.13%' }
      ],
      answer: 'Option c.',
      exp: "The missing symbol must complete the geometric pattern without repeating in the row or column."
    },
    {
      id: 2,
      img: game2,
      options: [
        { text: 'Option a.', percent: '15.2%' },
        { text: 'Option b.', percent: '72.5%' },
        { text: 'Option c.', percent: '5.1%' },
        { text: 'Option d.', percent: '7.2%' }
      ],
      answer: 'Option b.',
      exp: "Observing the grid, the square is missing in the 3rd row, 2nd column."
    }
  ];

  return (
    <div className="csr-content-body">
      {company.name === 'Cognizant' ? (
        <>
          <div className="csr-breadcrumbs">
            Home &gt; {company.name} GenC Previous Year Placement Papers {currentYear} &gt; {company.name} GenC Game Based Aptitude Questions with Solutions {currentYear}
          </div>

          <h1 className="csr-page-title">
            {company.name} GenC Game Based Aptitude Questions with Solutions {currentYear}
          </h1>

          <div className="csr-content-card">
            <h2 className="csr-section-title">{company.name} GenC Game Based Cognitive Assessment</h2>
            <p className="csr-paragraph">
              <strong>Think You Can Outsmart the Game?</strong> Welcome to the new age hiring twist, <strong>{company.name} GenC Game Based Aptitude {currentYear}</strong> is more than just a test, it's a challenge of your logic, speed, and strategy.
            </p>
            <p className="csr-paragraph">
              As part of the {company.name} latest hiring {currentYear}, this gamified round is designed to evaluate how you think under pressure in a fun, interactive way. If you're preparing for {company.name} GenC hiring {currentYear}, mastering this round is very important.
            </p>

            <div className="csr-curr-table-wrapper" style={{ margin: '24px 0' }}>
              <table className="csr-curr-table">
                <thead>
                  <tr>
                    <th style={{ textDecoration: 'underline' }}>{company.name} Game Round</th>
                    <th style={{ textDecoration: 'underline' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Number of Games</strong></td>
                    <td>4 Games out of 24</td>
                  </tr>
                  <tr>
                    <td><strong>Time duration</strong></td>
                    <td>50 Minutes</td>
                  </tr>
                  <tr>
                    <td><strong>Importance</strong></td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td><strong>Difficulty</strong></td>
                    <td>Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="csr-stats-grid">
            <div className="csr-stat-card">
              <div className="csr-stat-info">
                <span className="csr-stat-label">Games</span>
                <span className="csr-stat-value">4</span>
              </div>
              <div className="csr-stat-icon csr-icon-blue-bg">🎮</div>
            </div>
            <div className="csr-stat-card">
              <div className="csr-stat-info">
                <span className="csr-stat-label">Time Duration</span>
                <span className="csr-stat-value">50 mins</span>
              </div>
              <div className="csr-stat-icon csr-icon-green-bg">⏱️</div>
            </div>
            <div className="csr-stat-card">
              <div className="csr-stat-info">
                <span className="csr-stat-label">Adaptive/ Non-Adaptive</span>
                <span className="csr-stat-value">Adaptive</span>
              </div>
              <div className="csr-stat-icon csr-icon-yellow-bg">🔄</div>
            </div>
          </div>

          <div className="csr-stats-grid-row-2">
            <div className="csr-stat-card" style={{ gridColumn: '1 / span 1' }}>
              <div className="csr-stat-info">
                <span className="csr-stat-label">Negative marking</span>
                <span className="csr-stat-value">No</span>
              </div>
              <div className="csr-stat-icon csr-icon-purple-bg">➖</div>
            </div>
          </div>

          <div className="csr-content-card" style={{ marginTop: '32px' }}>
            <h2 className="csr-section-title">{company.name} GenC Game Based Aptitude Round Syllabus {currentYear}</h2>
            <h3 className="csr-curr-subtitle" style={{ margin: '24px 0 16px 0' }}>Updated {company.name} GenC Game Based Test Pattern</h3>

            <p className="csr-paragraph">
              {company.name} GenC Game based Aptitude - This round is designed to test your multitasking abilities and decision-making skills. There are a total of 24 games, and the system will randomly select 4 games for you to play. Your goal is to complete these games with maximum accuracy and speed, while making as few mistakes as possible.
            </p>

            <p className="csr-paragraph" style={{ fontWeight: 'bold' }}>You will be evaluated based on the following key skills:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Decision Making</li>
              <li>Accuracy</li>
              <li>Speed</li>
              <li>Memory Power</li>
            </ul>

            <p className="csr-paragraph">
              Out of the 24 games in the {company.name} GenC Game-Based Round, we've created preparation material for several of them to help you practice effectively. But before you start practicing, we recommend checking out our Game Tutorials Page. It will give you a clear understanding of how each game works and the best way to approach them.
            </p>

            <p className="csr-paragraph">Here are some of the games you might come across in the GenC Game Based Round:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Deductive Logical Thinking(Geo-Sudo)</li>
              <li>Inductive-logical Thinking</li>
              <li>Grid Challenge</li>
              <li>Motion Challenge</li>
              <li>Switch Challenge</li>
              <li>Digit Challenge</li>
            </ul>

            <div style={{ textAlign: 'center', margin: '32px 0 16px 0' }}>
              <button className="csr-green-btn" style={{ borderRadius: '24px', textDecoration: 'underline' }}>
                {company.name} GenC Game Based Tutorial
              </button>
            </div>
          </div>

          <div className="csr-content-card" style={{ marginTop: '32px' }}>
            <h2 className="csr-section-title">{company.name} GenC Game Topics Analytics {currentYear}</h2>

            <p className="csr-paragraph">
              {company.name} GenC Game based Aptitude - Below we have mentioned some of the games that you may come across in this section. Here we have mentioned a few of the games only, you can buy our Prime Video Course where we have explained all the 24 games along with their rules and tips to solve them.
            </p>
            <p className="csr-paragraph">
              Before you start solving these games, please visit our Games page, where we have explained each game in detail, so that you don't make silly mistakes in these games.
            </p>

            <div style={{ textAlign: 'center', margin: '24px 0' }}>
              <button className="csr-green-btn" style={{ borderRadius: '24px', textDecoration: 'underline' }}>Rules for Game Based Test</button>
            </div>

            <div className="csr-curr-table-wrapper" style={{ margin: '32px 0' }}>
              <table className="csr-curr-table">
                <thead>
                  <tr>
                    <th>Game</th>
                    <th>Type of Questions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Deductive-Logical Thinking (GeoStudio Challenge)</td>
                    <td>Find a missing symbol based in a 4x4 or 5x5 grid based on Geometrical Sudoku.</td>
                  </tr>
                  <tr>
                    <td>Inductive-Logical Reasoning (Spacio Challenge)</td>
                    <td>Visual reasoning-based questions where you're supposed to find a pair of figures that follow the same rule as given by a pair in question.</td>
                  </tr>
                  <tr>
                    <td>Grid Challenge</td>
                    <td>Ability to focus and multitask is tested. You need to do the following simultaneously:<br />1. Checking if two grids are identical<br />2. Remembering position of coordinates in a grid</td>
                  </tr>
                  <tr>
                    <td>Motion Challenge</td>
                    <td>Your ability to plan ahead is measured. Has puzzles where you have to find a path between two points in the maze, in fewer steps as possible.</td>
                  </tr>
                  <tr>
                    <td>Switch Challenge</td>
                    <td>Sequence of geometrical shapes go through a switch containing a code. This code changes the order of shapes. You're supposed to find the correct code as per input-output.</td>
                  </tr>
                  <tr>
                    <td>Digit Challenge</td>
                    <td>A mathematical operation needs to be solved by using a few available digits only once.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Challenge Cards */}
            <div className="csr-challenges-grid">
              <div className="csr-challenge-card">
                <div className="csr-challenge-info">
                  <h4 className="csr-challenge-title">Digit Challenge</h4>
                  <div className="csr-progress-bar-container">
                    <span className="csr-progress-text">0%</span>
                    <div className="csr-progress-track">
                      <div className="csr-progress-fill"></div>
                    </div>
                  </div>
                </div>
                <button className="csr-start-btn">Start →</button>
              </div>

              <div className="csr-challenge-card">
                <div className="csr-challenge-info">
                  <h4 className="csr-challenge-title">Switch Challenge</h4>
                  <div className="csr-progress-bar-container">
                    <span className="csr-progress-text">0%</span>
                    <div className="csr-progress-track">
                      <div className="csr-progress-fill"></div>
                    </div>
                  </div>
                </div>
                <button className="csr-start-btn">Start →</button>
              </div>

              <div className="csr-challenge-card">
                <div className="csr-challenge-info">
                  <h4 className="csr-challenge-title">Inductive Logical Reasoning</h4>
                  <div className="csr-progress-bar-container">
                    <span className="csr-progress-text">0%</span>
                    <div className="csr-progress-track">
                      <div className="csr-progress-fill"></div>
                    </div>
                  </div>
                </div>
                <button className="csr-start-btn">Start →</button>
              </div>

              <div className="csr-challenge-card">
                <div className="csr-challenge-info">
                  <h4 className="csr-challenge-title">GeoSudo</h4>
                  <div className="csr-progress-bar-container">
                    <span className="csr-progress-text">0%</span>
                    <div className="csr-progress-track">
                      <div className="csr-progress-fill"></div>
                    </div>
                  </div>
                </div>
                <button className="csr-start-btn">Start →</button>
              </div>

              <div className="csr-challenge-card">
                <div className="csr-challenge-info">
                  <h4 className="csr-challenge-title">Oddo Challenge</h4>
                  <div className="csr-progress-bar-container">
                    <span className="csr-progress-text">0%</span>
                    <div className="csr-progress-track">
                      <div className="csr-progress-fill"></div>
                    </div>
                  </div>
                </div>
                <button className="csr-start-btn">Start →</button>
              </div>

              <div className="csr-challenge-card">
                <div className="csr-challenge-info">
                  <h4 className="csr-challenge-title">Motion Challenge</h4>
                  <div className="csr-progress-bar-container">
                    <span className="csr-progress-text">0%</span>
                    <div className="csr-progress-track">
                      <div className="csr-progress-fill"></div>
                    </div>
                  </div>
                </div>
                <button className="csr-start-btn">Start →</button>
              </div>
            </div>

            {/* Practice Questions Shown Directly Below */}
            <div className="csr-quiz-container">
              <div className="csr-quiz-header">
                <h2 className="csr-section-title" style={{ margin: 0 }}>GeoSudo Practice Questions</h2>
              </div>

              {geoSudoQuestions.map((q, index) => {
                const hasAnswered = !!selectedAnswers[q.id];
                const isCorrectAnswer = hasAnswered && selectedAnswers[q.id] === q.answer;

                return (
                  <div key={q.id}>
                    <div className="csr-question-block">
                      <div className="csr-question-top">
                        <div className="csr-question-image-frame">
                          <img src={q.img} alt={`Question ${q.id}`} />
                        </div>
                      </div>

                      <div className="csr-options-grid">
                        {q.options.map((opt, i) => {
                          const isThisOptionSelected = selectedAnswers[q.id] === opt.text;
                          const isThisOptionCorrect = opt.text === q.answer;

                          let optionClass = "csr-option-label";
                          if (hasAnswered) {
                            optionClass += " answered";
                            if (isThisOptionCorrect) optionClass += " correct";
                            else if (isThisOptionSelected) optionClass += " incorrect";
                          }

                          return (
                            <label key={i} className={optionClass}>
                              {!hasAnswered && (
                                <input
                                  type="radio"
                                  name={`question-${q.id}`}
                                  value={opt.text}
                                  checked={isThisOptionSelected}
                                  onChange={() => handleOptionSelect(q.id, opt.text)}
                                />
                              )}

                              {hasAnswered && isThisOptionCorrect && (
                                <span className="csr-opt-icon correct">●</span>
                              )}
                              {hasAnswered && isThisOptionSelected && !isThisOptionCorrect && (
                                <span className="csr-opt-icon incorrect">❌</span>
                              )}
                              {hasAnswered && !isThisOptionSelected && !isThisOptionCorrect && (
                                <span className="csr-opt-icon neutral">○</span>
                              )}

                              <span className="csr-opt-text">{opt.text}</span>

                              {hasAnswered && (
                                <span className="csr-opt-percent">{opt.percent}</span>
                              )}

                              {hasAnswered && (
                                <div className="csr-opt-progress" style={{ width: opt.percent }}></div>
                              )}
                            </label>
                          );
                        })}
                      </div>

                      {hasAnswered && (
                        <div className={`csr-feedback-banner ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
                          <span className="csr-feedback-icon">
                            {isCorrectAnswer ? '😊' : '😞'}
                          </span>
                          <span>{isCorrectAnswer ? 'Correct!' : 'Oops!'}</span>
                        </div>
                      )}

                      <div className="csr-explanation-toggle">
                        <button className="csr-explanation-btn" onClick={() => toggleExplanation(q.id)}>
                          Show Explanation {expandedExplanations[q.id] ? '▲' : '▼'}
                        </button>
                      </div>

                      {expandedExplanations[q.id] && (
                        <div className="csr-explanation-box">
                          {q.exp}
                        </div>
                      )}
                    </div>
                    {index < geoSudoQuestions.length - 1 && <hr className="csr-question-divider" />}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="csr-content-card" style={{ marginTop: '24px' }}>
          <h2 className="csr-section-title">{company.name} Game Based Aptitude</h2>
          <p className="csr-paragraph">Details and challenges for {company.name} Game Based Aptitude will be updated soon.</p>
        </div>
      )}
    </div>
  );
};

export default GameBasedAptitude;
