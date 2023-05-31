import React from 'react';

function EnvironmentDisplay(props) {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV
  return (
      <div style={{marginBottom: 20}}>
        <span>Environment: </span>
        <strong>{env || 'Local'}</strong>
      </div>
  );
}

export default EnvironmentDisplay;
