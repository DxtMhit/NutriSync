import React, { useState } from 'react';
import { useBookmarks } from '../context/BookmarksContext';

const BookmarksPanel = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { bookmarks, clearBookmarks } = useBookmarks();

  const handleGoToBookmark = (bookmark) => {
    setIsOpen(false);
    if (onNavigate) onNavigate(bookmark.section, bookmark.id);
  };

  return (
    <div className="bookmarks-bar">
      {isOpen && (
        <div className={`bookmarks-panel open`}>
          <div className="bookmarks-panel-header">
            <div className="bookmarks-panel-title">📌 Saved</div>
            <button className="bookmarks-clear" onClick={clearBookmarks}>Clear all</button>
          </div>
          <div className="bookmarks-list">
            {bookmarks.length === 0 ? (
              <div className="bookmarks-empty">
                No bookmarks yet.<br />Click 🔖 on any card to save it.
              </div>
            ) : (
              bookmarks.map((b, idx) => (
                <div
                  key={b.id || idx}
                  className="bookmark-item"
                  onClick={() => handleGoToBookmark(b)}
                >
                  <div className="bookmark-item-icon">{b.icon || '📌'}</div>
                  <div>
                    <div className="bookmark-item-text">{b.title}</div>
                    <div className="bookmark-item-section">{b.section}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <button
        className="bookmarks-fab"
        onClick={() => setIsOpen(prev => !prev)}
        title="Saved items"
      >
        📌
        {bookmarks.length > 0 && (
          <span className="fab-count" style={{ display: 'flex' }}>{bookmarks.length}</span>
        )}
      </button>
    </div>
  );
};

export default BookmarksPanel;
