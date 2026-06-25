import React from "react";
import { gradientFor } from "../../utils/cardVisuals";

const TYPE_ICONS = {
  Singer: "🎤",
  Band: "🎸",
  Composer: "🎼",
  "Music Director": "🎹",
};

function ArtistCard({ artist, onSelect }) {
  return (
    <div
      className="glass card"
      onClick={() => onSelect(artist)}
      style={{ width: "250px" }}
    >
      <div
        className="card-poster"
        style={{ background: gradientFor(artist.name) }}
      >
        {TYPE_ICONS[artist.type] || "🎤"}
      </div>

      <h3 className="card-title">{artist.name}</h3>

      <p className="muted card-bio-line">{artist.bio}</p>

      <div className="card-meta-row">
        <span className="badge">🌍 {artist.language}</span>
        <span className="badge">{TYPE_ICONS[artist.type] || "🎤"} {artist.type}</span>
        <span className="badge badge-rating">⭐ {artist.popularity}</span>
      </div>

      <div className="card-meta-row">
        <span className="badge">🗓 Since {artist.debutYear}</span>
        <span className="badge">🏆 {artist.awards} major awards</span>
      </div>
    </div>
  );
}

export default ArtistCard;
