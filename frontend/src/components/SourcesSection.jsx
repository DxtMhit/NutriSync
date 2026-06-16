import React from 'react';
import { sourcesData } from '../data/sourcesData';

const SourcesSection = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <h2>Food Sources</h2>
        <p>The best dietary sources for every essential vitamin and mineral — ranked by bioavailability and practical accessibility.</p>
      </div>

      {sourcesData.map((cat, ci) => (
        <div className="sources-section" key={ci}>
          <div className="sources-category-title">{cat.icon} {cat.category}</div>
          <table className="sources-table">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Top Animal/Complete Sources</th>
                <th>Plant Sources</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {cat.items.map((item, ii) => (
                <tr key={ii}>
                  <td><span className="food-icons">{item.emoji}</span> {item.name}</td>
                  <td>{item.topSources}</td>
                  <td>{item.plantSources}</td>
                  <td>{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SourcesSection;
