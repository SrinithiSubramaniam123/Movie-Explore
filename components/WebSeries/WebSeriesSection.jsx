import React, { useState, useMemo } from "react";

import webseries from "../../data/webseries";

import WebSeriesCard from "./WebSeriesCard";
import WebSeriesDetails from "./WebSeriesDetails";
import FilterBar from "../FilterBar/FilterBar";

function WebSeriesSection() {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValues, setFilterValues] = useState({ language: "All", genre: "All" });

  const languages = useMemo(
    () => [...new Set(webseries.map((s) => s.language))].sort(),
    []
  );
  const genres = useMemo(
    () => [...new Set(webseries.map((s) => s.genre))].sort(),
    []
  );

  const handleFilterChange = (key, value) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterValues({ language: "All", genre: "All" });
  };

  const filteredSeries = webseries.filter((series) => {
    const matchesSearch =
      series.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      series.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      series.language.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage = filterValues.language === "All" || series.language === filterValues.language;
    const matchesGenre = filterValues.genre === "All" || series.genre === filterValues.genre;

    return matchesSearch && matchesLanguage && matchesGenre;
  });

  return (
    <section id="webseries">
      <div className="section-heading">
        <h1>📺 Web Series</h1>
        <span className="section-count">{filteredSeries.length} of {webseries.length}</span>
      </div>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPlaceholder="🔍 Search web series..."
        filters={[
          { key: "language", label: "Language", options: languages },
          { key: "genre", label: "Genre", options: genres },
        ]}
        values={filterValues}
        onChange={handleFilterChange}
        onReset={handleReset}
      />

      <div className="card-grid">
        {filteredSeries.length === 0 ? (
          <div className="glass empty-state">No web series match your filters.</div>
        ) : (
          filteredSeries.map((series) => (
            <WebSeriesCard
              key={series.id}
              series={series}
              onSelect={setSelectedSeries}
            />
          ))
        )}
      </div>

      <WebSeriesDetails
        series={selectedSeries}
      />
    </section>
  );
}

export default WebSeriesSection;
