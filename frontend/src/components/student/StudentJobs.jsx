import React from 'react';

const StudentJobs = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Job Opportunities</h2>
                    <p>Explore and apply for the latest job openings.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header" style={{ padding: '20px', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
                        <div style={{ position: 'relative', flex: 1, maxWidth: '300px' }}>
                            <i className="fas fa-search" style={{ position: 'absolute', left: '12px', top: '10px', color: '#94a3b8' }}></i>
                            <input 
                                type="text" 
                                placeholder="Search by company or role" 
                                style={{ width: '100%', padding: '8px 12px 8px 36px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '13px' }} 
                            />
                        </div>
                        <select style={{ padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '13px', background: 'white' }}>
                            <option>All Roles</option>
                            <option>Software Engineer</option>
                            <option>Analyst</option>
                        </select>
                        <select style={{ padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '13px', background: 'white' }}>
                            <option>All Locations</option>
                            <option>Pan India</option>
                            <option>Pune</option>
                        </select>
                    </div>
                </div>

                <table className="t-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Role</th>
                            <th>CTC Package</th>
                            <th>Location</th>
                            <th>Drive Date</th>
                            <th>Last Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>TCS</strong></td>
                            <td>Software Engineer</td>
                            <td>7.0 LPA</td>
                            <td>Pan India</td>
                            <td>25 May 2025</td>
                            <td>20 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td><strong>Infosys</strong></td>
                            <td>System Engineer</td>
                            <td>6.5 LPA</td>
                            <td>Mysore</td>
                            <td>29 May 2025</td>
                            <td>22 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td><strong>Capgemini</strong></td>
                            <td>Analyst</td>
                            <td>4.5 LPA</td>
                            <td>Pune</td>
                            <td>02 Jun 2025</td>
                            <td>25 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td><strong>Wipro</strong></td>
                            <td>Project Engineer</td>
                            <td>4.0 LPA</td>
                            <td>Hyderabad</td>
                            <td>05 Jun 2025</td>
                            <td>30 May 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                        <tr>
                            <td><strong>Persistent Systems</strong></td>
                            <td>Software Engineer</td>
                            <td>6.0 LPA</td>
                            <td>Bangalore</td>
                            <td>10 Jun 2025</td>
                            <td>07 Jun 2025</td>
                            <td><button className="t-action-btn">View Details</button></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '16px', gap: '8px', borderTop: '1px solid var(--border-color)' }}>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}><i className="fas fa-chevron-left"></i></button>
                    <button style={{ border: 'none', background: 'var(--primary)', color: 'white', borderRadius: '4px', padding: '4px 10px', fontSize: '12px' }}>1</button>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--text-dark)', cursor: 'pointer', fontSize: '12px' }}>2</button>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--text-dark)', cursor: 'pointer', fontSize: '12px' }}>3</button>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--text-dark)', cursor: 'pointer', fontSize: '12px' }}>4</button>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--primary)', marginTop: '20px' }}>
                <i className="fas fa-star"></i> Stay consistent, keep learning, and grab the best opportunities! All the best! <i className="fas fa-star"></i>
            </div>
        </div>
    );
};

export default StudentJobs;
