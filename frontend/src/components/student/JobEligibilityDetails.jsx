import React, { useState } from 'react';
import './JobEligibilityDetails.css';

const JobEligibilityDetails = ({ job, user, onBack }) => {
    const [applicationStatus, setApplicationStatus] = useState(null); // 'Applied', etc.
    const [isApplying, setIsApplying] = useState(false);

    const handleApply = async () => {
        setIsApplying(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        setApplicationStatus('Applied');
        setIsApplying(false);
    };

    const userSkills = user?.skills || ["React", "Node.js", "MongoDB", "Python", "Java"];
    const skillGap = job.requiredSkills.filter(skill => !userSkills.includes(skill));
    
    const recommendations = skillGap.map(skill => ({
        skill,
        resource: `https://www.coursera.org/search?query=${encodeURIComponent(skill)}`
    }));

    return (
        <div className="premium-job-details">
            <button className="premium-back-btn" onClick={onBack}>
                <i className="fas fa-arrow-left"></i> Back to Jobs
            </button>

            {/* Immersive Header */}
            <div className="premium-header-card">
                <div className="header-layout">
                    <div className="header-left">
                        <div className="company-logo-lg">
                            {job.companyName.charAt(0)}
                        </div>
                        <div className="header-titles">
                            <h2>{job.role}</h2>
                            <h3>{job.companyName}</h3>
                            <div className="header-meta-tags">
                                <span className="meta-tag"><i className="fas fa-rupee-sign"></i> {job.package}</span>
                                <span className="meta-tag"><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className={`large-status ${job.eligibility.isEligible ? 'status-green' : 'status-red'}`}>
                            {job.eligibility.isEligible ? (
                                <><i className="fas fa-check-circle"></i> Profile Matches</>
                            ) : (
                                <><i className="fas fa-exclamation-triangle"></i> Profile Mismatch</>
                            )}
                        </div>
                        
                        {applicationStatus ? (
                            <button className="premium-btn success-btn" disabled>
                                <i className="fas fa-check"></i> Applied Successfully
                            </button>
                        ) : (
                            <button 
                                className="premium-btn primary-btn" 
                                disabled={!job.eligibility.isEligible || isApplying}
                                onClick={handleApply}
                            >
                                {isApplying ? (
                                    <><i className="fas fa-spinner fa-spin"></i> Processing...</>
                                ) : (
                                    'Apply for this position'
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Split */}
            <div className="premium-details-split">
                {/* Left Column: Job Description & Skills */}
                <div className="details-col-main">
                    <div className="premium-content-card">
                        <h3 className="card-title">About the Role</h3>
                        <div className="card-text">
                            <p>{job.description}</p>
                            <p>We are looking for passionate individuals who can contribute to our growing team and work on cutting-edge technologies. The ideal candidate will have strong problem-solving skills and a solid understanding of software development principles.</p>
                        </div>
                    </div>

                    <div className="premium-content-card">
                        <h3 className="card-title">Required Technical Skills</h3>
                        <div className="premium-skills-row">
                            {job.requiredSkills.map((skill, index) => {
                                const hasSkill = userSkills.includes(skill);
                                return (
                                    <div key={index} className={`advanced-skill-chip ${hasSkill ? 'has' : 'missing'}`}>
                                        <div className="icon-box">
                                            {hasSkill ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
                                        </div>
                                        <span>{skill}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {skillGap.length > 0 && (
                        <div className="premium-content-card highlight-card">
                            <div className="highlight-header">
                                <div className="icon-circle"><i className="fas fa-lightbulb"></i></div>
                                <div>
                                    <h3 className="card-title m-0">Recommended Learning</h3>
                                    <p className="card-subtitle">Bridge your skill gap to improve your chances</p>
                                </div>
                            </div>
                            <div className="learning-resources">
                                {recommendations.map((rec, idx) => (
                                    <a key={idx} href={rec.resource} target="_blank" rel="noopener noreferrer" className="resource-card">
                                        <div className="resource-icon"><i className="fab fa-coursera"></i></div>
                                        <div className="resource-info">
                                            <h4>{rec.skill} Masterclass</h4>
                                            <span>Find courses on Coursera</span>
                                        </div>
                                        <i className="fas fa-external-link-alt external-icon"></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Eligibility Checklist */}
                <div className="details-col-side">
                    <div className="premium-content-card sticky-card">
                        <h3 className="card-title">Eligibility Criteria</h3>
                        <p className="card-subtitle mb-4">How your profile compares to requirements</p>
                        
                        <div className="premium-checklist">
                            {Object.entries(job.eligibility.matrix).map(([key, data]) => {
                                const [reqParts, actParts] = data.label.split('|');
                                const reqText = reqParts.split(':')[1]?.trim() || reqParts;
                                const actText = actParts.split(':')[1]?.trim() || actParts;
                                const title = reqParts.split(':')[0]?.trim();

                                return (
                                    <div key={key} className={`check-item ${data.pass ? 'pass' : 'fail'}`}>
                                        <div className="check-icon">
                                            {data.pass ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
                                        </div>
                                        <div className="check-content">
                                            <div className="check-title">{title}</div>
                                            <div className="check-details">
                                                <span className="req">Req: <b>{reqText}</b></span>
                                                <span className="sep">•</span>
                                                <span className="act">Actual: <b>{actText}</b></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        
                        {!job.eligibility.isEligible && (
                            <div className="eligibility-warning">
                                <i className="fas fa-info-circle"></i>
                                You must meet all criteria to apply. Focus on the red items above.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobEligibilityDetails;
