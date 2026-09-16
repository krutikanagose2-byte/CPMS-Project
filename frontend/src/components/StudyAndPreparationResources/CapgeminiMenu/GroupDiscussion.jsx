import React from 'react';

const GroupDiscussion = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-aptitude-header">
        <h1 className="csr-page-title">Group Discussion</h1>
      </div>
      <div className="csr-content-card" style={{ marginTop: '24px' }}>
        <h2 className="csr-section-title">GD Tips & Topics</h2>
        <p className="csr-paragraph">
          The Group Discussion (GD) round at {company.name} is primarily conducted to assess your communication skills, teamwork, and thought clarity. Note that this round is only conducted for selected roles or specific recruitment drives.
        </p>
        <p style={{ fontWeight: 'bold', margin: '16px 0 8px 0' }}>Frequently asked GD Topics:</p>
        <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
          <li>Impact of AI on Jobs</li>
          <li>Work from Home vs Office Work</li>
          <li>Is Social Media a boon or a bane?</li>
          <li>Cashless Economy: Pros and Cons</li>
        </ul>
      </div>
    </div>
  );
};

export default GroupDiscussion;
