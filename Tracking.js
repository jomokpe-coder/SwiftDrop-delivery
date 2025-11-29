import React, { useState } from 'react';

export default function Tracking() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  async function check() {
    setError('');
    setResult(null);

    try {
      const response = await fetch('/tracking.json');
      const data = await response.json();

      const item = data[code];
      if (!item) {
        setError('Tracking number not found.');
        return;
      }

      setResult(item);
    } catch (err) {
      setError('Failed to load tracking data.');
    }
  }

  return (
    <div className="page container">
      <h1>Track Your Package</h1>

      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter tracking number"
      />

      <button onClick={check} className="primary-btn" style={{ marginLeft: 10 }}>
        Track
      </button>

      {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>Status: {result.status}</h2>
          <p>Last Update: {result.lastUpdate}</p>

          <h3 style={{ marginTop: 15 }}>Delivery Stages</h3>

          <div style={{ marginTop: 15, borderLeft: '3px solid #0a84ff', paddingLeft: 15 }}>
            {result.stages.map((stage, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    background: '#0a84ff',
                    borderRadius: '50%',
                    position: 'relative',
                    left: -22,
                    top: 10
                  }}
                ></div>
                <p style={{ marginTop: -10 }}>{stage}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
