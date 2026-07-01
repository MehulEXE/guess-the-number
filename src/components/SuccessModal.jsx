import React, { useEffect } from 'react';
import { audio } from '../utils/audio';

export default function SuccessModal({ targetNumber, attempts, onRestart }) {
  // Play success sound on mount
  useEffect(() => {
    audio.playSuccess();
  }, []);

  // Generate 40 random confetti pieces with random positions, colors, and animations
  const colors = ['#8b5cf6', '#d946ef', '#0ea5e9', '#10b981', '#f97316', '#eab308'];
  const confettiPieces = Array.from({ length: 40 }).map((_, i) => {
    const left = Math.random() * 100; // random percentage
    const delay = Math.random() * 3; // random delay up to 3s
    const duration = 2 + Math.random() * 2; // random duration 2-4s
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 6 + Math.random() * 8; // size 6-14px

    return (
      <div
        key={i}
        className="confetti-piece"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${Math.random() * 360}deg)`
        }}
      />
    );
  });

  return (
    <div className="modal-overlay">
      {/* Pure CSS Confetti */}
      <div className="confetti-container">
        {confettiPieces}
      </div>

      <div className="modal-content">
        <div className="success-badge">🎉</div>
        <h2 style={{ fontSize: '2rem', margin: '0 0 10px 0', color: '#fff' }}>
          Congratulations!
        </h2>
        <p style={{ color: '#8e92b2', margin: '0 0 20px 0' }}>
          You guessed the secret number
        </p>
        
        <div className="success-number">{targetNumber}</div>

        <div className="attempt-count">
          It took you <span>{attempts}</span> {attempts === 1 ? 'attempt' : 'attempts'}!
        </div>

        <button 
          onClick={() => {
            audio.playClick();
            onRestart();
          }} 
          className="btn" 
          style={{ width: '100%', padding: '16px' }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
