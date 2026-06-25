import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Footer() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <footer className="glass footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>🎬 Entertainment Explorer 360</h3>
          <p>Movies • Songs • Artists • Web Series • Games, all in one place.</p>
        </div>

        <div className="footer-links">
          <span className="footer-heading">Explore</span>
          <Link to="/movies">Movies</Link>
          <Link to="/songs">Songs</Link>
          <Link to="/webseries">Web Series</Link>
          <Link to="/artists">Artists</Link>
        </div>

        <div className="footer-links">
          <span className="footer-heading">More</span>
          <Link to="/games">Games</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>❤️ © 2026 Entertainment Explorer</p>

        {/* LOGOUT — always last, only visible once logged in */}
        {user && (
          <button className="btn-logout" onClick={handleLogout}>
            🚪 Logout
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;
