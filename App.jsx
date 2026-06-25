import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import MoviesSection from "./components/Movies/MoviesSection";
import SongsSection from "./components/Songs/SongsSection";
import WebSeriesSection from "./components/WebSeries/WebSeriesSection";
import ArtistsSection from "./components/Artists/ArtistsSection";
import GamesPanel from "./components/Games/GamesPanel";
import FavoritesPanel from "./components/Favorites/FavoritesPanel";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <main className="main-content">
        <ErrorBoundary>
          <Routes>

            {/* DEFAULT ROUTE — Home is the public landing page for everyone */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* PUBLIC ROUTES */}
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />

            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />

            {/* PROTECTED ROUTES */}
            <Route
              path="/movies"
              element={user ? <MoviesSection /> : <Navigate to="/login" />}
            />

            <Route
              path="/songs"
              element={user ? <SongsSection /> : <Navigate to="/login" />}
            />

            <Route
              path="/webseries"
              element={user ? <WebSeriesSection /> : <Navigate to="/login" />}
            />

            <Route
              path="/artists"
              element={user ? <ArtistsSection /> : <Navigate to="/login" />}
            />

            <Route
              path="/games"
              element={user ? <GamesPanel /> : <Navigate to="/login" />}
            />

            <Route
              path="/favorites"
              element={user ? <FavoritesPanel /> : <Navigate to="/login" />}
            />

            {/* FALLBACK (IMPORTANT - prevents blank screen) */}
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  );
}

export default App;
