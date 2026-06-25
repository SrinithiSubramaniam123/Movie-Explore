import React, { useContext } from "react";
import { Link } from "react-router-dom";

import movies from "../data/movies";
import songs from "../data/songs";
import artists from "../data/artists";
import webseries from "../data/webseries";

import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

  const spotlightMovie = movies[0];
  const spotlightSong = songs[0];

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="glass hero">
        <span className="eyebrow">Now Showing</span>

        <h1 className="hero-title">
          Every story, song &amp; star —
          <span className="hero-title-accent"> one explorer.</span>
        </h1>

        {user ? (
          <p className="hero-sub">
            👋 Welcome back, <strong>{user.email}</strong>. Your watchlist and
            favorites are right where you left them.
          </p>
        ) : (
          <p className="hero-sub">
            🔐 Login to unlock Movies, Songs, Artists, Web Series, Games &amp; Favorites.
          </p>
        )}

        <div className="hero-actions">
          {user ? (
            <>
              <Link to="/movies" className="btn-pill">🎬 Browse Movies</Link>
              <Link to="/games" className="btn-pill btn-pill-ghost">🎮 Play a Game</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-pill">🔐 Login</Link>
              <Link to="/signup" className="btn-pill btn-pill-ghost">📝 Create Account</Link>
            </>
          )}
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="stats">
        <div className="glass stat-box">
          <span className="stat-icon">🎬</span>
          <h2>{movies?.length || 0}</h2>
          <p>Movies</p>
        </div>

        <div className="glass stat-box">
          <span className="stat-icon">🎵</span>
          <h2>{songs?.length || 0}</h2>
          <p>Songs</p>
        </div>

        <div className="glass stat-box">
          <span className="stat-icon">🎤</span>
          <h2>{artists?.length || 0}</h2>
          <p>Artists</p>
        </div>

        <div className="glass stat-box">
          <span className="stat-icon">📺</span>
          <h2>{webseries?.length || 0}</h2>
          <p>Web Series</p>
        </div>
      </div>

      {/* SPOTLIGHT STRIP */}
      <div className="section spotlight-grid">
        <div className="glass spotlight-card">
          <span className="eyebrow">Trending Movie</span>
          <h3>{spotlightMovie.title}</h3>
          <p className="muted">
            {spotlightMovie.language} • {spotlightMovie.genre} • ⭐ {spotlightMovie.rating}
          </p>
          <p>{spotlightMovie.story}</p>
          {user && <Link to="/movies" className="link-arrow">Explore Movies →</Link>}
        </div>

        <div className="glass spotlight-card">
          <span className="eyebrow">Trending Song</span>
          <h3>{spotlightSong.title}</h3>
          <p className="muted">
            {spotlightSong.artist} • {spotlightSong.movie} • ⭐ {spotlightSong.rating}
          </p>
          <p>{spotlightSong.translation}</p>
          {user && <Link to="/songs" className="link-arrow">Explore Songs →</Link>}
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="glass feature">
        <span className="eyebrow">What's Inside</span>
        <h2>Everything an entertainment fan needs</h2>

        <div className="feature-grid">
          <div className="feature-item">
            <span className="feature-icon">🎬</span>
            <div>
              <h4>Movies</h4>
              <p>Cast, ratings, story &amp; the songs behind every film.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🎵</span>
            <div>
              <h4>Songs</h4>
              <p>Lyrics snippets with quick English translations.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🎤</span>
            <div>
              <h4>Artists</h4>
              <p>Discover singers, composers &amp; bands across languages.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">📺</span>
            <div>
              <h4>Web Series</h4>
              <p>Seasons, episodes &amp; the highlights worth bingeing.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🎮</span>
            <div>
              <h4>Games</h4>
              <p>This-vs-That battles, guess-the-song &amp; lyrics quizzes.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">❤️</span>
            <div>
              <h4>Favorites</h4>
              <p>Save what you love and find it again in one tap.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
