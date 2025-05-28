import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.scss';

const SUGGESTIONS = [
  'áo thun nam',
  'áo thun nữ',
  'áo unisex',
  'áo local brand',
  'áo oversize',
  'áo sơ mi',
  'áo hoodie',
  'áo Doodle phong cách',
];

const SearchBar = ({ visible, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const searchRef = useRef();

  useEffect(() => {
    if (!visible) {
      setSearchQuery('');
      setFilteredSuggestions([]);
      setHighlightIndex(-1);
    }
  }, [visible]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredSuggestions([]);
      setHighlightIndex(-1);
      return;
    }
    const filtered = SUGGESTIONS.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setHighlightIndex(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setFilteredSuggestions([]);
    setHighlightIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!filteredSuggestions.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightIndex >= 0) {
        handleSuggestionClick(filteredSuggestions[highlightIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <div className="search-bar" ref={searchRef}>
  <input
    type="text"
    placeholder="Tìm sản phẩm..."
    value={searchQuery}
    onChange={handleSearchChange}
    onKeyDown={handleKeyDown}
    autoFocus
    aria-autocomplete="list"
    aria-controls="suggestions-list"
    aria-activedescendant={
      highlightIndex >= 0 ? `suggestion-${highlightIndex}` : undefined
    }
  />
  {searchQuery && filteredSuggestions.length > 0 && (
    <ul
      className={`suggestions-list visible`}
      role="listbox"
      id="suggestions-list"
    >
      {filteredSuggestions.map((suggestion, index) => (
        <li
          key={index}
          id={`suggestion-${index}`}
          onClick={() => handleSuggestionClick(suggestion)}
          role="option"
          tabIndex={-1}
          className={highlightIndex === index ? 'highlight' : ''}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  )}
</div>
  );
};

export default SearchBar;
