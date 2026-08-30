import React from 'react';

export default function GrainOverlay() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none z-[-1] opacity-20"
        style={{
          background: '#ffffff',
          filter: 'url(#grain)',
        }}
      />
      <svg className="absolute w-0 h-0">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </>
  );
}