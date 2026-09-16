import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';

const EssayWriting = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
  {
    "id": 1,
    "title": "Artificial Intelligence",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 2,
    "title": "Generative AI",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 3,
    "title": "Impact of Technology on Education",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 4,
    "title": "Automation and Employment",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 5,
    "title": "Cybersecurity",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 6,
    "title": "Social Media and Technology",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 7,
    "title": "Digital Transformation",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 8,
    "title": "Future of Technology",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 9,
    "title": "Online Education",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 10,
    "title": "Importance of Skill-Based Education",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 11,
    "title": "Education vs Experience",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 12,
    "title": "Role of Teachers in Modern Education",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 13,
    "title": "Examination System",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 14,
    "title": "Importance of Technical Education",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 15,
    "title": "Social Media: Boon or Bane",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 16,
    "title": "Gender Equality",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 17,
    "title": "Youth and Society",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 18,
    "title": "Work-Life Balance",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 19,
    "title": "Mental Health Awareness",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 20,
    "title": "Importance of Communication",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 21,
    "title": "Diversity and Inclusion",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 22,
    "title": "Changing Workplace Culture",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 23,
    "title": "Climate Change",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 24,
    "title": "Global Warming",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 25,
    "title": "Renewable Energy",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 26,
    "title": "Environmental Pollution",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 27,
    "title": "Sustainable Development",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 28,
    "title": "Water Conservation",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 29,
    "title": "Plastic Pollution",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 30,
    "title": "Electric Vehicles",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 31,
    "title": "Startups in India",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 32,
    "title": "Digital Economy",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 33,
    "title": "Cashless Economy",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 34,
    "title": "Entrepreneurship",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 35,
    "title": "E-commerce",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 36,
    "title": "Future of Jobs",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 37,
    "title": "Gig Economy",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 38,
    "title": "Make in India",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 39,
    "title": "India as a Global Economy",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 40,
    "title": "Advantages and Disadvantages of AI",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 41,
    "title": "Remote Work",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 42,
    "title": "Leadership",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 43,
    "title": "Importance of Teamwork",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 44,
    "title": "Time Management",
    "questions": 1,
    "color": "green"
  },
  {
    "id": 45,
    "title": "Success and Failure",
    "questions": 1,
    "color": "purple"
  },
  {
    "id": 46,
    "title": "Hard Work vs Smart Work",
    "questions": 1,
    "color": "red"
  },
  {
    "id": 47,
    "title": "Ethics in the Workplace",
    "questions": 1,
    "color": "orange"
  },
  {
    "id": 48,
    "title": "Importance of Continuous Learning",
    "questions": 1,
    "color": "yellow"
  },
  {
    "id": 49,
    "title": "Is Technology Making Us More Productive?",
    "questions": 1,
    "color": "blue"
  },
  {
    "id": 50,
    "title": "Future of Human-AI Collaboration",
    "questions": 1,
    "color": "green"
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
            <h4 className="pyq-name">Essay Writing PYQ 1</h4>
          </div>
        </a>
        <a href="/pyq/pyq2.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 2" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Essay Writing PYQ 2</h4>
          </div>
        </a>
        <a href="/pyq/pyq3.pdf" target="_blank" rel="noopener noreferrer" className="pyq-card">
          <div className="pyq-image-container">
            <img src="/pyq/custom_cover.png" alt="PYQ 3" className="pyq-image" />
          </div>
          <div className="pyq-info">
            <h4 className="pyq-name">Essay Writing PYQ 3</h4>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <TopicsGrid 
      topics={topics}
      bannerTitle="Ready to Test Your Essay Writing?"
      bannerSubtitle="Take a full length test and analyze your performance."
      bannerButtonText="Take an Online Essay Writing Test Now!"
      onTopicClick={handleTopicClick}
      headerContent={pyqHeaderContent}
    />
  );
};

export default EssayWriting;
