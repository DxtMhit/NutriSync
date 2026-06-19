import React from 'react';

const DisclaimerModal = ({ onAccept }) => {
  return (
    <div className="citations-modal-overlay open" style={{ zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="citations-modal" style={{ maxWidth: '500px', animation: 'slideUp 0.3s ease', background: 'var(--surface)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border2)' }}>
        <div className="citations-modal-header" style={{ padding: '20px 24px 16px', borderBottom: '1px solid var(--border)' }}>
          <h2 className="citations-modal-title" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>⚠️</span> Medical Disclaimer
          </h2>
        </div>
        <div className="citations-modal-body" style={{ padding: '24px', color: 'var(--text2)', fontSize: '14.5px', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '16px' }}>
            The recommendations and information provided by NutriSync and its AI are for educational and informational purposes only.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>This is not medical advice.</strong> Please consult a qualified general physician or healthcare provider before making any changes to your diet, supplements, or health routine.
          </p>
          <button 
            onClick={onAccept}
            style={{
              width: '100%',
              padding: '12px',
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'Instrument Sans, sans-serif',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '8px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--accent2)'}
            onMouseOut={(e) => e.target.style.background = 'var(--accent)'}
          >
            I Understand and Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
