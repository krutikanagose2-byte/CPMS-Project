import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';

import { readingComprehensionQuestions } from '../../../data/readingComprehensionQuestions';
import { grammarQuestions } from '../../../data/grammarQuestions';
import { sentenceCorrectionQuestions } from '../../../data/sentenceCorrectionQuestions';
import { vocabularyQuestions } from '../../../data/vocabularyQuestions';
import { fillInTheBlanksQuestions } from '../../../data/fillInTheBlanksQuestions';
import { paraJumblesQuestions } from '../../../data/paraJumblesQuestions';
import { errorDetectionQuestions } from '../../../data/errorDetectionQuestions';
import { sentenceCompletionQuestions } from '../../../data/sentenceCompletionQuestions';
import { clozeTestQuestions } from '../../../data/clozeTestQuestions';
import { verbalReasoningQuestions } from '../../../data/verbalReasoningQuestions';

const VerbalAbility = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const verbalTopics = [
    { id: 1, title: 'Reading Comprehension', questions: 20, color: 'blue', data: readingComprehensionQuestions },
    { id: 2, title: 'Grammar', questions: 20, color: 'green', data: grammarQuestions },
    { id: 3, title: 'Sentence Correction', questions: 20, color: 'purple', data: sentenceCorrectionQuestions },
    { id: 4, title: 'Vocabulary', questions: 20, color: 'yellow', data: vocabularyQuestions },
    { id: 5, title: 'Fill in the Blanks', questions: 20, color: 'red', data: fillInTheBlanksQuestions },
    { id: 6, title: 'Sentence Arrangement / Para Jumbles', questions: 20, color: 'orange', data: paraJumblesQuestions },
    { id: 7, title: 'Error Detection', questions: 20, color: 'blue', data: errorDetectionQuestions },
    { id: 8, title: 'Sentence Completion', questions: 20, color: 'green', data: sentenceCompletionQuestions },
    { id: 9, title: 'Cloze Test', questions: 20, color: 'purple', data: clozeTestQuestions },
    { id: 10, title: 'Verbal Reasoning', questions: 20, color: 'yellow', data: verbalReasoningQuestions },
  ];

  const handleTopicClick = (topic) => {
    if (topic.data) {
      setSelectedTopic(topic);
    } else {
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
    <>
      {/* Video Lectures & Playlists Section - Same size as Previous Year Questions */}
      <div className="pyq-section">
        <h2 className="csr-topics-title" style={{ marginBottom: '20px' }}>Video Lectures & Playlists</h2>
        <div className="pyq-grid">
          <div className="pyq-card">
            <div className="pyq-image-container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLMufDeLh5x2BWYJy0ldl6vgrQ4nZm1Qap"
                title="Verbal Ability Video Playlist"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="pyq-info">
              <a 
                href="https://youtube.com/playlist?list=PLMufDeLh5x2BWYJy0ldl6vgrQ4nZm1Qap" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1e293b' }}
              >
                <h4 className="pyq-name" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <svg width="18" height="18" fill="#ef4444" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Verbal Ability Playlist
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pyq-section">
        <h2 className="csr-topics-title" style={{ marginBottom: '20px' }}>Previous Year Questions</h2>
        <div className="pyq-grid">
          <a href="/pyq/verbal_pyq1.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
            <div className="pyq-image-container">
              <img src="/pyq/verbal_pyq1_thumb.png" alt="PYQ 1" className="pyq-image" />
            </div>
            <div className="pyq-info">
              <h4 className="pyq-name">Verbal PYQ 1</h4>
            </div>
          </a>
          <a href="/pyq/verbal_pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
            <div className="pyq-image-container">
              <img src="/pyq/verbal_pyq2_thumb.png" alt="PYQ 2" className="pyq-image" />
            </div>
            <div className="pyq-info">
              <h4 className="pyq-name">Verbal PYQ 2</h4>
            </div>
          </a>
          <a href="/pyq/verbal_pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
            <div className="pyq-image-container">
              <img src="/pyq/verbal_pyq3_thumb.png" alt="PYQ 3" className="pyq-image" />
            </div>
            <div className="pyq-info">
              <h4 className="pyq-name">Verbal PYQ 3</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );

  return (
    <TopicsGrid
      topics={verbalTopics}
      bannerTitle="Ready to Test Your Verbal Ability?"
      bannerSubtitle="Take a full length test and analyze your English skills."
      bannerButtonText="Take an Online Verbal Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default VerbalAbility;