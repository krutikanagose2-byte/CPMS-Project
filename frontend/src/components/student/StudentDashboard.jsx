import React, { useState } from 'react';
import './StudentDashboard.css';
import StudentOverview from './StudentOverview';
import StudentProfile from './StudentProfile';
import EligibilityStatus from './EligibilityStatus';
import StudentApplications from './StudentApplications';
import StudentStudyMaterials from './StudentStudyMaterials';
import MyDocuments from './MyDocuments';
import UserData from './UserData';
import PlacementStatistics from './PlacementStatistics';
import AdminControlPanel from './AdminControlPanel';
import UserMessages from './UserMessages';
import prmitrLogo from '../../assets/prmitrlogojpg.jpg';

const StudentDashboard = ({ 
    user, 
    onLogout, 
    onUpdateUser, 
    onBack,
    onOpenCompanies,
    onOpenPlacements,
    onOpenNoticeBoard
}) => {
    const isAdmin = user?.role === 'admin';
    const [activeTab, setActiveTab] = useState(isAdmin ? 'admin-control' : 'profile');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const studentNavItems = [
        { id: 'profile', icon: 'fas fa-user', label: 'My Profile' },
        { id: 'materials', icon: 'fas fa-book', label: 'Study Materials' },
        { id: 'documents', icon: 'fas fa-folder', label: 'My Documents' },
        { id: 'messages', icon: 'fas fa-comments', label: 'Help & Queries' },
        { id: 'statistics', icon: 'fas fa-chart-pie', label: 'Placement Statistics' },
    ];

    const adminNavItems = [
        { id: 'admin-control', icon: 'fas fa-shield-alt', label: 'Admin & Records' },
        { id: 'userdata', icon: 'fas fa-id-card', label: 'User Data' },
        { id: 'messages', icon: 'fas fa-comments', label: 'User Messages' },
        { id: 'profile', icon: 'fas fa-user', label: 'My Profile' },
        { id: 'materials', icon: 'fas fa-book', label: 'Study Materials' },
        { id: 'statistics', icon: 'fas fa-chart-pie', label: 'Placement Statistics' },
    ];

    const navItems = isAdmin ? adminNavItems : studentNavItems;

    const renderContent = () => {
        switch (activeTab) {
            case 'admin-control': return (
                <AdminControlPanel 
                    user={user} 
                    onBack={onBack} 
                    onNavigateTab={setActiveTab} 
                    onOpenCompanies={onOpenCompanies}
                    onOpenPlacements={onOpenPlacements}
                    onOpenNoticeBoard={onOpenNoticeBoard}
                />
            );
            case 'overview': return <StudentOverview user={user} />;
            case 'profile': return <StudentProfile user={user} onUpdateUser={onUpdateUser} />;
            case 'eligibility': return <EligibilityStatus user={user} />;
            case 'applications': return <StudentApplications user={user} />;
            case 'materials': return <StudentStudyMaterials user={user} />;
            case 'documents': return <MyDocuments user={user} onUpdateUser={onUpdateUser} />;
            case 'userdata': return <UserData user={user} onUpdateUser={onUpdateUser} />;
            case 'messages': return <UserMessages user={user} />;
            case 'statistics': return <PlacementStatistics user={user} />;
            default: return isAdmin ? (
                <AdminControlPanel 
                    user={user} 
                    onBack={onBack} 
                    onNavigateTab={setActiveTab} 
                    onOpenCompanies={onOpenCompanies}
                    onOpenPlacements={onOpenPlacements}
                    onOpenNoticeBoard={onOpenNoticeBoard}
                />
            ) : <StudentOverview user={user} />;
        }
    };

    return (
        <div className="new-dashboard-wrapper">
            {/* Sidebar */}
            <aside className={`new-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="new-sidebar-header">
                    <div className="new-logo-container">
                        <img src={prmitrLogo} alt="Logo" className="college-logo" />
                        {isSidebarOpen && (
                            <div className="college-text">
                                <h3>PRMIT&R, Badnera</h3>
                                <p>College Placement Management System</p>
                                {isAdmin && (
                                    <span style={{
                                        display: 'inline-block',
                                        backgroundColor: '#ef4444',
                                        color: '#ffffff',
                                        fontSize: '0.62rem',
                                        fontWeight: 800,
                                        letterSpacing: '0.6px',
                                        padding: '1px 6px',
                                        borderRadius: '4px',
                                        marginTop: '3px'
                                    }}>ADMIN PORTAL</span>
                                )}
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
                    <button className="new-nav-item" onClick={onBack} title="Go to Home">
                        <i className="fas fa-arrow-left"></i>
                        {isSidebarOpen && <span>Back to Home Page</span>}
                    </button>
                    <button className="new-nav-item" title="Help & Support" onClick={() => setActiveTab('messages')}>
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
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span className="new-user-name">{user?.name || (isAdmin ? 'Admin' : 'Student Name')}</span>
                                    {isAdmin && <span className="admin-tag-pill">ADMIN</span>}
                                </div>
                                <span className="new-user-role">{isAdmin ? (user?.branch || 'System Administrator') : (user?.branch || 'Branch & Year')}</span>
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
