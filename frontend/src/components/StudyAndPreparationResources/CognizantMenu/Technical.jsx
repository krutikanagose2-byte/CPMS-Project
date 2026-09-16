import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';
import {
  cCodingQuestions, cppCodingQuestions, javaCodingQuestions,
  pythonCodingQuestions, sqlCodingQuestions, javascriptCodingQuestions,
  webDevCodingQuestions
} from './TechnicalQuestions';

const Technical = ({ company }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { id: 1, title: 'C', questions: 15, color: '#e0f2fe', iconColor: '#0ea5e9', data: cCodingQuestions },
    { id: 2, title: 'C++', questions: 15, color: '#fef3c7', iconColor: '#f59e0b', data: cppCodingQuestions },
    { id: 3, title: 'Java', questions: 15, color: '#f3e8ff', iconColor: '#a855f7', data: javaCodingQuestions },
    { id: 4, title: 'Python', questions: 15, color: '#dcfce7', iconColor: '#22c55e', data: pythonCodingQuestions },
    { id: 5, title: 'SQL', questions: 15, color: '#ffedd5', iconColor: '#f97316', data: sqlCodingQuestions },
    { id: 7, title: 'Web Development (HTML/CSS/JS)', questions: 11, color: '#e0f2fe', iconColor: '#0ea5e9', data: webDevCodingQuestions },
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
        hideOptions={true}
      />
    );
  }

  const pyqHeaderContent = (
    <>
      {/* Video Lectures & Playlists Section - Same size as Previous Year Questions */}
      <div className="pyq-section">
        <h2 className="csr-topics-title" style={{ marginBottom: '20px' }}>Video Lectures &amp; Playlists</h2>
        <div className="pyq-grid">
          <div className="pyq-card">
            <div className="pyq-image-container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLUVqY59GNZQO7e312D4JBWSHHRfckPDG4"
                title="Technical Assessment Video Playlist"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="pyq-info">
              <a
                href="https://youtube.com/playlist?list=PLUVqY59GNZQO7e312D4JBWSHHRfckPDG4"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1e293b' }}
              >
                <h4 className="pyq-name" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="18" height="18" fill="#ef4444" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Technical Playlist
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pyq-section">
        <h2 className="csr-topics-title" style={{ marginBottom: '20px' }}>Previous Year Questions</h2>
        <div className="pyq-grid">
          <a href="/pyq/pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
            <div className="pyq-image-container">
              <img src="/pyq/custom_cover.png" alt="PYQ 1" className="pyq-image" />
            </div>
            <div className="pyq-info">
              <h4 className="pyq-name">Technical PYQ 1</h4>
            </div>
          </a>
          <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
            <div className="pyq-image-container">
              <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
            </div>
            <div className="pyq-info">
              <h4 className="pyq-name">Technical PYQ 2</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );

  return (
    <TopicsGrid
      topics={topics}
      bannerTitle="Ready to Test Your Technical Skills?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Technical Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default Technical;
