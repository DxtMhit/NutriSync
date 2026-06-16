import React from 'react';
import { chains } from '../data/chainsData';

const ChainsSection = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <h2>Deficiency Chains</h2>
        <p>When one nutrient is missing, it triggers a cascade of downstream failures. These chains show the most clinically important domino effects — and how to prevent them.</p>
      </div>

      <div className="chain-list">
        {chains.map((c, i) => (
          <div className="chain-card" key={i} id={`bm-Chains-${i}`}>
            <div className="chain-header">
              <div>
                <div className="chain-title">{c.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--text3)', marginTop: '4px' }}>{c.desc}</div>
              </div>
              <div className={`chain-severity sev-${c.severity}`}>{c.severity}</div>
            </div>
            <div className="chain-flow">
              {c.nodes.map((node, ni) => (
                <React.Fragment key={ni}>
                  <div className="chain-node">
                    <div
                      className="chain-node-bubble"
                      style={{
                        background: `${node.color}18`,
                        borderColor: node.borderColor,
                        color: node.color,
                        fontSize: '10px',
                        textAlign: 'center',
                        padding: '4px',
                      }}
                    >
                      {node.label}
                    </div>
                    <div className="chain-node-label">{node.sub}</div>
                  </div>
                  {ni < c.nodes.length - 1 && <div className="chain-arrow">→</div>}
                </React.Fragment>
              ))}
            </div>
            <div className="chain-missing">
              <div className="missing-label">What happens when each is missing</div>
              <div className="missing-grid">
                {c.missing.map((m, mi) => (
                  <div className="missing-item" key={mi}>
                    <strong>Missing: {m.nutrient}</strong>
                    {m.consequence}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainsSection;
