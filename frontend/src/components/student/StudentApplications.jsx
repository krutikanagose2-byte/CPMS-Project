import React from 'react';

const StudentApplications = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>My Applications</h2>
                    <p>Track the status of your job applications.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header" style={{ padding: '20px', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
                        <select style={{ padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '13px', background: 'white' }}>
                            <option>All Roles</option>
                            <option>Software Engineer</option>
                            <option>Analyst</option>
                        </select>
                        <select style={{ padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '13px', background: 'white' }}>
                            <option>All Status</option>
                            <option>Applied</option>
                            <option>Shortlisted</option>
                            <option>In Process</option>
                            <option>Rejected</option>
                        </select>
                        <div style={{ position: 'relative', flex: 1, maxWidth: '300px', marginLeft: 'auto', display: 'flex', gap: '12px' }}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <i className="fas fa-search" style={{ position: 'absolute', left: '12px', top: '10px', color: '#94a3b8' }}></i>
                                <input 
                                    type="text" 
                                    placeholder="Search application" 
                                    style={{ width: '100%', padding: '8px 12px 8px 36px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '13px' }} 
                                />
                            </div>
                            <button className="t-action-btn" style={{ background: 'var(--primary)', color: 'white' }}>Filter</button>
                        </div>
                    </div>
                </div>

                <table className="t-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Applied On</th>
                            <th>Status</th>
                            <th>Last Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>TCS</strong></td>
                            <td>Software Engineer</td>
                            <td>20 May 2025</td>
                            <td><span className="t-status eligible">Shortlisted</span></td>
                            <td>22 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td><strong>Infosys</strong></td>
                            <td>System Engineer</td>
                            <td>22 May 2025</td>
                            <td><span className="t-status pending" style={{ background: '#fef9c3', color: '#a16207' }}>Under Review</span></td>
                            <td>22 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td><strong>Capgemini</strong></td>
                            <td>Analyst</td>
                            <td>21 May 2025</td>
                            <td><span className="t-status pending" style={{ background: '#e0f2fe', color: '#0369a1' }}>In Process</span></td>
                            <td>24 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td><strong>Wipro</strong></td>
                            <td>Project Engineer</td>
                            <td>19 May 2025</td>
                            <td><span className="t-status eligible">Applied</span></td>
                            <td>19 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td><strong>Accenture</strong></td>
                            <td>ASE</td>
                            <td>15 May 2025</td>
                            <td><span className="t-status not-eligible">Rejected</span></td>
                            <td>18 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentApplications;
