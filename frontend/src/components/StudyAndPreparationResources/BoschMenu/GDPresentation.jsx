import React from 'react';
import GroupDiscussionModule from '../Common/GroupDiscussionModule';

const GDPresentation = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <GroupDiscussionModule company={company} title="Group Discussion(GD)" />
      </div>
    </div>
  );
};

export default GDPresentation;
