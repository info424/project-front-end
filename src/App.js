import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import CharacterGrid from './components/CharacterGrid';

function App() {
  const [characters, setCharacters] = useState([]); // State to store character data
  const [search, setSearch] = useState(''); // State to store search input

  // Fetch characters from the API whenever the search input changes
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character', {
          params: { name: search }, // Pass the search query as a parameter
        });
        setCharacters(response.data.results.slice(0, 10)); // Limit to 10 characters
      } catch (error) {
        console.error('Error fetching characters:', error);
        setCharacters([]); // Clear characters if there's an error
      }
    };

    fetchCharacters();
  }, [search]);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Rick & Morty Character Browser</h1>
          <SearchBar setSearch={setSearch} /> {/* Search bar component */}
        </header>
        <main>
          <CharacterGrid characters={characters} /> {/* Grid of character cards */}
        </main>
      </div>
  );
}

export default App;