import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { gradientFor, iconFor } from "../../utils/cardVisuals";

function WebSeriesCard({ series, onSelect }) {
  const { addFavorite } = useContext(FavoritesContext);

  return (
    <div className="glass card" style={{ width: "250px" }}>
      <div
        className="card-poster"
        style={{ background: gradientFor(series.title) }}
      >
        {iconFor(series.genre, "📺")}
      </div>

      <h3 className="card-title">{series.title}</h3>

      <div className="card-meta-row">
        <span className="badge">🌍 {series.language}</span>
        <span className="badge">🎭 {series.genre}</span>
        <span className="badge">📺 S{series.seasons}</span>
        <span className="badge">🎬 {series.episodes}ep</span>
        <span className="badge badge-rating">⭐ {series.rating}</span>
      </div>

      <div className="card-actions">
        <button onClick={() => onSelect(series)}>
          View Details
        </button>

        <button
          className="btn-fav"
          onClick={() => addFavorite(series)}
        >
          ❤️ Favorite
        </button>
      </div>
    </div>
  );
}

export default WebSeriesCard;
