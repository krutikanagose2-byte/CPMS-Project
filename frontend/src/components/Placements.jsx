import React, { useState } from 'react';
import './Placements.css';
import { COMPANIES } from './Companies';
import Navbar from './Navbar';

export default function Placements({ onBack, onOpenCompanies, onOpenLogin, targetCompany, user, onOpenProfile, onOpenNoticeBoard, initialShowAddModal }) {
  const [expandedCompanies, setExpandedCompanies] = useState({});
  const [customPlacements, setCustomPlacements] = useState(() => {
    try {
      const saved = localStorage.getItem('cpms_custom_placements');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return [];
  });

  const [deletedStudentIds, setDeletedStudentIds] = useState(() => {
    try {
      const saved = localStorage.getItem('cpms_deleted_students');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return [];
  });

  const [showAddStudentModal, setShowAddStudentModal] = useState(Boolean(initialShowAddModal));
  const [studentForm, setStudentForm] = useState({
    name: '',
    branch: 'CSE',
    companyName: 'TCS',
    placedYear: '2026',
    cgpa: '8.80',
    gender: 'male',
    feedback: 'Extremely grateful to the college T&P Cell for guidance and training.'
  });

  React.useEffect(() => {
    if (initialShowAddModal) {
      setShowAddStudentModal(true);
    }
  }, [initialShowAddModal]);

  React.useEffect(() => {
    if (targetCompany) {
      const index = COMPANIES.findIndex(c => c.name === targetCompany);
      if (index !== -1) {
        setExpandedCompanies(prev => ({
          ...prev,
          [index]: true
        }));
        setTimeout(() => {
          const el = document.getElementById(`placement-section-${index}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [targetCompany]);

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
      const numericId = seed * 10 + i;
      const id = `${companyName.replace(/\s+/g, '_')}_${numericId}`;
      const isMale = (numericId % 2) === 0;
      
      const firstName = isMale ? maleNames[(numericId + seed) % maleNames.length] : femaleNames[(numericId + seed) % femaleNames.length];
      const lastName = lastNames[(numericId * 3) % lastNames.length];
      const img = isMale ? maleImages[numericId % maleImages.length] : femaleImages[numericId % femaleImages.length];
      return {
        id,
        name: `${firstName} ${lastName}`,
        branch: branches[(numericId * 7) % branches.length],
        placedYear: '2024',
        cgpa: (7.5 + (numericId % 20) / 10).toFixed(2),
        img: img,
        feedback: feedbacks[i % feedbacks.length]
      };
    });
  };

  const handleDeleteStudent = (student, companyName, e) => {
    if (e) e.stopPropagation();
    const confirmed = window.confirm(`Are you sure you want to remove placed student "${student.name}" from ${companyName}?`);
    if (!confirmed) return;

    const updatedCustom = customPlacements.filter(p => String(p.id) !== String(student.id));
    setCustomPlacements(updatedCustom);
    try {
      localStorage.setItem('cpms_custom_placements', JSON.stringify(updatedCustom));
    } catch (err) {
      console.error(err);
    }

    const updatedDeleted = [...deletedStudentIds, student.id];
    setDeletedStudentIds(updatedDeleted);
    try {
      localStorage.setItem('cpms_deleted_students', JSON.stringify(updatedDeleted));
    } catch (err) {
      console.error(err);
    }

    alert(`Student "${student.name}" removed successfully from ${companyName} placements.`);
  };

  const handleAddStudentSubmit = (e) => {
    e.preventDefault();
    if (!studentForm.name.trim()) {
      alert('Student Name is required');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: studentForm.name.trim(),
      branch: studentForm.branch,
      companyName: studentForm.companyName.trim(),
      placedYear: studentForm.placedYear.trim() || '2026',
      cgpa: Number(studentForm.cgpa).toFixed(2),
      img: studentForm.gender === 'female' ? '/ind_female_1.png' : '/ind_male_1.png',
      feedback: studentForm.feedback.trim() || 'Proud to be placed through PRMIT&R T&P Cell!'
    };

    const updated = [newStudent, ...customPlacements];
    setCustomPlacements(updated);
    try {
      localStorage.setItem('cpms_custom_placements', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setShowAddStudentModal(false);
    setStudentForm({
      name: '',
      branch: 'CSE',
      companyName: 'TCS',
      placedYear: '2026',
      cgpa: '8.80',
      gender: 'male',
      feedback: 'Extremely grateful to the college T&P Cell for guidance and training.'
    });
    alert(`Student "${newStudent.name}" added to ${newStudent.companyName} placements!`);
  };

  // Build placements data with merged custom placements
  const placementsData = COMPANIES.map((company, index) => {
    const generated = generateStudents(company.name, index + 1);
    const added = customPlacements.filter(p => p.companyName.toLowerCase() === company.name.toLowerCase());
    const combined = [...added, ...generated].filter(s => !deletedStudentIds.includes(s.id));
    return {
      companyName: company.name,
      students: combined
    };
  });

  return (
    <div className="placements-page">
      <Navbar
        activePage="placements"
        onOpenLogin={onOpenLogin}
        onOpenHome={onBack}
        onOpenCompanies={onOpenCompanies}
        onOpenPlacements={() => {}}
        onOpenNoticeBoard={onOpenNoticeBoard}
        onOpenProfile={onOpenProfile}
        user={user}
        useEmojiLogo={true}
      />

      <div className="pl-body">
        <div className="pl-top-row">
          <div className="pl-breadcrumb">
            Dashboard &gt; Placements
          </div>
          {user?.role === 'admin' && (
            <button 
              className="pl-add-student-btn"
              onClick={() => setShowAddStudentModal(true)}
              type="button"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Student Placement</span>
            </button>
          )}
        </div>

        {placementsData.map((companyData, index) => (
          <div key={index} id={`placement-section-${index}`} className="pl-company-section">
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
                  
                  <div className="pl-action-row">
                    <div className="pl-feedback-container">
                      <button className="pl-selected-btn">
                        Feedback
                      </button>
                      <div className="pl-feedback-popup">
                        "{student.feedback}"
                      </div>
                    </div>
                    {user?.role === 'admin' && (
                      <button 
                        className="pl-delete-student-btn"
                        title={`Delete ${student.name}`}
                        onClick={(e) => handleDeleteStudent(student, companyData.companyName, e)}
                        type="button"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    )}
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

      {/* ── Add Student Placement Modal ── */}
      {showAddStudentModal && (
        <div className="admin-modal-overlay" onClick={() => setShowAddStudentModal(false)}>
          <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <div className="admin-modal-title-wrap">
                <span className="admin-modal-badge">ADMIN ACTION</span>
                <h3>Add Placed Student Record</h3>
              </div>
              <button 
                className="admin-modal-close" 
                onClick={() => setShowAddStudentModal(false)}
                type="button"
              >
                ✕
              </button>
            </div>

            <form className="admin-modal-form" onSubmit={handleAddStudentSubmit}>
              <div className="admin-form-group">
                <label>Student Full Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Yash Deshmukh" 
                  value={studentForm.name} 
                  onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Company Selected In *</label>
                  <select 
                    value={studentForm.companyName} 
                    onChange={(e) => setStudentForm({ ...studentForm, companyName: e.target.value })}
                  >
                    {COMPANIES.map(c => (
                      <option key={c.id} value={c.name}>{c.name} ({c.fullName})</option>
                    ))}
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>Engineering Branch *</label>
                  <select 
                    value={studentForm.branch} 
                    onChange={(e) => setStudentForm({ ...studentForm, branch: e.target.value })}
                  >
                    {['CSE', 'IT', 'EXTC', 'AI & DS', 'Mechanical', 'Civil'].map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Graduation / Placed Year</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 2026" 
                    value={studentForm.placedYear} 
                    onChange={(e) => setStudentForm({ ...studentForm, placedYear: e.target.value })}
                  />
                </div>
                <div className="admin-form-group">
                  <label>Cumulative CGPA</label>
                  <input 
                    type="number" 
                    step="0.01" 
                    min="5" 
                    max="10" 
                    placeholder="e.g. 8.75" 
                    value={studentForm.cgpa} 
                    onChange={(e) => setStudentForm({ ...studentForm, cgpa: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Avatar / Gender</label>
                <select 
                  value={studentForm.gender} 
                  onChange={(e) => setStudentForm({ ...studentForm, gender: e.target.value })}
                >
                  <option value="male">Male (Standard Avatar)</option>
                  <option value="female">Female (Standard Avatar)</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Student Placement Feedback / Quote</label>
                <textarea 
                  rows={2}
                  className="admin-form-textarea"
                  placeholder="Share the student's interview experience or appreciation quote..."
                  value={studentForm.feedback}
                  onChange={(e) => setStudentForm({ ...studentForm, feedback: e.target.value })}
                />
              </div>

              <div className="admin-modal-actions">
                <button 
                  type="button" 
                  className="admin-btn-secondary"
                  onClick={() => setShowAddStudentModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="admin-btn-primary"
                >
                  + Add Placement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
