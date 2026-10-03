import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PlacementStatistics = () => {
    // Aggregated placement statistics for various companies
    const companyStats = [
        { name: 'TCS', applied: 850, aptitude: 620, interview: 380, offers: 210, logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
        { name: 'Cognizant', applied: 780, aptitude: 540, interview: 290, offers: 175, logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
        { name: 'Infosys', applied: 810, aptitude: 590, interview: 320, offers: 190, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'Wipro', applied: 720, aptitude: 480, interview: 250, offers: 140, logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
        { name: 'Accenture', applied: 840, aptitude: 610, interview: 340, offers: 205, logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
        { name: 'Capgemini', applied: 760, aptitude: 520, interview: 280, offers: 160, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
        { name: 'Deloitte', applied: 450, aptitude: 280, interview: 140, offers: 85, logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
        { name: 'KPMG', applied: 390, aptitude: 220, interview: 110, offers: 65, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg' },
    ];

    const totalApplied = companyStats.reduce((acc, curr) => acc + curr.applied, 0);
    const totalOffers = companyStats.reduce((acc, curr) => acc + curr.offers, 0);
    
    // Sort by offers descending
    const sortedStats = [...companyStats].sort((a, b) => b.offers - a.offers);

    const upcomingDrives = 3;
    const placementPercentage = Math.round((totalOffers / totalApplied) * 100);
    const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#d0ed57'];

    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Overall Placement Statistics</h2>
                    <p>Track college-wide placement progress across major companies.</p>
                </div>
            </div>

            <div className="stats-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-orange-light text-orange"><i className="fas fa-building"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Total Companies</span>
                        <span className="stat-value">{companyStats.length}</span>
                    </div>
                </div>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-green-light text-green"><i className="fas fa-user-graduate"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Total Students Placed</span>
                        <span className="stat-value">{totalOffers}</span>
                    </div>
                </div>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-blue-light text-blue"><i className="fas fa-chart-pie"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Placement Percentage</span>
                        <span className="stat-value">{placementPercentage}%</span>
                    </div>
                </div>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-purple-light text-purple"><i className="fas fa-calendar-alt"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Upcoming Drives</span>
                        <span className="stat-value">{upcomingDrives}</span>
                    </div>
                </div>
            </div>

            <div className="stats-row" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '24px' }}>
                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Placement by Company (Offers vs Applied)</h3>
                    </div>
                    <div style={{ height: '300px', width: '100%', padding: '16px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={sortedStats} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                                <RechartsTooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                                <Legend iconType="circle" wrapperStyle={{paddingTop: '20px', fontSize: '13px'}} />
                                <Bar dataKey="applied" fill="#94a3b8" name="Applied" radius={[4, 4, 0, 0]} barSize={20} />
                                <Bar dataKey="offers" fill="#3b82f6" name="Offers" radius={[4, 4, 0, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Offers Distribution</h3>
                    </div>
                    <div style={{ height: '300px', width: '100%', padding: '16px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={sortedStats}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="offers"
                                    stroke="none"
                                >
                                    {sortedStats.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                    ))}
                                </Pie>
                                <RechartsTooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="t-card" style={{ marginTop: '24px' }}>
                <div className="t-card-header">
                    <h3 className="t-card-title">Company-wise Placement Data</h3>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Company</th>
                                <th style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', textAlign: 'center' }}>Applied</th>
                                <th style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', textAlign: 'center' }}>Cleared Aptitude</th>
                                <th style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', textAlign: 'center' }}>Reached Interview</th>
                                <th style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', textAlign: 'center' }}>Offers Received</th>
                                <th style={{ padding: '16px 24px', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', textAlign: 'center' }}>Success Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedStats.map((company, index) => (
                                <tr key={index} style={{ transition: 'background-color 0.2s', ':hover': { backgroundColor: '#f8fafc' } }}>
                                    <td style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '4px' }}>
                                                <img src={company.logo} alt={company.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '🏢' }} />
                                            </div>
                                            <strong style={{ color: '#0f172a', fontSize: '14px', fontWeight: '600' }}>{company.name}</strong>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9', textAlign: 'center', color: '#475569', fontSize: '14px' }}>{company.applied}</td>
                                    <td style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9', textAlign: 'center', color: '#475569', fontSize: '14px' }}>{company.aptitude}</td>
                                    <td style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9', textAlign: 'center', color: '#475569', fontSize: '14px' }}>{company.interview}</td>
                                    <td style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9', textAlign: 'center', color: '#16a34a', fontSize: '14px', fontWeight: '600' }}>{company.offers}</td>
                                    <td style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9', textAlign: 'center' }}>
                                        <span style={{ background: '#dcfce7', color: '#16a34a', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'inline-block' }}>
                                            {Math.round((company.offers / company.applied) * 100)}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--primary)', marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <i className="fas fa-info-circle"></i> <span>Data represents overall college placement statistics for the current academic year.</span>
            </div>
        </div>
    );
};

export default PlacementStatistics;
