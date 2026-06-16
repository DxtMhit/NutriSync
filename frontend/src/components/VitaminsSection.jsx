import React from 'react';
import { vitamins } from '../data/vitaminsData';

const VitaminsSection = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <h2>Vitamins Reference</h2>
        <p>Complete reference for all 13 essential vitamins — their functions, deficiency signs, food sources, codependencies, and supplementation notes.</p>
      </div>

      <div className="vitamins-grid">
        {vitamins.map((v, i) => (
          <div className="vitamin-card" key={i} id={`bm-Vitamins-${i}`}>
            <div className="vitamin-card-header">
              <div
                className={`vitamin-symbol ${v.colorClass}`}
                style={{ border: '1px solid var(--border2)' }}
              >
                <span
                  className={v.textClass}
                  style={{ fontSize: v.symbol.length > 2 ? '14px' : '22px' }}
                >
                  {v.symbol}
                </span>
              </div>
              <div className="vitamin-info-meta">
                <div className="vitamin-full-name">{v.fullName}</div>
                <div className="vitamin-aka">{v.aka}</div>
              </div>
            </div>
            <div className="vitamin-card-body">
              <div className="vit-section-label">Function</div>
              <div className="vit-function">{v.function}</div>

              <div className="vit-section-label">Deficiency Signs</div>
              <div className="vit-function" style={{ color: 'var(--rose2)', fontSize: '13px' }}>
                {v.deficiency}
              </div>

              <div className="vit-section-label">Best Food Sources</div>
              <div className="sources-list">
                {v.sources.map((s, si) => (
                  <span className="source-tag" key={si}>{s}</span>
                ))}
              </div>

              <div className="vit-section-label">Key Codependencies</div>
              <div className="codeps-list">
                {v.codeps.map((c, ci) => (
                  <span
                    key={ci}
                    className={`codep-badge ${v.colorClass} ${v.borderClass} ${v.textClass}`}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className={`dose-note ${v.borderClass}`}>{v.notes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VitaminsSection;
