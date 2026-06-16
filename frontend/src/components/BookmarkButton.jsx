import React from 'react';
import { useBookmarks } from '../context/BookmarksContext';

const BookmarkButton = ({ id, title, section, icon = '📌' }) => {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(id);

  return (
    <button
      className={`bookmark-btn${bookmarked ? ' bookmarked' : ''}`}
      data-bookmark-id={id}
      title="Save to bookmarks"
      onClick={(e) => {
        e.stopPropagation();
        toggleBookmark(id, title, section, icon);
      }}
    >
      🔖
    </button>
  );
};

export default BookmarkButton;
