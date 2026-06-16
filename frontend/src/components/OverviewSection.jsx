import React from 'react';

const OverviewSection = ({ onOpenCitations }) => {
  return (
    <div className="section-inner">
      <div className="notice">
        <span className="notice-icon">⚠</span>
        <span>
          <strong>Medical Disclaimer:</strong> This reference is for educational purposes. All specific claims reflect established nutritional biochemistry. Consult a qualified healthcare provider before starting any supplementation protocol.
        </span>
      </div>

      <div className="section-header">
        <h2>How Codependencies Work</h2>
        <p>
          Nutrients act as cofactors, catalysts, and regulators for one another. A deficiency in one can functionally create a deficiency in several others — even when those nutrients are present in adequate amounts.
          <button
            onClick={onOpenCitations}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              padding: '4px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border2)',
              background: 'var(--surface2)',
              color: 'var(--blue2)',
              cursor: 'pointer',
              marginLeft: '8px',
            }}
          >
            📚 Key References
          </button>
        </p>
      </div>

      <div className="tips-grid">
        <div className="tip-card">
          <div className="tip-icon">🔗</div>
          <div className="tip-title">The Cofactor Concept</div>
          <div className="tip-text">
            Many enzymes require a specific mineral or vitamin to function. <strong>Magnesium is required to activate Vitamin D.</strong> Without it, even high-dose D3 supplementation may fail to produce active calcitriol. The nutrient you take is only as useful as its cofactors allow.
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">🔄</div>
          <div className="tip-title">The Recycling Loop</div>
          <div className="tip-text">
            Some nutrients are "used up" and need others to be regenerated. <strong>Vitamin C regenerates Vitamin E</strong> after it neutralizes a free radical. Without C, E stays in its oxidized (spent) form — unable to protect cell membranes.
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">🚦</div>
          <div className="tip-title">The Traffic Director</div>
          <div className="tip-text">
            <strong>Vitamin K2 directs calcium traffic.</strong> D3 raises blood calcium; K2 activates proteins (osteocalcin, MGP) that pull calcium into bones and prevent it from depositing in arteries. D3 without K2 can raise arterial calcification risk.
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">⚖️</div>
          <div className="tip-title">The Antagonist Balance</div>
          <div className="tip-text">
            Some nutrients compete. <strong>High-dose zinc depletes copper</strong> because both use the same intestinal transporter. High iron can block zinc. Excess calcium can suppress magnesium. Balance, not megadose, is the goal.
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">🧬</div>
          <div className="tip-title">The Methylation Engine</div>
          <div className="tip-text">
            <strong>B12, B9 (folate), and B6 govern methylation</strong> — the process that controls gene expression, detoxification, neurotransmitter synthesis, and homocysteine clearance. A deficiency in any one stalls the entire cycle.
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">🦋</div>
          <div className="tip-title">The Thyroid Cascade</div>
          <div className="tip-text">
            The thyroid requires <strong>iodine to make hormones, selenium to convert T4→T3</strong> (the active form), zinc and iron for receptor signaling, and vitamin D for immune regulation. A single deficiency can cause hypothyroid symptoms.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
