import React from "react";
import LyricsViewer from "./LyricsViewer";
import { gradientFor, iconFor } from "../../utils/cardVisuals";

function SongDetails({ song }) {
  if (!song) {
    return (
      <div className="glass empty-state">
        <h2>🎵 Select a Song</h2>
        <p className="muted">Tap any card above to view lyrics &amp; translation.</p>
      </div>
    );
  }

  return (
    <div className="glass" style={{ marginTop: "20px", padding: "24px" }}>
      <div
        className="card-poster"
        style={{ background: gradientFor(song.title), height: "70px", width: "70px", float: "left", marginRight: "16px" }}
      >
        {iconFor(song.genre, "🎵")}
      </div>

      <h2>{song.title}</h2>

      <div className="card-meta-row">
        <span className="badge">🎤 {song.artist}</span>
        <span className="badge">🎬 {song.movie}</span>
        <span className="badge">🌍 {song.language}</span>
        <span className="badge">🎭 {song.genre}</span>
        <span className="badge badge-rating">⭐ {song.rating}</span>
      </div>

      <div style={{ clear: "both" }}>
        <LyricsViewer song={song} />
      </div>
    </div>
  );
}

export default SongDetails;
