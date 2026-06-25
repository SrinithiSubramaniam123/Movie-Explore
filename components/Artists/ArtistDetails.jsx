import React from "react";
import { gradientFor } from "../../utils/cardVisuals";

const TYPE_ICONS = {
  Singer: "🎤",
  Band: "🎸",
  Composer: "🎼",
  "Music Director": "🎹",
};

function ArtistDetails({ artist }) {
  if (!artist) {
    return (
      <div className="glass empty-state">
        <h2>🎤 Select an Artist</h2>
        <p className="muted">Tap any card above to see top songs &amp; movies.</p>
      </div>
    );
  }

  return (
    <div className="glass" style={{ padding: "24px" }}>
      <div
        className="card-poster"
        style={{ background: gradientFor(artist.name), height: "70px", width: "70px", float: "left", marginRight: "16px" }}
      >
        {TYPE_ICONS[artist.type] || "🎤"}
      </div>

      <h2>{artist.name}</h2>

      <div className="card-meta-row">
        <span className="badge">🌍 {artist.language}</span>
        <span className="badge">{TYPE_ICONS[artist.type] || "🎤"} {artist.type}</span>
        <span className="badge badge-rating">⭐ {artist.popularity}</span>
        <span className="badge">🗓 Since {artist.debutYear}</span>
        <span className="badge">🏆 {artist.awards} major awards</span>
      </div>

      <div style={{ clear: "both" }}>
        <p style={{ marginTop: "14px" }}>{artist.bio}</p>

        <h3 style={{ marginTop: "16px" }}>Top Songs</h3>
        <ul className="detail-list">
          {artist.songs.map((song, index) => (
            <li key={index}>🎵 {song}</li>
          ))}
        </ul>

        <h3 style={{ marginTop: "16px" }}>Movies / Projects</h3>
        <ul className="detail-list">
          {artist.movies.map((movie, index) => (
            <li key={index}>🎬 {movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArtistDetails;
