import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { gradientFor, iconFor } from "../../utils/cardVisuals";

function SongCard({ song, onSelect }) {
  const { addFavorite } =
    useContext(FavoritesContext);

  return (
    <div className="glass card" style={{ width: "250px" }}>
      <div
        className="card-poster"
        style={{ background: gradientFor(song.title) }}
      >
        {iconFor(song.genre, "🎵")}
      </div>

      <h3 className="card-title">{song.title}</h3>

      <div className="card-meta-row">
        <span className="badge">🎤 {song.artist}</span>
        <span className="badge">🌍 {song.language}</span>
        <span className="badge">🎭 {song.genre}</span>
        <span className="badge badge-rating">⭐ {song.rating}</span>
      </div>

      <div className="card-actions">
        <button onClick={() => onSelect(song)}>
          View Details
        </button>

        <button
          className="btn-fav"
          onClick={() => addFavorite(song)}
        >
          ❤️ Favorite
        </button>
      </div>
    </div>
  );
}

export default SongCard;
