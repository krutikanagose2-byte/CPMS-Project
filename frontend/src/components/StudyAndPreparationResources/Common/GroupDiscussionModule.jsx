import React, { useState, useEffect } from 'react';
import './GroupDiscussionModule.css';
import { groupDiscussionTopics } from '../../../data/groupDiscussionTopics';

const GroupDiscussionModule = ({ company, title = 'Group Discussion(GD)', subtitle }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedTopic]);

  const categories = ['All', 'Technology & Future', 'Automotive & Sustainability', 'Corporate Culture & Ethics', 'Finance & Banking', 'Governance & Ethics', 'Economics & Labor', 'Economics & Governance', 'Leadership & Soft Skills'];

  const filteredTopics = groupDiscussionTopics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  // 1. Topic Detail View (View Isolation)
  if (selectedTopic) {
    return (
      <div className="gd-module-container">
        <div className="gd-detail-container">
          <div className="gd-detail-nav">
            <button className="gd-back-button" onClick={handleBackToTopics}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              ← Back to GD Topics
            </button>
            <span
              className="gd-card-badge"
              style={{
                backgroundColor: selectedTopic.badgeBg || '#e0f2fe',
                color: selectedTopic.badgeColor || '#0369a1'
              }}
            >
              {selectedTopic.badge || selectedTopic.category}
            </span>
          </div>

          <div className="gd-detail-header">
            <div className="gd-detail-meta">
              <span className="gd-card-time">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {selectedTopic.estimatedTime}
              </span>
              <span style={{ color: '#cbd5e1' }}>•</span>
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>
                {selectedTopic.category}
              </span>
            </div>
            <h1 className="gd-detail-title">{selectedTopic.title}</h1>
            <p className="gd-detail-lead">{selectedTopic.summary}</p>
          </div>

          {/* In-depth Overview in long paragraph format */}
          <div className="gd-section-block">
            <h3 className="gd-block-heading">
              <span className="gd-block-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>📖</span>
              Comprehensive Topic Overview &amp; Context
            </h3>
            {selectedTopic.overview && selectedTopic.overview.map((paragraph, idx) => (
              <p key={idx} className="gd-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pros vs Cons / Two-sided Arguments */}
          <div className="gd-pros-cons-grid">
            <div className="gd-pro-card">
              <h4 className="gd-side-title pro">
                <span>✅</span> Arguments in Favor / Opportunities (Pros)
              </h4>
              <ul className="gd-points-list">
                {selectedTopic.argumentsFor && selectedTopic.argumentsFor.map((arg, idx) => (
                  <li key={idx} className="gd-point-item">
                    <span className="gd-point-bullet pro">•</span>
                    <span>{arg}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gd-con-card">
              <h4 className="gd-side-title con">
                <span>⚠️</span> Arguments Against / Critical Challenges (Cons)
              </h4>
              <ul className="gd-points-list">
                {selectedTopic.argumentsAgainst && selectedTopic.argumentsAgainst.map((arg, idx) => (
                  <li key={idx} className="gd-point-item">
                    <span className="gd-point-bullet con">•</span>
                    <span>{arg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Data Points & Statistics to Quote */}
          {selectedTopic.keyDataPoints && selectedTopic.keyDataPoints.length > 0 && (
            <div className="gd-datapoints-card">
              <h4 className="gd-data-title">
                <span>📊</span> Key Data Points &amp; Statistics to Quote in GD
              </h4>
              <ul className="gd-data-list">
                {selectedTopic.keyDataPoints.map((stat, idx) => (
                  <li key={idx} className="gd-data-item">
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* High-Impact Keypoints & Notes */}
          {selectedTopic.keyTakeaways && selectedTopic.keyTakeaways.length > 0 && (
            <div className="gd-section-block">
              <h3 className="gd-block-heading">
                <span className="gd-block-icon" style={{ background: '#fef3c7', color: '#d97706' }}>💡</span>
                High-Impact Keypoints &amp; Preparation Summary
              </h3>
              <ul className="gd-points-list">
                {selectedTopic.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="gd-point-item">
                    <span className="gd-point-bullet" style={{ color: '#d97706' }}>✦</span>
                    <span style={{ fontWeight: '500' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="gd-detail-footer">
            <button className="gd-back-button" onClick={handleBackToTopics}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              ← Back to GD Topics List
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Main List View: Topics for Group Discussion
  return (
    <div className="gd-module-container">
      {/* Main Heading */}
      <h2 className="csr-section-title" style={{ marginBottom: '20px' }}>
        {company?.name ? `${company.name} - ${title}` : title}
      </h2>

      {/* Search and Category Filter */}
      <div className="gd-controls-bar">
        <div className="gd-search-box">
          <svg className="gd-search-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="gd-search-input"
            placeholder="Search GD topics (e.g., AI, Electric Vehicles, Hybrid Work)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="gd-category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gd-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      {filteredTopics.length > 0 ? (
        <div className="gd-topics-grid">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="gd-topic-card"
              onClick={() => setSelectedTopic(topic)}
            >
              <div className="gd-card-top">
                <span
                  className="gd-card-badge"
                  style={{
                    backgroundColor: topic.badgeBg || '#e0f2fe',
                    color: topic.badgeColor || '#0369a1'
                  }}
                >
                  {topic.badge || topic.category}
                </span>
                <span className="gd-card-time">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {topic.estimatedTime}
                </span>
              </div>

              <h3 className="gd-card-title">{topic.title}</h3>
              <p className="gd-card-summary">{topic.summary}</p>

              <div className="gd-card-footer">
                <span className="gd-action-link">
                  Study Topic &amp; Keypoints
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '48px 20px', background: '#ffffff', borderRadius: '16px', border: '1.5px dashed #cbd5e1' }}>
          <p style={{ fontSize: '16px', color: '#64748b', margin: '0 0 12px 0' }}>
            No Group Discussion topics found matching "{searchQuery}".
          </p>
          <button
            className="gd-pill-btn active"
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupDiscussionModule;
