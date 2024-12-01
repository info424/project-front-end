import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "./CharacterBrowser.css";

const CharacterBrowser = () => {
  const [characters, setCharacters] = useState([]); // Stores the characters for the current page
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const [totalPages, setTotalPages] = useState(1); // Total number of pages from the API

  useEffect(() => {
    // Fetch characters from the API whenever the currentPage changes
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((response) => {
        setCharacters(response.data.results); // Set the characters for the current page
        setTotalPages(response.data.info.pages); // Set the total number of pages
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]); // Re-run this effect whenever currentPage changes

  // Function to handle page number clicks
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber); // Update the current page
  };

  // Function to render pagination numbers dynamically
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`pagination-number ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="character-browser">
      <h1>Rick & Morty Character Browser</h1>
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="pagination">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterBrowser;
