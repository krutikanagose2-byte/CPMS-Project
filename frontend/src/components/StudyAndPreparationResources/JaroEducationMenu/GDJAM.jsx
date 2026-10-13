import React from 'react';
import GroupDiscussionModule from '../Common/GroupDiscussionModule';

const GDJAM = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <GroupDiscussionModule company={company} title="GD/JAM - Group Discussion" />
      </div>
    </div>
  );
};

export default GDJAM;
