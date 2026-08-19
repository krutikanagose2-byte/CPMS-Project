import React, { useState } from 'react';
import './StudentDashboard.css';
import StudentOverview from './StudentOverview';
import StudentProfile from './StudentProfile';
import EligibilityStatus from './EligibilityStatus';
import StudentJobs from './StudentJobs';
import StudentApplications from './StudentApplications';
import StudentStudyMaterials from './StudentStudyMaterials';
import PlacementDrives from './PlacementDrives';
import Announcements from './Announcements';
import MyDocuments from './MyDocuments';
import PlacementStatistics from './PlacementStatistics';

const StudentDashboard = ({ user, onLogout, onUpdateUser }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const navItems = [
        { id: 'overview', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
        { id: 'profile', icon: 'fas fa-user', label: 'My Profile' },
        { id: 'eligibility', icon: 'fas fa-check-circle', label: 'Eligibility Status' },
        { id: 'jobs', icon: 'fas fa-briefcase', label: 'Job Opportunities' },
        { id: 'applications', icon: 'fas fa-file-alt', label: 'My Applications' },
        { id: 'materials', icon: 'fas fa-book', label: 'Study Materials' },
        { id: 'drives', icon: 'fas fa-building', label: 'Placement Drives' },
        { id: 'announcements', icon: 'fas fa-bullhorn', label: 'Announcements' },
        { id: 'documents', icon: 'fas fa-folder', label: 'My Documents' },
        { id: 'statistics', icon: 'fas fa-chart-pie', label: 'Placement Statistics' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'overview': return <StudentOverview user={user} />;
            case 'profile': return <StudentProfile user={user} onUpdateUser={onUpdateUser} />;
            case 'eligibility': return <EligibilityStatus user={user} />;
            case 'jobs': return <StudentJobs user={user} />;
            case 'applications': return <StudentApplications user={user} />;
            case 'materials': return <StudentStudyMaterials user={user} />;
            case 'drives': return <PlacementDrives user={user} />;
            case 'announcements': return <Announcements user={user} />;
            case 'documents': return <MyDocuments user={user} />;
            case 'statistics': return <PlacementStatistics user={user} />;
            default: return <StudentOverview user={user} />;
        }
    };

    return (
        <div className="new-dashboard-wrapper">
            {/* Sidebar */}
            <aside className={`new-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="new-sidebar-header">
                    <div className="new-logo-container">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/PRMIT%26R_Logo.jpg/220px-PRMIT%26R_Logo.jpg" alt="Logo" className="college-logo" />
                        {isSidebarOpen && (
                            <div className="college-text">
                                <h3>PRMIT&R, Badnera</h3>
                                <p>College Placement Management System</p>
                            </div>
                        )}
                    </div>
                    {isSidebarOpen && (
                        <button className="new-toggle-btn" onClick={() => setIsSidebarOpen(false)}>
                            <i className="fas fa-bars"></i>
                        </button>
                    )}
                </div>
                {!isSidebarOpen && (
                    <button className="new-toggle-btn-closed" onClick={() => setIsSidebarOpen(true)}>
                        <i className="fas fa-bars"></i>
                    </button>
                )}
                
                <nav className="new-sidebar-nav">
                    {navItems.map(item => (
                        <button 
                            key={item.id}
                            className={`new-nav-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                            title={item.label}
                        >
                            <i className={item.icon}></i>
                            {isSidebarOpen && <span>{item.label}</span>}
                        </button>
                    ))}
                </nav>
                
                <div className="new-sidebar-footer">
                    <button className="new-nav-item" title="Help & Support">
                        <i className="fas fa-question-circle"></i>
                        {isSidebarOpen && <span>Help & Support</span>}
                    </button>
                    <button className="new-nav-item logout-btn" onClick={onLogout} title="Logout">
                        <i className="fas fa-power-off"></i> 
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="new-main-area">
                <header className="new-top-header">
                    <div className="new-header-left">
                        {/* Mobile toggle logic can go here if needed */}
                    </div>
                    
                    <div className="new-header-right">
                        <button className="new-icon-btn">
                            <i className="fas fa-bell"></i>
                        </button>
                        <div className="new-user-profile">
                            <div className="new-user-avatar" style={{ overflow: 'hidden' }}>
                                {user?.photoUrl ? (
                                    <img src={user.photoUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    user?.name ? user.name.substring(0, 2).toUpperCase() : 'S'
                                )}
                            </div>
                            <div className="new-user-info">
                                <span className="new-user-name">{user?.name || 'Student Name'}</span>
                                <span className="new-user-role">{user?.branch || 'Branch & Year'}</span>
                            </div>
                            <i className="fas fa-chevron-down text-muted ml-2 text-xs"></i>
                        </div>
                    </div>
                </header>

                <div className="new-content-scroll">
                    <div className="new-content-inner">
                        {renderContent()}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
