import React from 'react';

export default function Stats({ attempts, bestScore, range }) {
  return (
    <div className="stats-container glass-card">
      <div className="stat-item">
        <span className="stat-label">Range</span>
        <span className="stat-value highlight">{range.min}–{range.max}</span>
      </div>
      
      <div className="stat-item">
        <span className="stat-label">Guesses</span>
        <span className="stat-value">{attempts}</span>
      </div>

      <div className="stat-item">
        <span className="stat-label">Best Record</span>
        <span className="stat-value">
          {bestScore === null ? '—' : `${bestScore} tries`}
        </span>
      </div>
    </div>
  );
}
