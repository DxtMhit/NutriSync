import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-eyebrow">Nutritional Biochemistry Reference</div>
      <h1>Vitamins &amp; Minerals<br /><em>never work alone.</em></h1>
      <p className="hero-desc">
        Every vitamin and mineral in your body participates in a web of mutual dependencies. Taking one in isolation — without its cofactors — can be useless, or even harmful. This atlas maps those relationships.
      </p>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">13</div>
          <div className="hero-stat-label">Essential Vitamins</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">16</div>
          <div className="hero-stat-label">Essential Minerals</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">8</div>
          <div className="hero-stat-label">Major Codependency Clusters</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">300+</div>
          <div className="hero-stat-label">Enzymatic Reactions (Magnesium alone)</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
