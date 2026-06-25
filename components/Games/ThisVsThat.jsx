import React, { useState } from "react";

import artists from "../../data/artists";
import movies from "../../data/movies";
import songs from "../../data/songs";
import { gradientFor } from "../../utils/cardVisuals";

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function ThisVsThat() {
  const [left, setLeft] = useState(getRandomItem(artists));
  const [right, setRight] = useState(getRandomItem(artists));

  const [type, setType] = useState("artist");

  const nextRound = (selected) => {
    alert(`You voted: ${selected.name || selected.title}`);

    // Random type switch (artist/movie/song)
    const types = ["artist", "movie", "song"];
    const newType = types[Math.floor(Math.random() * types.length)];
    setType(newType);

    let pool = artists;

    if (newType === "movie") pool = movies;
    if (newType === "song") pool = songs;

    setLeft(getRandomItem(pool));
    setRight(getRandomItem(pool));
  };

  return (
    <div className="glass game-box">
      <h2>⚔️ This vs That Battle</h2>

      <p>Current Mode: <b>{type.toUpperCase()}</b></p>

      <div className="battle">

        {/* LEFT */}
        <div className="glass battle-card">
          <div
            className="card-poster"
            style={{ background: gradientFor(left.name || left.title), height: "70px" }}
          >
            🔥
          </div>
          <h3>{left.name || left.title}</h3>

          <button onClick={() => nextRound(left)}>
            Vote 👍
          </button>
        </div>

        <h2 className="battle-vs">VS</h2>

        {/* RIGHT */}
        <div className="glass battle-card">
          <div
            className="card-poster"
            style={{ background: gradientFor(right.name || right.title), height: "70px" }}
          >
            🔥
          </div>
          <h3>{right.name || right.title}</h3>

          <button onClick={() => nextRound(right)}>
            Vote 👍
          </button>
        </div>

      </div>
    </div>
  );
}

export default ThisVsThat;
