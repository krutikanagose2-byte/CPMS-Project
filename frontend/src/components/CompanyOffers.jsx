import React, { useState, useEffect } from 'react';
import './CompanyOffers.css';

const CompanyOffers = ({ company, onBack }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  
  useEffect(() => {
    if (!company) return;
    
    // Fetch real-time data from backend
    fetch(`http://localhost:5000/api/jobs/company/${company.name}`)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch jobs:", err);
        setLoading(false);
      });
  }, [company]);

  // Use fetched jobs or fallback to dummy data if DB is empty to match the design requested
  const displayJobs = jobs.length > 0 ? jobs : [
    {
      _id: '1',
      role: 'Software Engineer',
      package: '₹7.0 LPA',
      location: 'Pune / Hybrid',
      criteria: { minCgpa: 6.5, allowedBranches: ['BE/BTech', 'MCA'] },
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'Open',
      description: 'Develop and maintain scalable software applications using modern technologies. You will be responsible for full-stack development and ensuring system reliability.',
      requiredSkills: ['Java', 'React', 'SQL', 'Git'],
      openings: 15,
      whoCanApply: [
        'are available for the work from home job/internship',
        "can start the work from home job/internship between 11th Aug'26 and 15th Sep'26",
        'are available for duration of 3 months',
        'have relevant skills and interests',
        'Women wanting to start/restart their career can also apply.'
      ],
      additionalInfo: 'Stipend/Salary is performance based. Pre-placement offer (PPO) available for stellar performers.'
    },
    {
      _id: '2',
      role: 'Systems Engineer',
      package: '₹6.0 LPA',
      location: 'Pune / Hybrid',
      criteria: { minCgpa: 6.0, allowedBranches: ['BE/BTech'] },
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'Closing Soon',
      description: 'System administration, troubleshooting, and infrastructure management. Focus on cloud technologies and continuous integration.',
      requiredSkills: ['Linux', 'AWS', 'Python', 'Networking'],
      openings: 8,
      whoCanApply: [
        'are available for a full-time role',
        'can join immediately or within 30 days',
        'have a foundational understanding of OS and networking',
        'are willing to relocate if necessary'
      ],
      additionalInfo: 'Shift allowances provided. Health insurance covered.'
    }
  ];

  const handleApply = () => {
    let careersUrl = company?.website ? `${company.website}/careers` : 'https://www.google.com/search?q=' + encodeURIComponent((company?.name || 'Company') + ' careers');
    window.open(careersUrl, '_blank');
  };

  return (
    <div className="company-offers-page">
      {/* Top Navbar Header */}
      <div className="co-page-header">
        <button className="co-back-btn" onClick={onBack}>
          ← Back to {company?.name || 'Companies'}
        </button>
        <div className="co-filters">
          <div className="co-search-wrapper">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search by role, skill..." />
          </div>
          <select className="co-select"><option>All Roles</option></select>
          <select className="co-select"><option>All Locations</option></select>
          <select className="co-select"><option>All Status</option></select>
          <button className="co-filter-btn">⚙ Filters</button>
        </div>
      </div>

      <div className="co-content-wrapper">
        {/* Stats Row */}
        <div className="co-stats-grid">
          <div className="co-stat-card">
            <div className="stat-icon-wrapper blue">📋</div>
            <div className="stat-info">
              <h3>Active Offers</h3>
              <p className="stat-value">{displayJobs.length}</p>
            </div>
          </div>
          <div className="co-stat-card">
            <div className="stat-icon-wrapper orange">📤</div>
            <div className="stat-info">
              <h3>Applied</h3>
              <p className="stat-value">0</p>
            </div>
          </div>
          <div className="co-stat-card">
            <div className="stat-icon-wrapper purple">⭐</div>
            <div className="stat-info">
              <h3>Shortlisted</h3>
              <p className="stat-value">0</p>
            </div>
          </div>
          <div className="co-stat-card">
            <div className="stat-icon-wrapper green">🏆</div>
            <div className="stat-info">
              <h3>Offers Received</h3>
              <p className="stat-value">0</p>
            </div>
          </div>
        </div>

        {/* Company Header Detail Card */}
        <div className="co-detail-header-card">
          <div className="co-detail-logo-wrapper">
            <img src={company?.logo} alt={company?.name} />
          </div>
          <div className="co-detail-info">
            <h2>{company?.name} Placement Drive 2024</h2>
            <p className="co-detail-location">📍 {company?.location}</p>
          </div>
          <div className="co-detail-meta">
            <div className="meta-item">
              <span className="meta-label">Overall Package</span>
              <span className="meta-value">₹5.0 - 8.0 LPA</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Application Deadline</span>
              <span className="meta-value">25 Oct, 2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-badge open">Open</span>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="co-jobs-list">
          <table className="co-jobs-table">
            <thead>
              <tr>
                <th>Job Role</th>
                <th>Package</th>
                <th>Location</th>
                <th>Eligibility</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="7" style={{textAlign: 'center', padding: '40px'}}>Loading offers...</td></tr>
              ) : (
                displayJobs.map(job => {
                  const jobStatus = job.status || 'Open';
                  const isClosing = jobStatus === 'Closing Soon';
                  
                  return (
                    <tr key={job._id}>
                      <td className="job-role-cell">
                        <div className="job-role-icon">💻</div>
                        <div className="job-role-text">
                          <strong>{job.role}</strong>
                          <span>{job.requiredSkills ? job.requiredSkills.slice(0,2).join(', ') : 'Tech'}</span>
                        </div>
                      </td>
                      <td className="font-medium">{job.package}</td>
                      <td className="location-cell">{job.location?.split('\n').join(' / ')}</td>
                      <td className="eligibility-cell">
                        <span className="req-badge">{job.criteria?.minCgpa} CGPA</span>
                        <span className="req-badge">{job.criteria?.allowedBranches?.[0]}</span>
                      </td>
                      <td className={isClosing ? "deadline-closing" : ""}>
                        {new Date(job.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td>
                        <span className={`status-badge ${isClosing ? 'warning' : 'success'}`}>
                          {jobStatus}
                        </span>
                      </td>
                      <td>
                        <button className="view-details-btn" onClick={() => setSelectedJob(job)}>View Details</button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="co-modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="co-modal-content" onClick={e => e.stopPropagation()}>
            <button className="co-modal-close" onClick={() => setSelectedJob(null)}>×</button>
            <div className="co-modal-header">
              <h2>{selectedJob.role}</h2>
              <span className="co-modal-company">{company?.name}</span>
            </div>
            
            <div className="co-modal-body">
              <div className="co-modal-section">
                <h3>About the Role</h3>
                <p>{selectedJob.description || 'No description available for this role.'}</p>
              </div>

              <div className="co-modal-section">
                <h3>Skills Required</h3>
                <div className="co-modal-skills">
                  {(selectedJob.requiredSkills || ['Communication', 'Teamwork', 'Problem Solving']).map((skill, idx) => (
                    <span key={idx} className="co-modal-skill-badge">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="co-modal-section">
                <h3>Who can apply?</h3>
                <p>Only those candidates can apply who:</p>
                <ul className="co-modal-list">
                  {(selectedJob.whoCanApply || [
                    'are available for the work from home job/internship',
                    "can start the work from home job/internship between 11th Aug'26 and 15th Sep'26",
                    'are available for duration of 3 months',
                    'have relevant skills and interests',
                    'Women wanting to start/restart their career can also apply.'
                  ]).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="co-modal-grid">
                <div className="co-modal-section">
                  <h3>Number of Openings</h3>
                  <p>{selectedJob.openings || 'Not specified'}</p>
                </div>
                
                <div className="co-modal-section">
                  <h3>Package / Stipend</h3>
                  <p>{selectedJob.package}</p>
                </div>
              </div>

              {selectedJob.additionalInfo && (
                <div className="co-modal-section">
                  <h3>Additional Information</h3>
                  <p>{selectedJob.additionalInfo}</p>
                </div>
              )}
            </div>

            <div className="co-modal-footer">
              <button className="co-modal-apply-btn" onClick={handleApply}>
                Apply Now ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyOffers;
