import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { gradientFor, iconFor } from "../../utils/cardVisuals";

function MovieCard({ movie, onSelect }) {
  const { addFavorite } =
    useContext(FavoritesContext);

  return (
    <div className="glass card" style={{ width: "250px" }}>
      <div
        className="card-poster"
        style={{ background: gradientFor(movie.title) }}
      >
        {iconFor(movie.genre, "🎬")}
      </div>

      <h3 className="card-title">{movie.title}</h3>

      <div className="card-meta-row">
        <span className="badge">🌍 {movie.language}</span>
        <span className="badge">🎭 {movie.genre}</span>
        <span className="badge">⏱ {movie.duration}</span>
        <span className="badge badge-rating">⭐ {movie.rating}</span>
      </div>

      <div className="card-actions">
        <button onClick={() => onSelect(movie)}>
          View Details
        </button>

        <button
          className="btn-fav"
          onClick={() => addFavorite(movie)}
        >
          ❤️ Favorite
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
