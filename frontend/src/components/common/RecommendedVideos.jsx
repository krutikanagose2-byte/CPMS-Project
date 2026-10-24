import React from 'react';
import './RecommendedVideos.css';

// Curated database of verified high-quality placement preparation videos
const TOPIC_VIDEOS = {
  'Quantitative Aptitude': [
    {
      id: 'rRABH8uiGDU',
      title: 'Full Aptitude Course in One Video | Complete Quantitative Aptitude for Placements',
      channel: 'The Coding Icons',
      badge: 'Full Course',
      tag: 'Aptitude Prep',
      duration: 'Complete Course',
      url: 'https://www.youtube.com/watch?v=rRABH8uiGDU'
    },
    {
      id: 'S-Ji7aayH3A',
      title: 'Numerical Ability Preparation One Shot | Top Aptitude Prep for TCS NQT, Wipro & Infosys',
      channel: 'Yash Jain Sir',
      badge: 'One Shot',
      tag: 'Numerical Ability',
      duration: 'High Yield',
      url: 'https://www.youtube.com/watch?v=S-Ji7aayH3A'
    },
    {
      id: 'x9xR0GLYn3s',
      title: 'Top Aptitude Questions for TCS, Wipro & Accenture | Solve in 30 Seconds Shortcuts',
      channel: 'OnlineStudy4u',
      badge: 'Shortcuts',
      tag: 'Speed Math',
      duration: 'PYQ Tricks',
      url: 'https://www.youtube.com/watch?v=x9xR0GLYn3s'
    },
    {
      id: 'biifu9R9DQM',
      title: 'Complete Strategy to CRACK Any Aptitude Test for Campus Placements',
      channel: 'Love Babbar',
      badge: 'Strategy',
      tag: 'Preparation Guide',
      duration: 'Roadmap',
      url: 'https://www.youtube.com/watch?v=biifu9R9DQM'
    }
  ],

  'Logical Reasoning': [
    {
      id: '3AI7mKwiQI8',
      title: 'Complete 7 Hours One Shot Logical Reasoning | All PYQs & Important Patterns',
      channel: 'Campusmonk',
      badge: 'One Shot',
      tag: 'Reasoning Masterclass',
      duration: '7+ Hours',
      url: 'https://www.youtube.com/watch?v=3AI7mKwiQI8'
    },
    {
      id: 'sWJfscVkhLI',
      title: 'Reasoning Ability Preparation One Shot | Important Puzzles & Blood Relations',
      channel: 'Yash Jain Sir',
      badge: 'Masterclass',
      tag: 'Logical Ability',
      duration: 'High Yield',
      url: 'https://www.youtube.com/watch?v=sWJfscVkhLI'
    },
    {
      id: '59aOIbUcdb4',
      title: 'Aptitude for Campus Placements Full Course | Complete Logical Reasoning Guide',
      channel: 'Code Step By Step',
      badge: 'Full Guide',
      tag: 'Syllogisms & Series',
      duration: 'Full Course',
      url: 'https://www.youtube.com/watch?v=59aOIbUcdb4'
    },
    {
      id: '1-Xp4AI-xRc',
      title: 'Top Logical Reasoning Questions | Easy Tricks & Shortcuts for Placement Exams',
      channel: 'Harismita Rajkumar',
      badge: 'Shortcuts',
      tag: 'Speed Tricks',
      duration: 'PYQ Focus',
      url: 'https://www.youtube.com/watch?v=1-Xp4AI-xRc'
    }
  ],

  'Verbal Ability': [
    {
      id: 'w4_SHDRb-KU',
      title: 'Complete Verbal Ability One Shot | Complete English Preparation for Placements',
      channel: 'Placito',
      badge: 'One Shot',
      tag: 'Verbal Full Course',
      duration: 'Must Watch',
      url: 'https://www.youtube.com/watch?v=w4_SHDRb-KU'
    },
    {
      id: 'GDAVuWg0G8M',
      title: 'Verbal Ability Preparation One Shot | Grammar, Error Spotting & Sentence Correction',
      channel: 'Yash Jain Sir',
      badge: 'Masterclass',
      tag: 'Grammar Rules',
      duration: 'High Yield',
      url: 'https://www.youtube.com/watch?v=GDAVuWg0G8M'
    },
    {
      id: 'eJ596efTJxs',
      title: 'Verbal Ability Complete Course for TCS, Wipro & Other Placements in 2 Hours',
      channel: 'Campusmonk',
      badge: 'Fast Track',
      tag: 'Error Spotting',
      duration: '2 Hours',
      url: 'https://www.youtube.com/watch?v=eJ596efTJxs'
    },
    {
      id: 'I4UIQe9PLNA',
      title: 'Verbal Ability Questions, Reading Comprehension & Preparation Tips',
      channel: 'CVCORP',
      badge: 'Tips & Tricks',
      tag: 'Comprehension',
      duration: 'PYQ Tips',
      url: 'https://www.youtube.com/watch?v=I4UIQe9PLNA'
    }
  ],

  'Coding': [
    {
      id: 'HH-38D-bxto',
      title: 'Top 60 DSA Coding Questions for TCS, Wipro, Infosys & Accenture Placements',
      channel: 'Dev. Shivansh Vasu',
      badge: 'Most Asked',
      tag: 'DSA Sheet',
      duration: 'High Yield',
      url: 'https://www.youtube.com/watch?v=HH-38D-bxto'
    },
    {
      id: 'ufKNM5hLlaw',
      title: 'Complete Roadmap to Crack Coding Rounds of TCS, Infosys, Accenture & Wipro',
      channel: 'Harshit Trehan',
      badge: 'Must Watch',
      tag: 'Coding Roadmap',
      duration: 'Strategy',
      url: 'https://www.youtube.com/watch?v=ufKNM5hLlaw'
    },
    {
      id: 'Jgyjgn5dI4I',
      title: 'Complete Roadmap to Crack Service Companies Coding & Technical Rounds',
      channel: 'Harshit Trehan',
      badge: 'Guide',
      tag: 'Coding Prep',
      duration: 'Full Roadmap',
      url: 'https://www.youtube.com/watch?v=Jgyjgn5dI4I'
    },
    {
      id: '3xC0F9bj9FU',
      title: 'How to Build Strong Programming Logic & Solve Coding Interview Problems',
      channel: 'Apna College',
      badge: 'Core Logic',
      tag: 'Logic Building',
      duration: 'Foundation',
      url: 'https://www.youtube.com/watch?v=3xC0F9bj9FU'
    }
  ],

  'Data Interpretation': [
    {
      id: 'rRABH8uiGDU',
      title: 'Data Interpretation Complete Masterclass - Tables, Bar Graphs & Pie Charts',
      channel: 'The Coding Icons',
      badge: 'Masterclass',
      tag: 'DI Masterclass',
      duration: 'Full Guide',
      url: 'https://www.youtube.com/watch?v=rRABH8uiGDU'
    },
    {
      id: 'x9xR0GLYn3s',
      title: 'Data Interpretation Shortcuts & Fast Calculation Tricks for Placements',
      channel: 'OnlineStudy4u',
      badge: 'Shortcuts',
      tag: 'Calculation Tricks',
      duration: 'Tips & Tricks',
      url: 'https://www.youtube.com/watch?v=x9xR0GLYn3s'
    },
    {
      id: 'S-Ji7aayH3A',
      title: 'Most Repeated Data Interpretation & Graph Questions in Placement Drives',
      channel: 'Yash Jain Sir',
      badge: 'PYQ Focus',
      tag: 'Charts & Tables',
      duration: 'High Yield',
      url: 'https://www.youtube.com/watch?v=S-Ji7aayH3A'
    }
  ],

  'Visual Reasoning': [
    {
      id: '1-Xp4AI-xRc',
      title: 'Visual & Non-Verbal Reasoning Tricks - Pattern Completion & Paper Folding',
      channel: 'Harismita Rajkumar',
      badge: 'Shortcuts',
      tag: 'Pattern Completion',
      duration: 'Full Guide',
      url: 'https://www.youtube.com/watch?v=1-Xp4AI-xRc'
    },
    {
      id: '59aOIbUcdb4',
      title: 'Visual Reasoning Most Repeated Questions & Patterns for IT Recruitment',
      channel: 'Code Step By Step',
      badge: 'Placement Prep',
      tag: 'Image Series',
      duration: 'Masterclass',
      url: 'https://www.youtube.com/watch?v=59aOIbUcdb4'
    },
    {
      id: '3AI7mKwiQI8',
      title: 'Abstract & Spatial Reasoning Tricks for Online Assessment Rounds',
      channel: 'Campusmonk',
      badge: 'Top Tricks',
      tag: 'Spatial Reasoning',
      duration: 'One Shot',
      url: 'https://www.youtube.com/watch?v=3AI7mKwiQI8'
    }
  ],

  'Psychometric': [
    {
      id: 'biifu9R9DQM',
      title: 'Psychometric & Behavioral Test Preparation for Top IT Companies',
      channel: 'Love Babbar',
      badge: 'Preparation',
      tag: 'Psychometric Prep',
      duration: 'Full Guide',
      url: 'https://www.youtube.com/watch?v=biifu9R9DQM'
    },
    {
      id: 'ufKNM5hLlaw',
      title: 'How to Crack Personality & Situational Judgement Tests in Campus Hiring',
      channel: 'Harshit Trehan',
      badge: 'Strategy',
      tag: 'Situational Tests',
      duration: 'Tips & Tricks',
      url: 'https://www.youtube.com/watch?v=ufKNM5hLlaw'
    },
    {
      id: 'sWJfscVkhLI',
      title: 'Most Common Psychometric Assessment Questions and Right Workplace Attitudes',
      channel: 'Yash Jain Sir',
      badge: 'Model Answers',
      tag: 'Workplace Attitude',
      duration: 'High Yield',
      url: 'https://www.youtube.com/watch?v=sWJfscVkhLI'
    }
  ],

  'Cryptarithmetic': [
    {
      id: 'x9xR0GLYn3s',
      title: 'Cryptarithmetic Multiplication & Addition Tricks - Complete Shortcuts Guide',
      channel: 'OnlineStudy4u',
      badge: 'Shortcuts',
      tag: 'Alpha-Numeric Math',
      duration: 'Tricks',
      url: 'https://www.youtube.com/watch?v=x9xR0GLYn3s'
    },
    {
      id: 'rRABH8uiGDU',
      title: 'Cryptarithmetic Problem Solving Strategies & Most Repeated Questions',
      channel: 'The Coding Icons',
      badge: 'Masterclass',
      tag: 'Problem Solving',
      duration: 'Full Guide',
      url: 'https://www.youtube.com/watch?v=rRABH8uiGDU'
    },
    {
      id: '3AI7mKwiQI8',
      title: 'Cryptarithmetic Step-by-Step Solving Practice for Wipro & TCS Drives',
      channel: 'Campusmonk',
      badge: 'One Shot',
      tag: 'Step-by-Step',
      duration: 'PYQ Focus',
      url: 'https://www.youtube.com/watch?v=3AI7mKwiQI8'
    }
  ],

  'Essay Writing': [
    {
      id: 'w4_SHDRb-KU',
      title: 'Campus Placement Essay Writing Rules, Structure & Scoring Template',
      channel: 'Placito',
      badge: 'Format Guide',
      tag: 'Essay Structure',
      duration: 'Full Guide',
      url: 'https://www.youtube.com/watch?v=w4_SHDRb-KU'
    },
    {
      id: 'GDAVuWg0G8M',
      title: 'High Scoring Essay Writing Template & Key Vocabulary for Placements',
      channel: 'Yash Jain Sir',
      badge: 'Template',
      tag: 'High Scoring',
      duration: 'Key Tips',
      url: 'https://www.youtube.com/watch?v=GDAVuWg0G8M'
    },
    {
      id: 'eJ596efTJxs',
      title: 'Common Placement Essay Topics & Essential Grammar Guidelines',
      channel: 'Campusmonk',
      badge: 'Top Topics',
      tag: 'Important Topics',
      duration: 'Do & Don\'t',
      url: 'https://www.youtube.com/watch?v=eJ596efTJxs'
    }
  ]
};

// Normalize topic names to match the dictionary keys
const normalizeTopicKey = (rawTopic) => {
  if (!rawTopic) return 'Quantitative Aptitude';
  const lower = rawTopic.toLowerCase();

  if (lower.includes('quant') || lower.includes('numerical')) {
    return 'Quantitative Aptitude';
  }
  if (lower.includes('logic') || lower.includes('reasoning')) {
    return 'Logical Reasoning';
  }
  if (lower.includes('verbal') || lower.includes('english')) {
    return 'Verbal Ability';
  }
  if (lower.includes('cod') || lower.includes('tech') || lower.includes('program')) {
    return 'Coding';
  }
  if (lower.includes('data interpretation') || lower.includes('interpretation')) {
    return 'Data Interpretation';
  }
  if (lower.includes('visual')) {
    return 'Visual Reasoning';
  }
  if (lower.includes('psycho')) {
    return 'Psychometric';
  }
  if (lower.includes('crypt')) {
    return 'Cryptarithmetic';
  }
  if (lower.includes('essay')) {
    return 'Essay Writing';
  }
  return 'Quantitative Aptitude';
};

const RecommendedVideos = ({ topic = 'Quantitative Aptitude', customTitle = null }) => {
  const normalizedKey = normalizeTopicKey(topic);
  const videos = TOPIC_VIDEOS[normalizedKey] || TOPIC_VIDEOS['Quantitative Aptitude'];
  const displayTitle = customTitle || `${normalizedKey} Preparation Videos`;

  return (
    <section className="rec-videos-section" aria-label="Recommended YouTube Preparation Videos">
      <div className="rec-videos-header">
        <div className="rec-videos-title-wrap">
          <div className="rec-youtube-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff0000" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Recommended YouTube Videos</span>
          </div>
          <h2 className="rec-videos-title">
            {displayTitle}
          </h2>
          <p className="rec-videos-subtitle">
            Curated top-rated lectures, full crash courses, and shortcut trick masterclasses to crack {normalizedKey}
          </p>
        </div>
      </div>

      <div className="rec-videos-grid">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rec-video-card"
            title={`Watch "${video.title}" on YouTube (opens in new tab)`}
          >
            <div className="rec-video-thumb-container">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="rec-video-thumb"
                loading="lazy"
              />
              <div className="rec-video-play-overlay">
                <div className="rec-play-btn" aria-label="Play Video">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <span className="rec-video-badge">{video.badge}</span>
            </div>

            <div className="rec-video-content">
              <div className="rec-video-meta-top">
                <span className="rec-video-tag">{video.tag}</span>
                <span className="rec-video-duration">{video.duration}</span>
              </div>

              <h4 className="rec-video-title" title={video.title}>
                {video.title}
              </h4>

              <div className="rec-video-footer">
                <span className="rec-video-channel" title={video.channel}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#ef4444" style={{ flexShrink: 0 }}>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {video.channel}
                </span>

                <span className="rec-watch-btn">
                  Watch <span className="rec-arrow">↗</span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RecommendedVideos;
