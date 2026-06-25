import React, { useState, useMemo } from "react";

import songs from "../../data/songs";

import SongCard from "./SongCard";
import SongDetails from "./SongDetails";
import FilterBar from "../FilterBar/FilterBar";

function SongsSection() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValues, setFilterValues] = useState({ language: "All", genre: "All" });

  const languages = useMemo(
    () => [...new Set(songs.map((s) => s.language))].sort(),
    []
  );
  const genres = useMemo(
    () => [...new Set(songs.map((s) => s.genre))].sort(),
    []
  );

  const handleFilterChange = (key, value) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterValues({ language: "All", genre: "All" });
  };

  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.genre.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage = filterValues.language === "All" || song.language === filterValues.language;
    const matchesGenre = filterValues.genre === "All" || song.genre === filterValues.genre;

    return matchesSearch && matchesLanguage && matchesGenre;
  });

  return (
    <section id="songs">
      <div className="section-heading">
        <h1>🎵 Songs</h1>
        <span className="section-count">{filteredSongs.length} of {songs.length}</span>
      </div>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPlaceholder="🔍 Search songs..."
        filters={[
          { key: "language", label: "Language", options: languages },
          { key: "genre", label: "Genre", options: genres },
        ]}
        values={filterValues}
        onChange={handleFilterChange}
        onReset={handleReset}
      />

      <div className="card-grid">
        {filteredSongs.length === 0 ? (
          <div className="glass empty-state">No songs match your filters.</div>
        ) : (
          filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onSelect={setSelectedSong}
            />
          ))
        )}
      </div>

      <SongDetails
        song={selectedSong}
      />
    </section>
  );
}

export default SongsSection;
