import React, { useState, useEffect, useRef } from 'react';
import { TECHNICAL_LANGUAGES, CODING_QUESTIONS } from '../../data/technicalCodingQuestions';
import { executeCode, runAllTestCases } from '../../utils/codeRunner';
import './CodingAssessmentEnvironment.css';

// Normalize language prop or name to valid ID
const normalizeLanguageKey = (lang) => {
  if (!lang) return 'c';
  const l = lang.toLowerCase().trim();
  if (l === 'c') return 'c';
  if (l.includes('c++') || l.includes('cpp')) return 'cpp';
  if (l.includes('java') && !l.includes('script')) return 'java';
  if (l.includes('python')) return 'python';
  if (l.includes('sql') || l.includes('database') || l.includes('dbms')) return 'sql';
  if (l.includes('web') || l.includes('html') || l.includes('css') || l.includes('javascript') || l.includes('js')) return 'webdev';
  return 'c';
};

const CodingAssessmentEnvironment = ({ initialLanguage = 'c', onBack, companyName = '' }) => {
  const [currentLang, setCurrentLang] = useState(() => normalizeLanguageKey(initialLanguage));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('problem'); // 'problem', 'explanation', 'solution', 'custom'
  const [fontSize, setFontSize] = useState(14);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [activeTestTab, setActiveTestTab] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [showWebPreview, setShowWebPreview] = useState(false);

  // Solved status tracking stored in localStorage
  const [solvedState, setSolvedState] = useState(() => {
    try {
      const saved = localStorage.getItem('cpms_coding_solved_map');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // User code storage per question
  const [codeMap, setCodeMap] = useState(() => {
    try {
      const saved = localStorage.getItem('cpms_coding_code_map');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const textareaRef = useRef(null);

  // Sync initial language if prop changes
  useEffect(() => {
    if (initialLanguage) {
      setCurrentLang(normalizeLanguageKey(initialLanguage));
      setCurrentQuestionIndex(0);
      setExecutionResult(null);
    }
  }, [initialLanguage]);

  const questionsList = CODING_QUESTIONS[currentLang] || [];
  const currentQuestion = questionsList[currentQuestionIndex] || questionsList[0] || {};
  const currentLangMeta = TECHNICAL_LANGUAGES.find(l => l.id === currentLang) || TECHNICAL_LANGUAGES[0];

  // Get current code
  const codeKey = `${currentLang}_${currentQuestion.id}`;
  const currentCode = codeMap[codeKey] !== undefined ? codeMap[codeKey] : (currentQuestion.starterCode || '');

  // Set default custom input to sample input when question changes
  useEffect(() => {
    if (currentQuestion && currentQuestion.sampleInput) {
      setCustomInput(currentQuestion.sampleInput);
    }
    setExecutionResult(null);
    setActiveTab('problem');
    setShowWebPreview(currentLang === 'webdev');
  }, [currentLang, currentQuestionIndex]);

  // Handle code change
  const handleCodeChange = (newCode) => {
    const updated = { ...codeMap, [codeKey]: newCode };
    setCodeMap(updated);
    try {
      localStorage.setItem('cpms_coding_code_map', JSON.stringify(updated));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  // Reset code to starter code
  const handleResetCode = () => {
    if (window.confirm('Are you sure you want to reset your code to the starter template?')) {
      handleCodeChange(currentQuestion.starterCode || '');
      setExecutionResult(null);
    }
  };

  // Copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Support Tab key indentation in textarea
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const value = e.target.value;
      const newValue = value.substring(0, start) + '    ' + value.substring(end);
      handleCodeChange(newValue);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  // Run single test with current sample or custom input
  const handleRunCode = async () => {
    setIsRunning(true);
    setExecutionResult(null);

    const inputToUse = activeTab === 'custom' ? customInput : (currentQuestion.sampleInput || '');

    // Slight delay to simulate compilation feel
    setTimeout(async () => {
      try {
        const res = await executeCode(currentLang, currentCode, inputToUse, currentQuestion.title);
        
        // Check correctness against expected sample output if using sample input
        const expected = currentQuestion.sampleOutput || '';
        const passed = res.output && expected && res.output.trim() === expected.trim();

        setExecutionResult({
          type: 'run',
          input: inputToUse,
          output: res.output,
          logs: res.logs,
          executionTime: res.executionTime,
          error: res.error,
          passed: passed,
          expected: expected
        });
      } catch (err) {
        setExecutionResult({
          type: 'run',
          input: inputToUse,
          output: '',
          error: err.message || 'Execution error',
          executionTime: 0
        });
      } finally {
        setIsRunning(false);
      }
    }, 250);
  };

  // Submit and run all test cases (Sample + Hidden)
  const handleSubmitCode = async () => {
    setIsSubmitting(true);
    setExecutionResult(null);

    setTimeout(async () => {
      try {
        const testCases = currentQuestion.testCases || [];
        const res = await runAllTestCases(currentLang, currentCode, testCases, currentQuestion.title);

        setExecutionResult({
          type: 'submit',
          ...res
        });

        // If all test cases passed, mark question as solved
        if (res.allPassed) {
          const updatedSolved = {
            ...solvedState,
            [currentLang]: {
              ...(solvedState[currentLang] || {}),
              [currentQuestion.id]: true
            }
          };
          setSolvedState(updatedSolved);
          try {
            localStorage.setItem('cpms_coding_solved_map', JSON.stringify(updatedSolved));
          } catch (e) {
            console.warn('LocalStorage error:', e);
          }
        }
      } catch (err) {
        setExecutionResult({
          type: 'submit',
          allPassed: false,
          error: err.message || 'Test evaluation failed'
        });
      } finally {
        setIsSubmitting(false);
      }
    }, 350);
  };

  // Calculate solved count for current language
  const currentLangSolvedCount = Object.values(solvedState[currentLang] || {}).filter(Boolean).length;
  const totalQuestions = questionsList.length;
  const progressPercent = totalQuestions > 0 ? Math.round((currentLangSolvedCount / totalQuestions) * 100) : 0;
  const isCurrentSolved = !!(solvedState[currentLang] && solvedState[currentLang][currentQuestion.id]);

  return (
    <div className="coding-env-container">
      {/* Top Navigation & Language Toolbar */}
      <header className="coding-env-header">
        <div className="coding-env-header-left">
          {onBack && (
            <button className="coding-back-btn" onClick={onBack} title="Back to Topics Grid">
              <span className="back-arrow">←</span>
              <span className="back-text">Back to Topics</span>
            </button>
          )}

          <div className="coding-lang-badge" style={{ backgroundColor: currentLangMeta.bg, color: currentLangMeta.color }}>
            <span className="lang-icon">{currentLangMeta.icon}</span>
            <span className="lang-name">{currentLangMeta.name}</span>
          </div>

          <div className="coding-header-title">
            <h3>Technical & Coding Assessment</h3>
            {companyName && <span className="company-tag">{companyName}</span>}
          </div>
        </div>

        {/* Language Switcher Pills */}
        <div className="coding-lang-switcher">
          {TECHNICAL_LANGUAGES.map((lang) => {
            const count = Object.values(solvedState[lang.id] || {}).filter(Boolean).length;
            const isActive = currentLang === lang.id;
            return (
              <button
                key={lang.id}
                className={`lang-pill-btn ${isActive ? 'active' : ''}`}
                style={isActive ? { borderColor: lang.color, color: lang.color, backgroundColor: lang.bg } : {}}
                onClick={() => {
                  setCurrentLang(lang.id);
                  setCurrentQuestionIndex(0);
                  setExecutionResult(null);
                }}
              >
                <span className="lang-pill-icon">{lang.icon}</span>
                <span className="lang-pill-name">{lang.name}</span>
                {count > 0 && <span className="lang-pill-solved">{count}/10</span>}
              </button>
            );
          })}
        </div>

        {/* Score & Progress Tracker */}
        <div className="coding-progress-widget">
          <div className="progress-info">
            <span className="progress-label">Progress:</span>
            <span className="progress-score">{currentLangSolvedCount} / {totalQuestions} Solved</span>
          </div>
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progressPercent}%`, backgroundColor: currentLangMeta.color }}
            />
          </div>
          <span className="progress-pct">{progressPercent}%</span>
        </div>
      </header>

      {/* Question Selector Strip (Q1 - Q10) */}
      <div className="question-nav-strip">
        <div className="nav-strip-arrows">
          <button 
            className="nav-arrow-btn"
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            title="Previous Question"
          >
            ◀ Prev
          </button>
        </div>

        <div className="question-pills-row">
          {questionsList.map((q, idx) => {
            const isSolved = !!(solvedState[currentLang] && solvedState[currentLang][q.id]);
            const isSelected = idx === currentQuestionIndex;
            return (
              <button
                key={q.id}
                className={`q-pill ${isSelected ? 'selected' : ''} ${isSolved ? 'solved' : ''}`}
                onClick={() => {
                  setCurrentQuestionIndex(idx);
                  setExecutionResult(null);
                }}
              >
                <span className="q-pill-label">Q{q.id}</span>
                {isSolved ? (
                  <span className="q-check-icon" title="Solved">✓</span>
                ) : (
                  <span className="q-diff-dot" title={q.difficulty} data-diff={q.difficulty}></span>
                )}
              </button>
            );
          })}
        </div>

        <div className="nav-strip-arrows">
          <button 
            className="nav-arrow-btn"
            disabled={currentQuestionIndex === questionsList.length - 1}
            onClick={() => setCurrentQuestionIndex(prev => Math.min(questionsList.length - 1, prev + 1))}
            title="Next Question"
          >
            Next ▶
          </button>
        </div>
      </div>

      {/* Main Split Layout: Left Problem Pane, Right Editor Pane */}
      <div className="coding-main-workspace">
        {/* LEFT PANE: Question Details & Documentation */}
        <div className="coding-left-pane">
          <div className="pane-header-tabs">
            <button 
              className={`pane-tab ${activeTab === 'problem' ? 'active' : ''}`}
              onClick={() => setActiveTab('problem')}
            >
              📋 Problem Statement
            </button>
            <button 
              className={`pane-tab ${activeTab === 'explanation' ? 'active' : ''}`}
              onClick={() => setActiveTab('explanation')}
            >
              💡 Explanation
            </button>
            <button 
              className={`pane-tab ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              ⚙️ Custom Input
            </button>
            <button 
              className={`pane-tab ${activeTab === 'solution' ? 'active' : ''}`}
              onClick={() => setActiveTab('solution')}
            >
              📖 Solution
            </button>
          </div>

          <div className="pane-body-scrollable">
            {activeTab === 'problem' && (
              <div className="problem-container">
                <div className="problem-meta-bar">
                  <h2 className="problem-title">
                    {currentQuestion.id}. {currentQuestion.title}
                  </h2>
                  <div className="problem-tags">
                    <span className={`diff-badge diff-${currentQuestion.difficulty?.toLowerCase()}`}>
                      {currentQuestion.difficulty}
                    </span>
                    {isCurrentSolved && (
                      <span className="solved-badge">✓ Solved</span>
                    )}
                    {currentQuestion.tags?.map((tag, i) => (
                      <span key={i} className="concept-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="problem-section">
                  <h4 className="section-heading">Problem Description</h4>
                  <p className="problem-statement-text">{currentQuestion.problemStatement}</p>
                </div>

                {currentQuestion.inputFormat && (
                  <div className="problem-section">
                    <h4 className="section-heading">Input Format</h4>
                    <div className="format-box">{currentQuestion.inputFormat}</div>
                  </div>
                )}

                {currentQuestion.outputFormat && (
                  <div className="problem-section">
                    <h4 className="section-heading">Output Format</h4>
                    <div className="format-box">{currentQuestion.outputFormat}</div>
                  </div>
                )}

                {/* Sample Test Case Box */}
                <div className="sample-case-container">
                  <div className="sample-box">
                    <div className="sample-header">
                      <span>Sample Input</span>
                      <button 
                        className="copy-sample-btn"
                        onClick={() => {
                          navigator.clipboard.writeText(currentQuestion.sampleInput || '');
                          alert('Sample input copied!');
                        }}
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="sample-content">{currentQuestion.sampleInput || '(No input required)'}</pre>
                  </div>

                  <div className="sample-box">
                    <div className="sample-header">
                      <span>Expected Output</span>
                    </div>
                    <pre className="sample-content">{currentQuestion.sampleOutput}</pre>
                  </div>
                </div>

                {/* Explanation Summary */}
                <div className="problem-section">
                  <h4 className="section-heading">Explanation</h4>
                  <div className="explanation-highlight-box">
                    {currentQuestion.explanation}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'explanation' && (
              <div className="explanation-pane">
                <h3 className="tab-pane-title">Detailed Walkthrough & Logic</h3>
                <div className="explanation-card">
                  <p className="explanation-full-text">{currentQuestion.explanation}</p>
                  
                  <div className="logic-breakdown">
                    <h4>Step-by-Step Approach:</h4>
                    <ol>
                      <li><strong>Understand Constraints:</strong> Review input types, sizes, and boundary test cases.</li>
                      <li><strong>Algorithm Design:</strong> Formulate the optimal time and space complexity solution.</li>
                      <li><strong>Handle Edge Cases:</strong> Handle zero, negative values, duplicates, or empty lists.</li>
                      <li><strong>Output Consistency:</strong> Print exact required format without surplus trailing spaces.</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="custom-input-pane">
                <h3 className="tab-pane-title">Test with Custom Standard Input</h3>
                <p className="custom-input-desc">
                  Provide custom parameters below. When you click <strong>Run Code</strong>, your solution will execute against this input.
                </p>
                <textarea
                  className="custom-input-textarea"
                  rows={6}
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Enter custom input here..."
                />
              </div>
            )}

            {activeTab === 'solution' && (
              <div className="solution-pane">
                <h3 className="tab-pane-title">Reference Solution Code</h3>
                <p className="solution-desc">
                  Study this reference implementation to understand how to solve this problem optimally.
                </p>
                <div className="reference-code-box">
                  <pre>{currentQuestion.starterCode}</pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANE: Interactive Code Editor & Test Case Runner */}
        <div className="coding-right-pane">
          {/* Editor Header Bar */}
          <div className="editor-top-bar">
            <div className="editor-left-tools">
              <span className="editor-file-label">
                solution.{currentLang === 'cpp' ? 'cpp' : currentLang === 'python' ? 'py' : currentLang === 'java' ? 'java' : currentLang === 'sql' ? 'sql' : currentLang === 'webdev' ? 'html' : 'c'}
              </span>
              <span className="editor-lang-tag">{currentLangMeta.name}</span>
            </div>

            <div className="editor-right-tools">
              <div className="font-controls">
                <button 
                  className="tool-btn" 
                  onClick={() => setFontSize(prev => Math.max(11, prev - 1))}
                  title="Decrease Font Size"
                >
                  A-
                </button>
                <span className="font-size-indicator">{fontSize}px</span>
                <button 
                  className="tool-btn" 
                  onClick={() => setFontSize(prev => Math.min(20, prev + 1))}
                  title="Increase Font Size"
                >
                  A+
                </button>
              </div>

              {currentLang === 'webdev' && (
                <button 
                  className={`tool-btn web-preview-toggle ${showWebPreview ? 'active' : ''}`}
                  onClick={() => setShowWebPreview(!showWebPreview)}
                  title="Toggle Live Web Preview"
                >
                  🌐 {showWebPreview ? 'Hide Preview' : 'Live Preview'}
                </button>
              )}

              <button 
                className="tool-btn" 
                onClick={handleCopyCode} 
                title="Copy code to clipboard"
              >
                {copied ? '✓ Copied' : '📋 Copy'}
              </button>

              <button 
                className="tool-btn reset-btn" 
                onClick={handleResetCode} 
                title="Reset code to starter template"
              >
                ↺ Reset
              </button>
            </div>
          </div>

          {/* Web Development Live Preview (if active) */}
          {currentLang === 'webdev' && showWebPreview && (
            <div className="webdev-live-preview-box">
              <div className="preview-header">
                <span>🌐 Real-Time Browser Sandbox Preview</span>
                <span className="preview-tip">Live rendered from code below</span>
              </div>
              <iframe
                title="Live Sandbox"
                srcDoc={currentCode}
                className="webdev-iframe"
                sandbox="allow-scripts"
              />
            </div>
          )}

          {/* Interactive Code Editor Area */}
          <div className="code-editor-wrapper">
            <div className="editor-line-numbers">
              {currentCode.split('\n').map((_, i) => (
                <span key={i} className="line-num">{i + 1}</span>
              ))}
            </div>
            <textarea
              ref={textareaRef}
              className="code-textarea"
              style={{ fontSize: `${fontSize}px` }}
              value={currentCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck="false"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              placeholder="Write your solution here..."
            />
          </div>

          {/* Action Bar (Run & Submit) */}
          <div className="editor-action-bar">
            <div className="action-left-info">
              {isCurrentSolved && (
                <span className="solved-status-tag">
                  ✓ Passed All Test Cases (Solved)
                </span>
              )}
            </div>

            <div className="action-buttons">
              <button 
                className="btn-run"
                disabled={isRunning || isSubmitting}
                onClick={handleRunCode}
                title="Execute code against sample or custom input"
              >
                {isRunning ? (
                  <>
                    <span className="spinner"></span> Running...
                  </>
                ) : (
                  <>▶ Run Code</>
                )}
              </button>

              <button 
                className="btn-submit"
                disabled={isRunning || isSubmitting}
                onClick={handleSubmitCode}
                title="Submit solution and validate against all test cases"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Evaluating...
                  </>
                ) : (
                  <>🚀 Submit & Test</>
                )}
              </button>
            </div>
          </div>

          {/* Console / Test Results Output Drawer */}
          <div className="test-results-drawer">
            <div className="drawer-header">
              <div className="drawer-title-group">
                <span className="drawer-icon">💻</span>
                <span className="drawer-title">Test Results & Console Output</span>
              </div>

              {executionResult && executionResult.executionTime !== undefined && (
                <span className="exec-time-pill">
                  ⏱️ {executionResult.executionTime} ms
                </span>
              )}
            </div>

            <div className="drawer-body">
              {!executionResult && !isRunning && !isSubmitting && (
                <div className="empty-console-state">
                  <p>Click <strong>Run Code</strong> to test your solution with sample inputs, or <strong>Submit & Test</strong> to evaluate against all test cases.</p>
                </div>
              )}

              {(isRunning || isSubmitting) && (
                <div className="running-console-state">
                  <span className="spinner large"></span>
                  <p>{isRunning ? 'Executing code in secure sandbox...' : 'Running hidden & visible test cases...'}</p>
                </div>
              )}

              {executionResult && executionResult.type === 'run' && (
                <div className="run-output-details">
                  <div className={`status-indicator-banner ${executionResult.error ? 'status-error' : executionResult.passed ? 'status-success' : 'status-info'}`}>
                    {executionResult.error ? (
                      <span>❌ Runtime Error</span>
                    ) : executionResult.passed ? (
                      <span>✅ Sample Test Passed</span>
                    ) : (
                      <span>ℹ️ Code Executed Successfully</span>
                    )}
                  </div>

                  {executionResult.error ? (
                    <div className="error-output-box">
                      <pre>{executionResult.error}</pre>
                    </div>
                  ) : (
                    <div className="run-diff-grid">
                      <div className="run-box">
                        <span className="run-box-label">Standard Output:</span>
                        <pre className="output-content">{executionResult.output || '(No standard output)'}</pre>
                      </div>

                      {executionResult.expected && (
                        <div className="run-box">
                          <span className="run-box-label">Expected Output:</span>
                          <pre className="output-content">{executionResult.expected}</pre>
                        </div>
                      )}
                    </div>
                  )}

                  {executionResult.logs && executionResult.logs.length > 0 && (
                    <div className="console-logs-section">
                      <span className="logs-label">Console Logs:</span>
                      <pre className="logs-content">{executionResult.logs.join('\n')}</pre>
                    </div>
                  )}
                </div>
              )}

              {executionResult && executionResult.type === 'submit' && (
                <div className="submit-testcases-view">
                  <div className={`status-indicator-banner ${executionResult.allPassed ? 'status-success' : 'status-failed'}`}>
                    {executionResult.allPassed ? (
                      <span className="banner-text">🎉 Accepted! Passed {executionResult.passedCount} / {executionResult.totalCount} Test Cases</span>
                    ) : (
                      <span className="banner-text">⚠️ Wrong Answer — Passed {executionResult.passedCount} / {executionResult.totalCount} Test Cases</span>
                    )}
                  </div>

                  {/* Test case tabs */}
                  <div className="testcase-tab-strip">
                    {executionResult.testResults?.map((test, idx) => (
                      <button
                        key={idx}
                        className={`testcase-tab-btn ${activeTestTab === idx ? 'active' : ''} ${test.passed ? 'passed' : 'failed'}`}
                        onClick={() => setActiveTestTab(idx)}
                      >
                        <span className="test-badge-icon">{test.passed ? '✓' : '✗'}</span>
                        <span>Case {idx + 1} {test.isHidden ? '(Hidden)' : ''}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Test Case Detail */}
                  {executionResult.testResults && executionResult.testResults[activeTestTab] && (
                    <div className="active-testcase-details">
                      {(() => {
                        const test = executionResult.testResults[activeTestTab];
                        return (
                          <div className="testcase-card">
                            <div className="testcase-row">
                              <span className="test-label">Input:</span>
                              <pre className="test-val">{test.isHidden && !test.passed ? '[Hidden Test Case]' : (test.input || '(None)')}</pre>
                            </div>
                            <div className="testcase-row">
                              <span className="test-label">Your Output:</span>
                              <pre className={`test-val ${test.passed ? 'val-passed' : 'val-failed'}`}>
                                {test.error || test.actualOutput || '(No output)'}
                              </pre>
                            </div>
                            <div className="testcase-row">
                              <span className="test-label">Expected Output:</span>
                              <pre className="test-val val-expected">
                                {test.isHidden && !test.passed ? '[Hidden from view]' : test.expectedOutput}
                              </pre>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingAssessmentEnvironment;
