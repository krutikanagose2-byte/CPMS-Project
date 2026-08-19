import React, { useState, useEffect } from 'react';
import './StudentNotifications.css';

const StudentNotifications = ({ user }) => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifs = async () => {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 500));
                
                const mockNotifs = [
                    {
                        _id: "n1",
                        type: "alert",
                        title: "Application Shortlisted!",
                        message: "Congratulations! Your application for Software Development Engineer at TechNova Solutions has been shortlisted. Please check your email for interview details.",
                        date: new Date().toISOString(),
                        read: false
                    },
                    {
                        _id: "n2",
                        type: "match",
                        title: "New Job Match: Cloud Architect",
                        message: "CloudPioneers just posted a role that strongly matches your skill profile (AWS, Docker). Apply now before the deadline!",
                        date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
                        read: false
                    },
                    {
                        _id: "n3",
                        type: "system",
                        title: "Profile Incomplete",
                        message: "Please upload your latest resume to complete your profile. Many companies use automated resume screening.",
                        date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
                        read: true
                    }
                ];
                setNotifications(mockNotifs);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching notifications", error);
                setLoading(false);
            }
        };

        fetchNotifs();
    }, [user]);

    const markAsRead = (id) => {
        setNotifications(notifications.map(n => 
            n._id === id ? { ...n, read: true } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    if (loading) return (
        <div className="std-notifs-container">
            {[1,2,3].map(i => <div key={i} className="notif-skeleton"></div>)}
        </div>
    );

    const getIconForType = (type) => {
        switch(type) {
            case 'alert': return <i className="fas fa-exclamation-circle text-orange"></i>;
            case 'match': return <i className="fas fa-star text-yellow"></i>;
            case 'system': return <i className="fas fa-info-circle text-blue"></i>;
            default: return <i className="fas fa-bell text-gray"></i>;
        }
    };

    return (
        <div className="std-notifs-container">
            <div className="notifs-header-row">
                <div>
                    <h2 className="std-section-title">Notifications</h2>
                    <p className="std-section-subtitle">Stay updated on your applications and new opportunities.</p>
                </div>
                <button className="mark-read-btn" onClick={markAllAsRead}>
                    <i className="fas fa-check-double"></i> Mark all as read
                </button>
            </div>

            <div className="premium-notifs-list">
                {notifications.length === 0 ? (
                    <div className="no-data-card">You're all caught up! No new notifications.</div>
                ) : (
                    notifications.map(notif => (
                        <div 
                            key={notif._id} 
                            className={`premium-notif-card ${!notif.read ? 'unread' : ''}`}
                            onClick={() => markAsRead(notif._id)}
                        >
                            {!notif.read && <div className="unread-dot"></div>}
                            
                            <div className="notif-icon-wrapper">
                                {getIconForType(notif.type)}
                            </div>
                            
                            <div className="notif-content">
                                <h3>{notif.title}</h3>
                                <p>{notif.message}</p>
                                <span className="notif-time">
                                    {new Date(notif.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default StudentNotifications;
