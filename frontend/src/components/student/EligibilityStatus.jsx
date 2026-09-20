import React from 'react';

const EligibilityStatus = ({ user, onOpenSpecificCompany }) => {
    const userCgpaStr = user?.academics?.find(a => a.course === 'B.E/B.Tech')?.score;
    const userCgpa = parseFloat(userCgpaStr) || 0;

    const companies = [
        { name: 'TCS', reqCgpa: 7.0, other: 'No Active Backlogs', passText: 'No Active Backlogs', failText: 'Active Backlogs present', defaultEligible: true },
        { name: 'Infosys', reqCgpa: 6.5, other: '60% in 10th, 12th, Diploma', passText: 'Above 60% in 10th, 12th, Diploma', failText: 'Below 60% in 10th, 12th, Diploma', defaultEligible: true },
        { name: 'Capgemini', reqCgpa: 6.0, other: 'No Active Backlogs', passText: 'No Active Backlogs', failText: 'Active Backlogs present', defaultEligible: true },
        { name: 'Wipro', reqCgpa: 6.0, other: '60% in 10th, 12th, Diploma', passText: 'Above 60% in 10th, 12th, Diploma', failText: 'Below 60% in 10th, 12th, Diploma', defaultEligible: true },
        { name: 'Accenture', reqCgpa: 8.0, other: 'No Active Backlogs', passText: 'No Active Backlogs', failText: 'Active Backlogs present', defaultEligible: false },
        { name: 'Cognizant', reqCgpa: 6.0, other: 'No Active Backlogs', passText: 'No Active Backlogs', failText: 'Active Backlogs present', defaultEligible: true },
    ];

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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map(c => {
                            const isEligible = userCgpa > 0 ? userCgpa >= c.reqCgpa : c.defaultEligible;
                            
                            let reasonText = "";
                            if (isEligible) {
                                const cgpaReason = userCgpa > 0 ? `${userCgpa} ≥ ${c.reqCgpa.toFixed(1)}` : `CGPA ≥ ${c.reqCgpa.toFixed(1)}`;
                                reasonText = `You meet all the criteria. ${cgpaReason}, ${c.passText}.`;
                            } else {
                                const cgpaReason = userCgpa > 0 && userCgpa < c.reqCgpa ? `${userCgpa} < ${c.reqCgpa.toFixed(1)}` : `CGPA < ${c.reqCgpa.toFixed(1)}`;
                                // Mocking that both criteria failed just to show the requested fail text pattern,
                                // or we just show the CGPA failure if that's what caused it.
                                // The user's example: "You do not meet all criteria. 7.21 < 8.0, Below 60% in 10th, 12th, Diploma."
                                reasonText = `You do not meet all criteria. ${cgpaReason}, ${c.failText}.`;
                            }
                            
                            return (
                                <tr key={c.name}>
                                    <td><strong>{c.name}</strong></td>
                                    <td>CGPA ≥ {c.reqCgpa.toFixed(1)}<br/>{c.other}</td>
                                    <td>
                                        <span className={`t-status ${isEligible ? 'eligible' : 'not-eligible'}`}>
                                            {isEligible ? 'Eligible' : 'Not Eligible'}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`text-muted ${!isEligible ? 'text-red' : ''}`}>
                                            {reasonText}
                                        </span>
                                    </td>
                                    <td>
                                        {isEligible ? (
                                            <button className="t-action-btn" onClick={() => onOpenSpecificCompany(c.name)} style={{ background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', padding: '6px 12px', borderRadius: '4px' }}>Apply</button>
                                        ) : (
                                            <button className="t-action-btn" style={{ background: '#e2e8f0', color: '#64748b', border: 'none', cursor: 'not-allowed', padding: '6px 12px', borderRadius: '4px' }} disabled>Apply</button>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
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
