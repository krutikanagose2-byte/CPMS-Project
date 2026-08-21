import React from 'react';
import './StudentOverview.css'; // We'll style it using the global t-card styles plus specific ones

const StudentOverview = ({ user }) => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Welcome, {user?.name || 'Shweta'}! <span role="img" aria-label="wave">👋</span></h2>
                    <p>Here's your placement overview and opportunities.</p>
                </div>
                <div className="date-display">
                    <i className="far fa-calendar-alt"></i> Today's Date: 17 May 2025
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="stats-row">
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-blue-light text-blue"><i className="fas fa-check-circle"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">My Eligibility</span>
                        <span className="stat-value text-green">Eligible</span>
                        <span className="stat-sub">You are eligible for 12 companies</span>
                    </div>
                </div>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-purple-light text-purple"><i className="fas fa-file-alt"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Applied Jobs</span>
                        <span className="stat-value">05</span>
                        <span className="stat-sub">Total Applied</span>
                    </div>
                </div>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-orange-light text-orange"><i className="fas fa-user-check"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Shortlisted</span>
                        <span className="stat-value">02</span>
                        <span className="stat-sub">Shortlisted</span>
                    </div>
                </div>

                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-green-light text-green"><i className="fas fa-medal"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Placement Status</span>
                        <span className="stat-value text-red">Not Placed</span>
                        <span className="stat-sub">Keep applying!</span>
                    </div>
                </div>
            </div>

            {/* Main Tables Row */}
            <div className="dashboard-grid">
                
                {/* Eligible Companies */}
                <div className="t-card span-2">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Eligible Companies for You</h3>
                        <a href="#" className="view-all-link">View All</a>
                    </div>
                    <table className="t-table">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Role</th>
                                <th>CTC Package</th>
                                <th>Eligibility</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TCS</td>
                                <td>Software Engineer</td>
                                <td>7.0 LPA</td>
                                <td><span className="t-status eligible">Eligible</span></td>
                                <td><button className="t-action-btn">View Details</button></td>
                            </tr>
                            <tr>
                                <td>Infosys</td>
                                <td>System Engineer</td>
                                <td>6.5 LPA</td>
                                <td><span className="t-status eligible">Eligible</span></td>
                                <td><button className="t-action-btn">View Details</button></td>
                            </tr>
                            <tr>
                                <td>Capgemini</td>
                                <td>Analyst</td>
                                <td>4.5 LPA</td>
                                <td><span className="t-status eligible">Eligible</span></td>
                                <td><button className="t-action-btn">View Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>



                {/* Application Status Chart */}
                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Application Status</h3>
                    </div>
                    <div className="chart-placeholder">
                        <div className="donut-chart">
                            <div className="donut-hole">
                                <h2>05</h2>
                                <span>Total</span>
                            </div>
                        </div>
                        <div className="chart-legend">
                            <div className="legend-item"><span className="dot bg-green"></span> Applied: 05</div>
                            <div className="legend-item"><span className="dot bg-blue"></span> Shortlisted: 02</div>
                            <div className="legend-item"><span className="dot bg-yellow"></span> In Process: 01</div>
                            <div className="legend-item"><span className="dot bg-red"></span> Rejected: 01</div>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="t-card span-2">
                    <div className="t-card-header no-border">
                        <h3 className="t-card-title">Quick Links</h3>
                    </div>
                    <div className="quick-links-grid">
                        <button className="ql-btn"><i className="fas fa-user"></i> My Profile</button>
                        <button className="ql-btn"><i className="fas fa-file-alt"></i> My Applications</button>
                        <button className="ql-btn"><i className="fas fa-book"></i> Study Materials</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StudentOverview;
