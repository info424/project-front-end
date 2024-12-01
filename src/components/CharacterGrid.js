import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterGrid({ characters }) {
    if (characters.length === 0) {
        return <h2>No characters found</h2>; // Display a message if no characters are found
    }

    return (
        <div className="character-grid">
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
}

export default CharacterGrid;