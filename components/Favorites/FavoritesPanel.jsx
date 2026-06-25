import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { gradientFor } from "../../utils/cardVisuals";

function FavoritesPanel() {
  const { favorites, removeFavorite } =
    useContext(FavoritesContext);

  return (
    <div className="glass" style={{ padding: "24px" }}>
      <div className="section-heading">
        <h2>❤️ Favorites</h2>
        <span className="section-count">{favorites.length} saved</span>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>No favorites added yet.</p>
          <p className="muted" style={{ marginTop: "6px" }}>
            Browse Movies, Songs or Web Series and tap ❤️ Favorite to save them here.
          </p>
        </div>
      ) : (
        <div className="card-grid" style={{ marginTop: "10px" }}>
          {favorites.map((item) => (
            <div
              key={item.id}
              className="glass"
              style={{ width: "250px", padding: "16px" }}
            >
              <div
                className="card-poster"
                style={{
                  background: gradientFor(item.title || item.name),
                  height: "70px",
                }}
              >
                ❤️
              </div>

              <h4 className="card-title">{item.title || item.name}</h4>

              <div className="card-meta-row">
                <span className="badge">
                  {item.genre || item.language || item.type}
                </span>
              </div>

              <button
                className="btn-fav"
                style={{ width: "100%" }}
                onClick={() => removeFavorite(item.id)}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPanel;
