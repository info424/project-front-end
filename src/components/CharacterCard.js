import React from 'react';

function CharacterCard({ character }) {
    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Last known location: {character.location.name}</p>
        </div>
    );
}

export default CharacterCard;