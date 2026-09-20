import React, { useState, useEffect } from 'react';
import './StudentProfile.css';

const StudentProfile = ({ user, onUpdateUser }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [formData, setFormData] = useState({
        dob: user?.dob || '',
        gender: user?.gender || '',
        address: user?.address || '',
        email: user?.email || '',
        branch: user?.branch || '',
        linkedin: user?.linkedin || '',
        github: user?.github || '',
        academics: user?.academics || [
            { id: 1, course: 'B.E/B.Tech', institute: '', board: '', score: '', year: '' },
            { id: 2, course: 'Diploma', institute: '', board: '', score: '', year: '' },
            { id: 3, course: '12th (HSC)', institute: '', board: '', score: '', year: '' },
            { id: 4, course: '10th (SSC)', institute: '', board: '', score: '', year: '' },
        ],
        skills: user?.skills || [],
        resume: user?.resume || { name: '', date: '', url: '#' },
        photoUrl: user?.photoUrl || '',
        signatureUrl: user?.signatureUrl || ''
    });

    const [newSkill, setNewSkill] = useState('');

    useEffect(() => {
        if (user) {
            setFormData({
                dob: user?.dob || '',
                gender: user?.gender || '',
                address: user?.address || '',
                email: user?.email || '',
                branch: user?.branch || '',
                linkedin: user?.linkedin || '',
                github: user?.github || '',
                academics: user?.academics || [
                    { id: 1, course: 'B.E/B.Tech', institute: '', board: '', score: '', year: '' },
                    { id: 2, course: 'Diploma', institute: '', board: '', score: '', year: '' },
                    { id: 3, course: '12th (HSC)', institute: '', board: '', score: '', year: '' },
                    { id: 4, course: '10th (SSC)', institute: '', board: '', score: '', year: '' },
                ],
                skills: user?.skills || [],
                resume: user?.resume || { name: '', date: '', url: user?.resumeUrl || '#' },
                resumeUrl: user?.resumeUrl || (user?.resume?.url && user?.resume?.url !== '#' ? user?.resume?.url : ''),
                photoUrl: user?.photoUrl || '',
                signatureUrl: user?.signatureUrl || ''
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAcademicChange = (index, field, value) => {
        const updatedAcademics = [...formData.academics];
        updatedAcademics[index][field] = value;
        setFormData(prev => ({ ...prev, academics: updatedAcademics }));
    };

    const handleAddSkill = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();
            if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
                setFormData(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
                setNewSkill('');
            }
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skillToRemove) }));
    };

    const saveProfileData = async (dataToSave, showSuccessAlert = true) => {
        try {
            const userId = user?._id || user?.id;
            if (userId) {
                const response = await fetch(`http://localhost:5000/api/student/profile/${userId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dataToSave)
                });
                
                if (response.ok) {
                    const updatedUser = await response.json();
                    if (onUpdateUser) {
                        onUpdateUser(updatedUser);
                    }
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    setIsEditing(false);
                    if (showSuccessAlert) alert("Profile updated successfully!");
                    return true;
                } else {
                    const errData = await response.json();
                    alert(`Failed to save profile: ${errData.message}`);
                    return false;
                }
            } else {
                // If user is not logged in / ID not found
                setIsEditing(false);
                if (onUpdateUser) onUpdateUser({ ...user, ...dataToSave });
                return true;
            }
        } catch (error) {
            console.error("Error saving profile:", error);
            alert("Error connecting to server. Is it running?");
            return false;
        }
    };

    const handleSave = () => saveProfileData(formData, true);

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result;
                const newResume = {
                    name: file.name,
                    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                    url: base64
                };
                
                setFormData(prev => {
                    const newData = {
                        ...prev,
                        resumeUrl: base64,
                        resume: newResume
                    };
                    
                    if (!isEditing) {
                        saveProfileData(newData, false).then(success => {
                            if(success) alert("Resume uploaded successfully!");
                        });
                    }
                    
                    return newData;
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, photoUrl: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSignatureUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, signatureUrl: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Ideally reset form to original props here
    };

    return (
        <div className="new-profile-container">
            {/* Left Column */}
            <div className="profile-left-col">
                <div className="t-card profile-summary-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Profile Overview</h3>
                    </div>
                    <div className="summary-body">
                        <div className="avatar-large" style={{ overflow: 'hidden' }}>
                            {formData.photoUrl ? (
                                <img src={formData.photoUrl} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                user?.name ? user.name.substring(0, 2).toUpperCase() : 'S'
                            )}
                        </div>
                        <h2>{user?.name || 'Student Name'}</h2>
                        <p className="role-text">{formData.branch}</p>

                        <div className="contact-list">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>{formData.email}</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+91 91234567890</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{formData.address}</span>
                            </div>
                        </div>

                        {!isEditing ? (
                            <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
                        ) : (
                            <div className="edit-actions">
                                <button className="edit-profile-btn save-btn" onClick={handleSave}>Save Changes</button>
                                <button className="edit-profile-btn cancel-btn" onClick={handleCancel}>Cancel</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="profile-right-col">

                {/* Personal Details */}
                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Personal Details</h3>
                    </div>
                    <div className="details-grid">
                        <div className="detail-item">
                            <span className="d-label">Email</span>
                            {isEditing ? (
                                <input type="email" name="email" className="edit-input" value={formData.email} onChange={handleInputChange} />
                            ) : (
                                <span className="d-value">{formData.email}</span>
                            )}
                        </div>
                        <div className="detail-item">
                            <span className="d-label">Branch & Year</span>
                            {isEditing ? (
                                <input type="text" name="branch" className="edit-input" value={formData.branch} onChange={handleInputChange} />
                            ) : (
                                <span className="d-value">{formData.branch}</span>
                            )}
                        </div>
                        <div className="detail-item">
                            <span className="d-label">Date of Birth</span>
                            {isEditing ? (
                                <input type="date" name="dob" className="edit-input" value={formData.dob} onChange={handleInputChange} />
                            ) : (
                                <span className="d-value">{formData.dob}</span>
                            )}
                        </div>
                        <div className="detail-item">
                            <span className="d-label">Gender</span>
                            {isEditing ? (
                                <select name="gender" className="edit-input" value={formData.gender} onChange={handleInputChange}>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                </select>
                            ) : (
                                <span className="d-value">{formData.gender}</span>
                            )}
                        </div>
                        <div className="detail-item">
                            <span className="d-label">Address</span>
                            {isEditing ? (
                                <input type="text" name="address" className="edit-input" value={formData.address} onChange={handleInputChange} />
                            ) : (
                                <span className="d-value">{formData.address}</span>
                            )}
                        </div>
                        <div className="detail-item">
                            <span className="d-label">LinkedIn</span>
                            {isEditing ? (
                                <input type="text" name="linkedin" className="edit-input" value={formData.linkedin} onChange={handleInputChange} />
                            ) : (
                                <a href={`https://${formData.linkedin}`} target="_blank" rel="noopener noreferrer" className="d-link">{formData.linkedin}</a>
                            )}
                        </div>
                        <div className="detail-item">
                            <span className="d-label">GitHub</span>
                            {isEditing ? (
                                <input type="text" name="github" className="edit-input" value={formData.github} onChange={handleInputChange} />
                            ) : (
                                formData.github ? <a href={`https://${formData.github}`} target="_blank" rel="noopener noreferrer" className="d-link">{formData.github}</a> : <span className="d-value">-</span>
                            )}
                        </div>
                        <div className="detail-item" style={{ gridColumn: '1 / -1' }}>
                            <span className="d-label">Photo</span>
                            {isEditing ? (
                                <div className="resume-upload-wrapper" style={{ marginTop: '8px' }}>
                                    <input type="file" id="photo-upload-detail" className="resume-file-input" accept="image/*" onChange={handlePhotoUpload} />
                                    <label htmlFor="photo-upload-detail" className="t-action-btn upload-label">
                                        <i className="fas fa-upload"></i> Upload Photo
                                    </label>
                                </div>
                            ) : (
                                formData.photoUrl ? (
                                    <img src={formData.photoUrl} alt="Photo" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', marginTop: '8px' }} />
                                ) : <span className="d-value">No photo uploaded</span>
                            )}
                        </div>
                        <div className="detail-item" style={{ gridColumn: '1 / -1' }}>
                            <span className="d-label">Signature</span>
                            {isEditing ? (
                                <div className="resume-upload-wrapper" style={{ marginTop: '8px' }}>
                                    <input type="file" id="signature-upload" className="resume-file-input" accept="image/*" onChange={handleSignatureUpload} />
                                    <label htmlFor="signature-upload" className="t-action-btn upload-label">
                                        <i className="fas fa-upload"></i> Upload Signature
                                    </label>
                                </div>
                            ) : (
                                formData.signatureUrl ? (
                                    <img src={formData.signatureUrl} alt="Signature" style={{ width: 'auto', maxWidth: '200px', height: '40px', objectFit: 'contain', borderRadius: '4px', marginTop: '8px' }} />
                                ) : <span className="d-value">No signature uploaded</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Academic Details (Table) */}
                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Academic Details</h3>
                    </div>
                    <div className="table-responsive">
                        <table className="t-table">
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Institute</th>
                                    <th>University/Board</th>
                                    <th>CGPA / %</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formData.academics.map((academic, index) => (
                                    <tr key={academic.id}>
                                        <td>
                                            {isEditing ?
                                                <input type="text" className="edit-input small-input" value={academic.course} onChange={(e) => handleAcademicChange(index, 'course', e.target.value)} />
                                                : academic.course
                                            }
                                        </td>
                                        <td>
                                            {isEditing ?
                                                <input type="text" className="edit-input small-input" value={academic.institute} onChange={(e) => handleAcademicChange(index, 'institute', e.target.value)} />
                                                : academic.institute
                                            }
                                        </td>
                                        <td>
                                            {isEditing ?
                                                <input type="text" className="edit-input small-input" value={academic.board} onChange={(e) => handleAcademicChange(index, 'board', e.target.value)} />
                                                : academic.board
                                            }
                                        </td>
                                        <td>
                                            {isEditing ?
                                                <input type="text" className="edit-input small-input" value={academic.score} onChange={(e) => handleAcademicChange(index, 'score', e.target.value)} />
                                                : academic.score
                                            }
                                        </td>
                                        <td>
                                            {isEditing ?
                                                <input type="text" className="edit-input small-input" value={academic.year} onChange={(e) => handleAcademicChange(index, 'year', e.target.value)} />
                                                : academic.year
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Skills */}
                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Skills</h3>
                    </div>
                    <div className="skills-content">
                        {isEditing && (
                            <div className="add-skill-wrapper">
                                <input
                                    type="text"
                                    className="edit-input"
                                    placeholder="Add a new skill (e.g., React)..."
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    onKeyDown={handleAddSkill}
                                />
                                <button className="add-skill-btn" onClick={handleAddSkill}>Add</button>
                            </div>
                        )}
                        <div className="skills-list">
                            {formData.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">
                                    {skill}
                                    {isEditing && (
                                        <button className="remove-skill-btn" onClick={() => handleRemoveSkill(skill)}>
                                            <i className="fas fa-times"></i>
                                        </button>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Resume */}
                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Resume</h3>
                    </div>
                    <div className="resume-viewer">
                        <div className="resume-icon">
                            <i className="fas fa-file-pdf text-red"></i>
                        </div>
                        <div className="resume-info">
                            <h4>{formData.resume?.name || 'No resume uploaded'}</h4>
                            <p>{formData.resume?.date ? `Uploaded on ${formData.resume.date}` : ''}</p>
                        </div>
                        <div className="resume-actions ml-auto">
                            {(!formData.resume?.url || formData.resume.url === '#' || formData.resume.url === '') ? (
                                <div className="resume-upload-wrapper">
                                    <input type="file" id="resume-upload" className="resume-file-input" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
                                    <label htmlFor="resume-upload" className="t-action-btn upload-label" style={{ cursor: 'pointer' }}>
                                        <i className="fas fa-upload"></i> Upload Resume
                                    </label>
                                </div>
                            ) : (
                                <>
                                    <button 
                                        className="t-action-btn view-btn" 
                                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)', cursor: 'pointer', padding: '6px 12px', borderRadius: '4px' }} 
                                        onClick={(e) => { 
                                            e.preventDefault();
                                            const url = formData.resume.url;
                                            if (!url || url === '#') {
                                                alert('Please upload a resume first.');
                                                return;
                                            }
                                            setShowResumeModal(true);
                                        }}
                                    >
                                        <i className="fas fa-eye"></i> View
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* Resume Modal */}
            {showResumeModal && formData.resume?.url && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 9999,
                    display: 'flex', flexDirection: 'column',
                    padding: '40px'
                }}>
                    <button 
                        onClick={() => setShowResumeModal(false)}
                        style={{
                            position: 'absolute', top: '20px', right: '30px',
                            background: 'transparent', border: 'none', color: 'white',
                            fontSize: '30px', cursor: 'pointer'
                        }}
                    >&times;</button>
                    
                    <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                        <iframe src={formData.resume.url} width="100%" height="100%" style={{ border: 'none' }} title="Resume"></iframe>
                        
                        <div style={{
                            position: 'absolute', bottom: '20px', right: '20px',
                            display: 'flex', gap: '10px'
                        }}>
                            <div className="resume-upload-wrapper" style={{ display: 'inline-block' }}>
                                <input type="file" id="resume-upload-modal" className="resume-file-input" accept=".pdf,.doc,.docx" onChange={(e) => {
                                    handleResumeUpload(e);
                                    setShowResumeModal(false);
                                }} />
                                <label htmlFor="resume-upload-modal" className="t-action-btn" style={{ 
                                    background: 'var(--primary)', color: 'white', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}>
                                    <i className="fas fa-edit"></i> Edit
                                </label>
                            </div>
                            <a 
                                href={formData.resume.url} 
                                download={formData.resume?.name || 'resume'} 
                                className="t-action-btn"
                                style={{ 
                                    background: 'var(--primary)', color: 'white', padding: '10px 15px', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                <i className="fas fa-download"></i> Download
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentProfile;
