import React, { useState, useMemo } from "react";
import artists from "../../data/artists";
import ArtistCard from "./ArtistCard";
import ArtistDetails from "./ArtistDetails";
import FilterBar from "../FilterBar/FilterBar";

function ArtistsSection() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValues, setFilterValues] = useState({ language: "All", type: "All" });

  const languages = useMemo(
    () => [...new Set(artists.map((a) => a.language))].sort(),
    []
  );
  const types = useMemo(
    () => [...new Set(artists.map((a) => a.type))].sort(),
    []
  );

  const handleFilterChange = (key, value) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterValues({ language: "All", type: "All" });
  };

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch =
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.language.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage = filterValues.language === "All" || artist.language === filterValues.language;
    const matchesType = filterValues.type === "All" || artist.type === filterValues.type;

    return matchesSearch && matchesLanguage && matchesType;
  });

  return (
    <section id="artists" className="section">
      <div className="section-heading">
        <h1>🎤 Artists Explorer</h1>
        <span className="section-count">{filteredArtists.length} of {artists.length}</span>
      </div>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPlaceholder="🔍 Search artists..."
        filters={[
          { key: "language", label: "Language", options: languages },
          { key: "type", label: "Artist Type", options: types },
        ]}
        values={filterValues}
        onChange={handleFilterChange}
        onReset={handleReset}
      />

      {/* ARTIST CARDS LIST */}
      <div className="card-grid">
        {filteredArtists.length === 0 ? (
          <div className="glass empty-state">No artists match your filters.</div>
        ) : (
          filteredArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              onSelect={setSelectedArtist}
            />
          ))
        )}
      </div>

      {/* ARTIST DETAILS */}
      <div style={{ marginTop: "20px" }}>
        <ArtistDetails artist={selectedArtist} />
      </div>
    </section>
  );
}

export default ArtistsSection;
