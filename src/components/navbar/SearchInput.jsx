import React from 'react';
import './SearchInput.css'; // Import your CSS file

const SearchInput = () => {
  return (
    <div className="col-4 search-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <span className="search-icon">🔍</span> {/* You can also use an icon font like Font Awesome */}
    </div>
  );
};

export default SearchInput;
