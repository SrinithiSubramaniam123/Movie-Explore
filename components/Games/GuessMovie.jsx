import React, { useState } from "react";

function GuessMovie() {
  const [result, setResult] = useState("");

  const answer = "Leo";

  const checkMovie = (movie) => {
    if (movie === answer) {
      setResult("✅ Correct");
    } else {
      setResult("❌ Wrong");
    }
  };

  return (
    <div className="glass game-box">
      <h2>🎬 Guess The Movie</h2>

      <p>Hint: Vijay + Lokesh Kanagaraj</p>

      <div className="card-actions" style={{ justifyContent: "center" }}>
        <button onClick={() => checkMovie("Leo")}>
          Leo
        </button>

        <button onClick={() => checkMovie("Master")}>
          Master
        </button>

        <button onClick={() => checkMovie("Beast")}>
          Beast
        </button>
      </div>

      <h3 className="result-line">{result}</h3>
    </div>
  );
}

export default GuessMovie;
