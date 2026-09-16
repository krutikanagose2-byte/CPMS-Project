import { paperFoldingQuestions } from '../../../data/paperFoldingQuestions';
import { paperCuttingQuestions } from '../../../data/paperCuttingQuestions';
import { embeddedFiguresQuestions } from '../../../data/embeddedFiguresQuestions';
import { countingFiguresQuestions } from '../../../data/countingFiguresQuestions';
import { patternCompletionQuestions } from '../../../data/patternCompletionQuestions';
import { cubeAndDiceQuestions } from '../../../data/cubeAndDiceQuestions';
import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';


const VisualReasoning = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { id: 1, title: 'Figure Series', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: null },
    { id: 2, title: 'Figure Analogy', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: null },
    { id: 3, title: 'Figure Classification', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: null },
    { id: 4, title: 'Mirror Images', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: null },
    { id: 5, title: 'Water Images', questions: 20, color: '#dcfce7', iconColor: '#22c55e', data: null },
    { id: 6, title: 'Paper Folding', questions: 20, color: '#ffedd5', iconColor: '#f97316', data: paperFoldingQuestions },
    { id: 7, title: 'Paper Cutting', questions: 20, color: '#fce7f3', iconColor: '#ec4899', data: paperCuttingQuestions },
    { id: 8, title: 'Embedded Figures', questions: 20, color: '#ccfbf1', iconColor: '#14b8a6', data: embeddedFiguresQuestions },
    { id: 9, title: 'Counting Figures', questions: 20, color: '#e0f2fe', iconColor: '#0ea5e9', data: countingFiguresQuestions },
    { id: 10, title: 'Pattern Completion', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: patternCompletionQuestions },
    { id: 11, title: 'Cube & Dice', questions: 20, color: '#f3e8ff', iconColor: '#a855f7', data: cubeAndDiceQuestions },
    { id: 12, title: 'Figure Rotation', questions: 20, color: '#e0e7ff', iconColor: '#6366f1', data: null },
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
    <>
      {/* Video Lectures & Playlists Section - Same size as Previous Year Questions */}
      <div className="pyq-section">
        <h2 className="csr-topics-title" style={{marginBottom: '20px'}}>Video Lectures & Playlists</h2>
        <div className="pyq-grid">
          <div className="pyq-card">
            <div className="pyq-image-container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PL1zxEeUFe9leSOm2sKjGkCPUzsUCTF0FI"
                title="Visual Reasoning Video Playlist"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="pyq-info">
              <a 
                href="https://youtube.com/playlist?list=PL1zxEeUFe9leSOm2sKjGkCPUzsUCTF0FI" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1e293b' }}
              >
                <h4 className="pyq-name" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="18" height="18" fill="#ef4444" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Visual Reasoning Playlist
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pyq-section">
        <h2 className="csr-topics-title" style={{marginBottom: '20px'}}>Previous Year Questions</h2>
        <div className="pyq-grid">
          <a href="/pyq/pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
            <div className="pyq-image-container">
              <img src="/pyq/custom_cover.png" alt="PYQ 1" className="pyq-image" />
            </div>
            <div className="pyq-info">
              <h4 className="pyq-name">Visual Reasoning PYQ 1</h4>
            </div>
          </a>
          <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
            <div className="pyq-image-container">
              <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
            </div>
            <div className="pyq-info">
              <h4 className="pyq-name">Visual Reasoning PYQ 2</h4>
            </div>
          </a>
          <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
            <div className="pyq-image-container">
              <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
            </div>
            <div className="pyq-info">
              <h4 className="pyq-name">Visual Reasoning PYQ 3</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Visual Reasoning?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Visual Reasoning Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default VisualReasoning;
