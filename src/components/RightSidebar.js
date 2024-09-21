// src/components/RightSidebar.js
import React from 'react';
import TwitterEmbed from './TwitterEmbed';

const RightSidebar = () => {
  return (
    <div className="Sidebar">
      <div className="ContentSection">
        <h2>Community Updates</h2>
        <p>The autumn season awakens in Palia...</p>
      </div>
      <TwitterEmbed />
    </div>
  );
};

export default RightSidebar;
