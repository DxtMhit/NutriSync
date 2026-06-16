import React from 'react';
import { tipsData } from '../data/tipsData';

const TipsSection = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <h2>Supplementing Smart</h2>
        <p>Evidence-based protocols for timing, pairing, and optimizing your supplement regimen — based on the codependency science mapped in this atlas.</p>
      </div>

      <div className="tips-grid">
        {tipsData.map((t, i) => (
          <div className="tip-card" key={i} id={`bm-Tips-${i}`}>
            <div className="tip-icon">{t.icon}</div>
            <div className="tip-title">{t.title}</div>
            <div className="tip-text" dangerouslySetInnerHTML={{ __html: t.text }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsSection;
