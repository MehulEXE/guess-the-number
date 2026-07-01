import React from 'react';

export default function HistoryList({ history }) {
  return (
    <div className="glass-card history-card" style={{ height: '100%' }}>
      <h3 className="history-title">Guess History</h3>
      
      {history.length === 0 ? (
        <div className="history-placeholder">
          <p className="placeholder-text">💡 No guesses made yet.</p>
          <p className="placeholder-subtext">
            Start guessing to see your logs! The system will calculate how close you are to the secret target and give you visual indicators:
          </p>
          <div className="legend-list">
            <div className="legend-item">
              <span className="legend-color-dot" style={{ backgroundColor: 'var(--accent-red)' }} />
              <span>Too High (Red)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color-dot" style={{ backgroundColor: 'var(--accent-blue)' }} />
              <span>Too Low (Blue)</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="history-list">
          {history.map((item, idx) => {
            const isHigh = item.result === 'Too High';
            const diff = item.guess - item.target;
            
            return (
              <div 
                key={idx} 
                className={`history-item ${isHigh ? 'too-high' : 'too-low'}`}
              >
                <div>
                  <span className="history-guess">{item.guess}</span>
                </div>
                <span className={`history-badge ${isHigh ? 'badge-high' : 'badge-low'}`}>
                  {item.result} ({diff > 0 ? `+${diff}` : diff})
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
