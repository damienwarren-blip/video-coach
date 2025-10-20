'use client';
import { useState } from 'react';

export default function ClientConsentTest() {
  const [consentGiven, setConsentGiven] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Video Coach Pilot – Client Test</h1>

      {!consentGiven ? (
        <div
          style={{
            marginTop: '2rem',
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          <p>
            Welcome to the Video Coach pilot for Client Test. Participation is voluntary and fully anonymous.
            Please do not include names, emails, or other personal identifiers. Data may be processed by AI and
            will be deleted 30 days after report delivery.
          </p>
          <p>You can stop participating at any time. Questions? Contact pilot@video-coach.com</p>

          <label style={{ display: 'block', marginTop: '1rem' }}>
            <input
              type="checkbox"
              onChange={(e) => setConsentGiven(e.target.checked)}
            />{' '}
            I have read and consent to participate in this pilot
          </label>

          <button
            onClick={() => setConsentGiven(true)}
            disabled={!consentGiven}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              cursor: consentGiven ? 'pointer' : 'not-allowed',
            }}
          >
            Start Pilot
          </button>
        </div>
      ) : (
        <div style={{ marginTop: '2rem' }}>
          <p>Thank you! Your pilot session will appear below:</p>
          <iframe
            src="https://your-videoask-link" // <-- replace with Client Test VideoAsk URL
            style={{ width: '100%', height: '600px', border: 'none', marginTop: '1rem' }}
            title="Client Test Pilot"
            allow="camera; microphone; autoplay"
          ></iframe>
        </div>
      )}
    </div>
  );
}
