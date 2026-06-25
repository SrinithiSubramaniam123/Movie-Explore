import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="glass navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">🎬</span>
          <span className="brand-text">
            Entertainment<span className="brand-accent">Explorer</span>
          </span>
        </NavLink>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`navbar-links ${open ? "navbar-links-open" : ""}`}>
          <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          {user && (
            <>
              <NavLink to="/movies" className={navLinkClass} onClick={() => setOpen(false)}>
                Movies
              </NavLink>
              <NavLink to="/songs" className={navLinkClass} onClick={() => setOpen(false)}>
                Songs
              </NavLink>
              <NavLink to="/webseries" className={navLinkClass} onClick={() => setOpen(false)}>
                Web Series
              </NavLink>
              <NavLink to="/artists" className={navLinkClass} onClick={() => setOpen(false)}>
                Artists
              </NavLink>
              <NavLink to="/games" className={navLinkClass} onClick={() => setOpen(false)}>
                Games
              </NavLink>
              <NavLink to="/favorites" className={navLinkClass} onClick={() => setOpen(false)}>
                Favorites
              </NavLink>
            </>
          )}

          <div className="navbar-auth">
            {!user ? (
              <>
                <NavLink to="/login" className="nav-link" onClick={() => setOpen(false)}>
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn-pill" onClick={() => setOpen(false)}>
                  Sign up
                </NavLink>
              </>
            ) : (
              <span className="user-chip">
                <span className="user-chip-avatar" aria-hidden="true">👤</span>
                {user.email}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
