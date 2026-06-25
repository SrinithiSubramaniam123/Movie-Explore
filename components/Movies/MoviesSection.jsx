import React, { useState, useMemo } from "react";

import movies from "../../data/movies";

import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import FilterBar from "../FilterBar/FilterBar";

function MoviesSection() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValues, setFilterValues] = useState({ language: "All", genre: "All" });

  const languages = useMemo(
    () => [...new Set(movies.map((m) => m.language))].sort(),
    []
  );
  const genres = useMemo(
    () => [...new Set(movies.map((m) => m.genre))].sort(),
    []
  );

  const handleFilterChange = (key, value) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterValues({ language: "All", genre: "All" });
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.language.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage = filterValues.language === "All" || movie.language === filterValues.language;
    const matchesGenre = filterValues.genre === "All" || movie.genre === filterValues.genre;

    return matchesSearch && matchesLanguage && matchesGenre;
  });

  return (
    <section id="movies">
      <div className="section-heading">
        <h1>🎬 Movies</h1>
        <span className="section-count">{filteredMovies.length} of {movies.length}</span>
      </div>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPlaceholder="🔍 Search movies..."
        filters={[
          { key: "language", label: "Language", options: languages },
          { key: "genre", label: "Genre", options: genres },
        ]}
        values={filterValues}
        onChange={handleFilterChange}
        onReset={handleReset}
      />

      <div className="card-grid">
        {filteredMovies.length === 0 ? (
          <div className="glass empty-state">No movies match your filters.</div>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={setSelectedMovie}
            />
          ))
        )}
      </div>

      <MovieDetails
        movie={selectedMovie}
      />
    </section>
  );
}

export default MoviesSection;
