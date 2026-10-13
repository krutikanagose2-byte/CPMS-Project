import React from 'react';
import GroupDiscussionModule from '../Common/GroupDiscussionModule';

const GDCaseStudy = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <GroupDiscussionModule company={company} title="GD / Case Study" />
      </div>
    </div>
  );
};

export default GDCaseStudy;
