import React from 'react';
import { citationsData } from '../data/appData';

const CitationsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="citations-modal-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="citations-modal">
        <div className="citations-modal-header">
          <div className="citations-modal-title">📚 Key References & Sources</div>
          <button className="citations-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="citations-modal-body">
          {citationsData.map((cat, ci) => (
            <div className="cite-category" key={ci}>
              <div className="cite-category-title">{cat.category}</div>
              {cat.items.map((item, ii) => (
                <div className="cite-item" key={ii}>
                  <div className="cite-number">{ii + 1}</div>
                  <div className="cite-content">
                    <div className="cite-claim">{item.claim}</div>
                    <div className="cite-ref">{item.ref}</div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="cite-link">
                      PubMed ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitationsModal;
