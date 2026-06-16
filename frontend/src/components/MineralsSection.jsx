import React from 'react';
import { minerals } from '../data/mineralsData';

const MineralsSection = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <h2>Minerals Reference</h2>
        <p>Complete reference for all essential minerals — their functions, deficiency signs, food sources, codependencies, and supplementation notes.</p>
      </div>

      <div className="minerals-grid">
        {minerals.map((m, i) => (
          <div className="vitamin-card" key={i} id={`bm-Minerals-${i}`}>
            <div className="vitamin-card-header">
              <div
                className={`vitamin-symbol ${m.colorClass}`}
                style={{ border: '1px solid var(--border2)' }}
              >
                <span
                  className={m.textClass}
                  style={{
                    fontSize: m.symbol.length > 2 ? '14px' : '20px',
                    fontWeight: 700,
                  }}
                >
                  {m.symbol}
                </span>
              </div>
              <div className="vitamin-info-meta">
                <div className="vitamin-full-name">{m.fullName}</div>
                <div className="vitamin-aka">Essential Mineral</div>
              </div>
            </div>
            <div className="vitamin-card-body">
              <div className="vit-section-label">Function</div>
              <div className="vit-function">{m.function}</div>

              <div className="vit-section-label">Deficiency Signs</div>
              <div className="vit-function" style={{ color: 'var(--rose2)', fontSize: '13px' }}>
                {m.deficiency}
              </div>

              <div className="vit-section-label">Best Food Sources</div>
              <div className="sources-list">
                {m.sources.map((s, si) => (
                  <span className="source-tag" key={si}>{s}</span>
                ))}
              </div>

              <div className="vit-section-label">Key Codependencies</div>
              <div className="codeps-list">
                {m.codeps.map((c, ci) => (
                  <span
                    key={ci}
                    className={`codep-badge ${m.colorClass} ${m.borderClass} ${m.textClass}`}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className={`dose-note ${m.borderClass}`}>{m.notes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MineralsSection;
