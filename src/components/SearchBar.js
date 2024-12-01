import React from 'react';

function SearchBar({ setSearch }) {
    const handleInputChange = (e) => {
        setSearch(e.target.value); // Update the search state in the parent component
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for characters"
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;