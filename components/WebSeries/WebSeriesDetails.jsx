import React from "react";
import { gradientFor, iconFor } from "../../utils/cardVisuals";

function WebSeriesDetails({ series }) {
  if (!series) {
    return (
      <div className="glass empty-state">
        <h2>📺 Select a Web Series</h2>
        <p className="muted">Tap any card above to see cast &amp; highlights.</p>
      </div>
    );
  }

  return (
    <div className="glass" style={{ marginTop: "20px", padding: "24px" }}>
      <div
        className="card-poster"
        style={{ background: gradientFor(series.title), height: "70px", width: "70px", float: "left", marginRight: "16px" }}
      >
        {iconFor(series.genre, "📺")}
      </div>

      <h2>{series.title}</h2>

      <div className="card-meta-row">
        <span className="badge">🌍 {series.language}</span>
        <span className="badge">🎭 {series.genre}</span>
        <span className="badge">📺 {series.seasons} Seasons</span>
        <span className="badge">🎬 {series.episodes} Episodes</span>
        <span className="badge badge-rating">⭐ {series.rating}</span>
      </div>

      <p style={{ clear: "both", marginTop: "14px" }}>
        <strong>Story:</strong> {series.story}
      </p>

      <h3 style={{ marginTop: "16px" }}>⭐ Cast</h3>
      <ul className="detail-list">
        {series.cast.map((actor, i) => (
          <li key={i}>{actor}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: "16px" }}>🔥 Highlights</h3>
      <ul className="detail-list">
        {series.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}

export default WebSeriesDetails;
