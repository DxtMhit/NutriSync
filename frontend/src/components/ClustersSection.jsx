import React from 'react';
import { clustersData } from '../data/clustersData';

const ClustersSection = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <h2>Codependency Clusters</h2>
        <p>These are the most clinically significant nutrient partnerships. Each cluster functions as an integrated system — supplementing one member in isolation is often ineffective or counterproductive.</p>
      </div>

      <div className="clusters-grid">
        {clustersData.map((cluster, i) => (
          <div className="cluster-card" key={i} id={`bm-Clusters-${i}`}>
            <div className="cluster-header">
              <div
                className={`cluster-icon ${cluster.iconBg}`}
                style={{ border: `1px solid ${cluster.iconBorder}` }}
              >
                {cluster.icon}
              </div>
              <div className="cluster-meta">
                <div className="cluster-name">{cluster.name}</div>
                <div className="cluster-tagline">{cluster.tagline}</div>
              </div>
            </div>

            <div className="cluster-members">
              {cluster.members.map((m, mi) => (
                <span
                  key={mi}
                  className={`member-tag bg-${m.color} border-${m.color} c-${m.color}`}
                >
                  {m.label}
                </span>
              ))}
            </div>

            <div className="cluster-collapsible">
              <div className="cluster-body">
                {cluster.deps.map((dep, di) => (
                  <div className="dep-item" key={di}>
                    <div className="dep-arrow">→</div>
                    <div className="dep-text" dangerouslySetInnerHTML={{ __html: dep.text }} />
                  </div>
                ))}
              </div>
              <div className="deficiency-box">
                <div className="deficiency-label">{cluster.deficiency.label}</div>
                <div className="deficiency-text">{cluster.deficiency.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClustersSection;
