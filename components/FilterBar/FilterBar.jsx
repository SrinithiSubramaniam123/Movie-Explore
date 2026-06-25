import React from "react";

/**
 * Generic filter bar — renders a search box plus one dropdown per
 * filter config passed in. Used across Movies / Songs / Web Series / Artists.
 *
 * filters: [{ key, label, options }]
 */
function FilterBar({ searchTerm, setSearchTerm, searchPlaceholder, filters, values, onChange, onReset }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="search-bar-input filter-search"
        placeholder={searchPlaceholder || "🔍 Search..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filters.map((f) => (
        <select
          key={f.key}
          className="filter-select"
          value={values[f.key] || "All"}
          onChange={(e) => onChange(f.key, e.target.value)}
        >
          <option value="All">{f.label}: All</option>
          {f.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ))}

      <button type="button" className="btn-pill btn-pill-ghost filter-reset" onClick={onReset}>
        ↺ Reset
      </button>
    </div>
  );
}

export default FilterBar;
