import React from "react";
import { gradientFor, iconFor } from "../../utils/cardVisuals";

function MovieDetails({ movie }) {
  if (!movie) {
    return (
      <div className="glass empty-state">
        <h2>🎬 Select a Movie</h2>
        <p className="muted">Tap any card above to see cast, story &amp; songs.</p>
      </div>
    );
  }

  return (
    <div className="glass" style={{ marginTop: "20px", padding: "24px" }}>
      <div
        className="card-poster"
        style={{ background: gradientFor(movie.title), height: "70px", width: "70px", float: "left", marginRight: "16px" }}
      >
        {iconFor(movie.genre, "🎬")}
      </div>

      <h2>{movie.title}</h2>

      <div className="card-meta-row">
        <span className="badge">🌍 {movie.language}</span>
        <span className="badge">🎭 {movie.genre}</span>
        <span className="badge">⏱ {movie.duration}</span>
        <span className="badge badge-rating">⭐ {movie.rating}</span>
      </div>

      <p style={{ clear: "both", marginTop: "14px" }}>
        <strong>Story:</strong>{" "}
        {movie.story}
      </p>

      <h3 style={{ marginTop: "16px" }}>Cast</h3>
      <ul className="detail-list">
        {movie.cast.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: "16px" }}>Related Songs</h3>
      <ul className="detail-list">
        {movie.songs.map((song, index) => (
          <li key={index}>🎵 {song}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetails;
