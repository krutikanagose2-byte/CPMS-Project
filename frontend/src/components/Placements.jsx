import React, { useState } from 'react';
import './Placements.css';
import { COMPANIES } from './Companies';

export default function Placements({ onBack, onOpenCompanies }) {
  const [expandedCompanies, setExpandedCompanies] = useState({});

  const toggleCompany = (index) => {
    setExpandedCompanies(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleNavClick = (e, path, action) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    if (action) action();
  };

  const generateStudents = (companyName, seed) => {
    // Generate a pseudo-random number of students between 4 and 15
    const numStudents = 4 + ((seed * 7) % 12);
    const maleNames = ['Aarav', 'Rohan', 'Vikram', 'Aditya', 'Karan', 'Sanket', 'Rahul', 'Omkar'];
    const femaleNames = ['Neha', 'Sneha', 'Priya', 'Shruti', 'Riya', 'Mayuri', 'Shweta', 'Pooja'];
    const lastNames = ['Sharma', 'Patil', 'Joshi', 'Deshmukh', 'Singh', 'Gupta', 'Kale', 'Rathod', 'More', 'Wankhade'];
    const branches = ['CSE', 'IT', 'EXTC', 'AI & DS', 'Mechanical', 'Civil'];
    const feedbacks = [
      'Great experience and smooth process.',
      'The mock interviews helped me a lot.',
      'Thrilled to start my career here!',
      'Thank you PRMIT&R for the support.',
      'The technical rounds were challenging but fun.',
      'Excited to join the team.'
    ];

    const maleImages = ['/ind_male_1.png', '/ind_male_2.png', '/ind_male_3.png'];
    const femaleImages = ['/ind_female_1.png', '/ind_female_2.png', '/ind_female_3.png'];

    return Array.from({ length: numStudents }, (_, i) => {
      const id = seed * 10 + i;
      const isMale = (id % 2) === 0;
      
      const firstName = isMale ? maleNames[(id + seed) % maleNames.length] : femaleNames[(id + seed) % femaleNames.length];
      const lastName = lastNames[(id * 3) % lastNames.length];
      const img = isMale ? maleImages[id % maleImages.length] : femaleImages[id % femaleImages.length];
      return {
        id,
        name: `${firstName} ${lastName}`,
        branch: branches[(id * 7) % branches.length],
        placedYear: '2024',
        cgpa: (7.5 + (id % 20) / 10).toFixed(2),
        img: img,
        feedback: feedbacks[i % feedbacks.length]
      };
    });
  };

  const placementsData = COMPANIES.map((company, index) => ({
    companyName: company.name,
    students: generateStudents(company.name, index + 1)
  }));

  return (
    <div className="placements-page">
      {/* NAV */}
      <nav className="co-nav">
        <div className="co-nav-left">
          <div className="co-brand">
            <div className="co-brand-logo">🎓</div>
            <div>
              <div className="co-brand-name">PRMIT&R, Badnera</div>
              <div className="co-brand-sub">College Placement Management System</div>
            </div>
          </div>
          <div className="co-nav-links">
            <a href="/Home" onClick={(e) => handleNavClick(e, '/Home', onBack)}>Home</a>
            <a href="/Companies" onClick={(e) => handleNavClick(e, '/Companies', onOpenCompanies)}>Companies</a>
            <a href="/Placements" className="active" onClick={(e) => handleNavClick(e, '/Placements')}>Placements</a>
            <a href="/Notice-Board" onClick={(e) => handleNavClick(e, '/Notice-Board')}>Notice Board</a>
            <a href="/Contact" onClick={(e) => handleNavClick(e, '/Contact')}>Contact</a>
          </div>
        </div>
        <div className="co-nav-right">
        </div>
      </nav>

      <div className="pl-body">
        <div className="pl-breadcrumb">
          Dashboard &gt; Placements
        </div>

        {placementsData.map((companyData, index) => (
          <div key={index} className="pl-company-section">
            <div className="pl-header-section">
              <div className="pl-header-left">
                <div className="pl-icon-bg">
                  <span>👥</span>
                </div>
                <h2>Selected Students ({companyData.companyName})</h2>
                <span className="pl-badge">{companyData.students.length} Selected</span>
              </div>
              <div className="pl-header-right">
                {index === 0 && (
                  <>
                    <h3>Congratulations! 🎉</h3>
                    <p>Well done to all the selected students.</p>
                  </>
                )}
              </div>
            </div>

            <div className="pl-students-grid">
              {(expandedCompanies[index] ? companyData.students : companyData.students.slice(0, 6)).map((student, sIdx, arr) => (
                <div key={student.id} className="pl-student-card" style={{ position: 'relative' }}>
                  <div className="pl-student-photo-container">
                    <img src={student.img} alt={student.name} className="pl-student-photo" />
                  </div>
                  <h4 className="pl-student-name">{student.name}</h4>
                  <p className="pl-student-info font-bold">{student.branch}</p>
                  <p className="pl-student-info">Placed: {student.placedYear}</p>
                  <p className="pl-student-info">CGPA: {student.cgpa}</p>
                  
                  <div className="pl-feedback-container">
                    <button className="pl-selected-btn">
                      Feedback
                    </button>
                    <div className="pl-feedback-popup">
                      "{student.feedback}"
                    </div>
                  </div>

                  {!expandedCompanies[index] && sIdx === 5 && companyData.students.length > 6 && (
                    <div 
                      className="pl-inline-expand-btn"
                      onClick={() => toggleCompany(index)}
                      title="View All Students"
                    >
                      ❯
                    </div>
                  )}

                  {expandedCompanies[index] && sIdx === arr.length - 1 && companyData.students.length > 6 && (
                    <div 
                      className="pl-inline-expand-btn"
                      onClick={() => toggleCompany(index)}
                      title="Show Less"
                    >
                      ❮
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
