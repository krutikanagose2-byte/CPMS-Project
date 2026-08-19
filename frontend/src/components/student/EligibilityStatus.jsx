import React from 'react';

const EligibilityStatus = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Eligibility Status</h2>
                    <p>Check your eligibility for companies based on your profile.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header">
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <select className="t-action-btn" style={{ background: '#f8fafc', color: 'var(--text-dark)', border: '1px solid var(--border-color)' }}>
                            <option>All Companies</option>
                            <option>Eligible Only</option>
                        </select>
                    </div>
                </div>
                
                <table className="t-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Eligibility Criteria</th>
                            <th>Status</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>TCS</strong></td>
                            <td>CGPA ≥ 7.0<br/>No Active Backlogs</td>
                            <td><span className="t-status eligible">Eligible</span></td>
                            <td><span className="text-muted text-xs">You meet all the criteria</span></td>
                        </tr>
                        <tr>
                            <td><strong>Infosys</strong></td>
                            <td>CGPA ≥ 6.5<br/>60% in 10th, 12th, Diploma</td>
                            <td><span className="t-status eligible">Eligible</span></td>
                            <td><span className="text-muted text-xs">You meet all the criteria</span></td>
                        </tr>
                        <tr>
                            <td><strong>Capgemini</strong></td>
                            <td>CGPA ≥ 6.0<br/>No Active Backlogs</td>
                            <td><span className="t-status eligible">Eligible</span></td>
                            <td><span className="text-muted text-xs">You meet all the criteria</span></td>
                        </tr>
                        <tr>
                            <td><strong>Wipro</strong></td>
                            <td>CGPA ≥ 6.0<br/>60% in 10th, 12th, Diploma</td>
                            <td><span className="t-status eligible">Eligible</span></td>
                            <td><span className="text-muted text-xs">You meet all the criteria</span></td>
                        </tr>
                        <tr>
                            <td><strong>Accenture</strong></td>
                            <td>CGPA ≥ 7.0<br/>No Active Backlogs</td>
                            <td><span className="t-status not-eligible">Not Eligible</span></td>
                            <td><span className="text-muted text-xs text-red">CGPA is less than 7.0</span></td>
                        </tr>
                        <tr>
                            <td><strong>Cognizant</strong></td>
                            <td>CGPA ≥ 6.0<br/>No Active Backlogs</td>
                            <td><span className="t-status eligible">Eligible</span></td>
                            <td><span className="text-muted text-xs">You meet all the criteria</span></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ padding: '16px 20px', background: '#f8fafc', fontSize: '11px', color: 'var(--primary)', borderTop: '1px solid var(--border-color)' }}>
                    <i className="fas fa-info-circle"></i> Note: Eligibility is based on the latest criteria provided by companies.
                </div>
            </div>
        </div>
    );
};

export default EligibilityStatus;
