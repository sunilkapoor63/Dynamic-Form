import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ progress }) => {
  const clampedProgress = Math.min(progress, 100); // Clamp progress to a maximum of 100%

  return (
    <div>
      <p>Progress: {clampedProgress}%</p>
      <div style={{ width: `${clampedProgress}%`, height: '10px', background: '#65d83e' }}></div>
    </div>
  );
};

export default ProgressBar;
