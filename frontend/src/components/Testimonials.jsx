import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Priya Nair',
    role: 'ML Intern - Data Science Cohort',
    feedback: 'Mentors who had actually shipped ML systems in production — that is what made the difference between theory and a real offer.',
    program: 'Student from Agentic AI Accelerator',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: 'Consulting Intern - Career Accelerator',
    feedback: 'The mock interview checkpoints alone were worth the cohort. I walked in prepared for questions I had genuinely rehearsed.',
    program: 'Student from Java Full Stack Accelerator',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 3,
    name: 'Sneha Reddy',
    role: 'AI Cohort - Final Year',
    feedback: 'I joined a webinar for fun and ended up with an internship. Best decision of my academic life!',
    program: 'Student from Digital Marketing Accelerator',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 4,
    name: 'Rohan Gupta',
    role: 'Software Engineer - TCS',
    feedback: 'The resources and study materials provided through the dashboard were incredibly helpful. It allowed me to brush up on my technical skills.',
    program: 'Student from Frontend Dev Accelerator',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 5,
    name: 'Aarti Sharma',
    role: 'Backend Developer - Infosys',
    feedback: 'The placement cell provided excellent training and guidance. The rigorous mock interviews really helped me crack the selection process.',
    program: 'Student from Cloud Computing Cohort',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 6,
    name: 'Karan Patel',
    role: 'Data Analyst - Wipro',
    feedback: 'A fantastic learning curve! The systematic approach of the CPMS system kept me informed about all the upcoming drives.',
    program: 'Student from Data Analytics Cohort',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Update items per slide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group testimonials
  const groupedTestimonials = [];
  for (let i = 0; i < testimonialsData.length; i += itemsPerSlide) {
    groupedTestimonials.push(testimonialsData.slice(i, i + itemsPerSlide));
  }

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === groupedTestimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); 
    return () => clearInterval(interval);
  }, [groupedTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? groupedTestimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === groupedTestimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        
        {/* Header Layout matching the image */}
        <div className="t-header-row">
          <div className="t-header-left">
            <span className="t-subtitle"><span className="dot-red">•</span> REVIEWS</span>
            <h2 className="t-main-title">
              Don't take our word<br/>
              <span className="text-highlight">for it.</span>
            </h2>
          </div>
          <div className="t-header-right">
            <p className="t-description">
              Real feedback from students who went through our cohorts — in their own words, on the outcomes that mattered to them.
            </p>
          </div>
        </div>

        <div className="slider-container">
          <div className="slider-viewport">
            <div 
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {groupedTestimonials.map((group, groupIndex) => (
                <div className="slide-group" key={groupIndex}>
                  {group.map((t) => (
                    <div className="testimonial-card" key={t.id}>
                      <div className="t-card-header">
                        <img src={t.image} alt={t.name} className="t-student-img" />
                        <div className="t-student-info">
                          <h4 className="t-student-name">{t.name}</h4>
                          <p className="t-student-role">{t.role}</p>
                        </div>
                      </div>
                      <p className="t-feedback-text">{t.feedback}</p>
                      <div className="t-card-footer">
                        <span className="dot-red">•</span> {t.program}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="slider-controls">
          <button className="slider-nav-btn" onClick={handlePrev}>
            <i className="fas fa-arrow-left"></i>
          </button>
          
          <div className="slider-dots">
            {groupedTestimonials.map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button className="slider-nav-btn" onClick={handleNext}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

      </div>
    </section>
  );
}
