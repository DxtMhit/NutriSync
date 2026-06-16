import React from 'react';
import { individualTests } from '../data/individualTestsData';
import { labPackages, testingProtocol } from '../data/appData';

const LabTestsSection = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <h2>🇮🇳 Lab Tests — India</h2>
        <p>Complete guide to getting tested in India — individual tests, package comparisons, testing protocols, and lab-by-lab comparison.</p>
      </div>

      {/* INDIVIDUAL TESTS */}
      <div className="lt-section-title">Individual Tests — What to Order</div>
      <div className="labs-notice">
        <span>💡</span>
        <span>Prices are approximate and vary by city and lab. Home collection is free from most major labs. Always check the latest pricing on each lab's website.</span>
      </div>

      {individualTests.map((cat, ci) => (
        <div className="lab-cat-block" key={ci}>
          <div className="lab-cat-title">{cat.category}</div>
          <div className="ind-tests-grid">
            {cat.tests.map((test, ti) => (
              <div className="ind-test-card" key={ti}>
                <div className="ind-test-header">
                  <div className="ind-test-name">{test.name}</div>
                  <div className="ind-test-aka">{test.aka}</div>
                </div>
                <div className="ind-test-body">
                  <div className="ind-row">
                    <div className="ind-label">What It Measures</div>
                    <div className="ind-val">{test.measures}</div>
                  </div>
                  <div className="ind-row">
                    <div className="ind-label">Optimal Range</div>
                    <div className="ind-val">{test.optimal}</div>
                  </div>
                  <div className="ind-row">
                    <div className="ind-label">Fasting Required</div>
                    <div className="ind-val">
                      <span className={`fasting-badge ${test.fasting === 'No' ? 'fasting-no' : 'fasting-yes'}`}>
                        {test.fasting === 'No' ? '✓ No Fasting' : `⏰ ${test.fasting}`}
                      </span>
                    </div>
                  </div>
                  <div className="ind-row">
                    <div className="ind-label">Why It Matters</div>
                    <div className="ind-val">{test.importance}</div>
                  </div>
                  <div className="ind-row">
                    <div className="ind-label">Approx Price</div>
                    <div className="ind-val price-val">{test.price}</div>
                  </div>
                  <div className="ind-labs">
                    <div className="ind-label">Book From</div>
                    <div className="ind-lab-links">
                      {test.labs.map((lab, li) => (
                        <a key={li} href={lab.url} target="_blank" rel="noopener noreferrer" className="lab-link">
                          {lab.name} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* PACKAGES */}
      <div className="lt-section-title" style={{ marginTop: '48px' }}>Lab Packages — Best Value Combos</div>
      <div className="pkg-notice">
        Packages offer the best value for comprehensive testing. Prices shown are approximate and may vary by city. All major labs offer free home collection in metro cities.
      </div>

      {labPackages.map((labGroup, lgi) => (
        <div className="lab-block" key={lgi}>
          <div className="lab-block-header">
            <div className="lab-logo">{labGroup.logo}</div>
            <div>
              <div className="lab-block-name">{labGroup.lab}</div>
              <div className="lab-block-tag">{labGroup.tagline}</div>
            </div>
          </div>
          <div className="pkg-grid">
            {labGroup.packages.map((pkg, pi) => (
              <div className={`pkg-card${pkg.highlight ? ' pkg-highlight' : ''}`} key={pi}>
                {pkg.highlight && <div className="pkg-best-badge">⭐ BEST VALUE</div>}
                <div className="pkg-name">{pkg.name}</div>
                <div className="pkg-tests-count">{pkg.tests} tests included</div>
                <div className="pkg-includes-label">Includes</div>
                <div className="pkg-includes">{pkg.includes}</div>
                <div className="pkg-best-for-label">Best For</div>
                <div className="pkg-best-for">{pkg.bestFor}</div>
                <div className="pkg-footer">
                  <div className="pkg-price">{pkg.price}</div>
                  <a href={pkg.url} target="_blank" rel="noopener noreferrer" className="pkg-btn">
                    View ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* TESTING PROTOCOLS */}
      <div className="lt-section-title" style={{ marginTop: '48px' }}>Testing Protocols — What to Test When</div>
      <div className="proto-grid">
        {testingProtocol.map((proto, pi) => (
          <div className="proto-card" key={pi}>
            <div className="proto-icon">{proto.icon}</div>
            <div className="proto-title">{proto.title}</div>
            <div className="proto-desc">{proto.desc}</div>
            <ul className="proto-tests">
              {proto.tests.map((t, ti) => (
                <li key={ti}>{t}</li>
              ))}
            </ul>
            <div className="proto-cost">{proto.cost}</div>
          </div>
        ))}
      </div>

      {/* LAB COMPARISON TABLE */}
      <div className="lt-section-title" style={{ marginTop: '48px' }}>Lab Comparison — At a Glance</div>
      <div className="lab-compare-table-wrap">
        <table className="lab-compare-table">
          <thead>
            <tr>
              <th>Lab</th>
              <th>Network</th>
              <th>Home Collection</th>
              <th>Report Time</th>
              <th>Accreditation</th>
              <th>Best For</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Thyrocare</strong></td>
              <td>3,000+ cities</td>
              <td>✅ Free pan-India</td>
              <td>24–48 hrs</td>
              <td>NABL, CAP, ISO</td>
              <td>Best value packages, automated processing, widest reach</td>
              <td><a href="https://www.thyrocare.com" target="_blank" rel="noopener noreferrer" className="lab-link">thyrocare.com ↗</a></td>
            </tr>
            <tr>
              <td><strong>Dr Lal PathLabs</strong></td>
              <td>275+ labs, 10,000+ centres</td>
              <td>✅ Free (most cities)</td>
              <td>24–48 hrs</td>
              <td>NABL, CAP, ISO</td>
              <td>Widest individual test menu, detailed reports, trusted brand</td>
              <td><a href="https://www.lalpathlabs.com" target="_blank" rel="noopener noreferrer" className="lab-link">lalpathlabs.com ↗</a></td>
            </tr>
            <tr>
              <td><strong>Redcliffe Labs</strong></td>
              <td>220+ labs, pan-India</td>
              <td>✅ Free pan-India</td>
              <td>6–24 hrs</td>
              <td>NABL, ISO</td>
              <td>Fastest reports, best app/UX, aggressive pricing</td>
              <td><a href="https://redcliffelabs.com" target="_blank" rel="noopener noreferrer" className="lab-link">redcliffelabs.com ↗</a></td>
            </tr>
            <tr>
              <td><strong>Metropolis</strong></td>
              <td>200+ labs, 4,000+ centres</td>
              <td>✅ Free (select cities)</td>
              <td>24–72 hrs</td>
              <td>NABL, CAP, ISO</td>
              <td>Specialized/rare tests, niche hormone panels, research-grade accuracy</td>
              <td><a href="https://www.metropolisindia.com" target="_blank" rel="noopener noreferrer" className="lab-link">metropolisindia.com ↗</a></td>
            </tr>
            <tr>
              <td><strong>SRL Diagnostics</strong></td>
              <td>400+ labs</td>
              <td>✅ Free (select cities)</td>
              <td>24–48 hrs</td>
              <td>NABL, ISO</td>
              <td>Rare trace minerals, niche vitamins (B6, Selenium), specialized panels</td>
              <td><a href="https://www.srl.in" target="_blank" rel="noopener noreferrer" className="lab-link">srl.in ↗</a></td>
            </tr>
            <tr>
              <td><strong>1mg Labs</strong></td>
              <td>Pan-India (aggregator)</td>
              <td>✅ Free</td>
              <td>24–48 hrs</td>
              <td>Partners with NABL labs</td>
              <td>Easiest booking via app, compares lab prices near you</td>
              <td><a href="https://www.1mg.com/lab-tests" target="_blank" rel="noopener noreferrer" className="lab-link">1mg.com/lab-tests ↗</a></td>
            </tr>
            <tr>
              <td><strong>Apollo Diagnostics</strong></td>
              <td>2,000+ centres</td>
              <td>✅ Free (select cities)</td>
              <td>24–48 hrs</td>
              <td>NABL, ISO</td>
              <td>Integrated with Apollo hospitals, good for follow-up with Apollo doctors</td>
              <td><a href="https://apollodiagnostics.in" target="_blank" rel="noopener noreferrer" className="lab-link">apollodiagnostics.in ↗</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabTestsSection;
