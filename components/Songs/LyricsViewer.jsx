import React from "react";

function LyricsViewer({ song }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <h3>🎵 Lyrics</h3>
      <p className="muted" style={{ marginTop: "6px", lineHeight: 1.7 }}>
        {song.lyrics}
      </p>

      <h3 style={{ marginTop: "16px" }}>
        🌍 English Translation
      </h3>
      <p className="muted" style={{ marginTop: "6px", lineHeight: 1.7 }}>
        {song.translation}
      </p>
    </div>
  );
}

export default LyricsViewer;
