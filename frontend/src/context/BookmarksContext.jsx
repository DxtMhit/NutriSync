import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const BookmarksContext = createContext();

export function BookmarksProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('nutrisync-bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nutrisync-bookmarks', JSON.stringify(bookmarks));
    } catch {}
  }, [bookmarks]);

  const toggleBookmark = useCallback((id, title, section, icon) => {
    setBookmarks(prev => {
      const idx = prev.findIndex(b => b.id === id);
      if (idx > -1) {
        return prev.filter(b => b.id !== id);
      }
      return [...prev, { id, title, section, icon }];
    });
  }, []);

  const isBookmarked = useCallback((id) => {
    return bookmarks.some(b => b.id === id);
  }, [bookmarks]);

  const clearBookmarks = useCallback(() => {
    setBookmarks([]);
  }, []);

  return (
    <BookmarksContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked, clearBookmarks }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (!context) throw new Error('useBookmarks must be used within BookmarksProvider');
  return context;
}
