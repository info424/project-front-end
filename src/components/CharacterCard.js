import React from "react";
import "./CharacterCard.css"; // Add a CSS file for styling

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <p className="character-status">Status: {character.status}</p>
        <p className="character-location">
          Last known location: {character.location.name}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;