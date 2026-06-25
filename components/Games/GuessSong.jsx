import React, { useState } from "react";

function GuessSong() {
  const [result, setResult] = useState("");

  const answer = "Arabic Kuthu";

  const checkAnswer = (song) => {
    if (song === answer) {
      setResult("✅ Correct");
    } else {
      setResult("❌ Wrong");
    }
  };

  return (
    <div className="glass game-box">
      <h2>🎵 Guess The Song</h2>

      <p>Lyrics Hint: "Halamithi Habibo..."</p>

      <div className="card-actions" style={{ justifyContent: "center" }}>
        <button onClick={() => checkAnswer("Arabic Kuthu")}>
          Arabic Kuthu
        </button>

        <button onClick={() => checkAnswer("Hukum")}>
          Hukum
        </button>

        <button onClick={() => checkAnswer("Vaathi Coming")}>
          Vaathi Coming
        </button>
      </div>

      <h3 className="result-line">{result}</h3>
    </div>
  );
}

export default GuessSong;
