import React, { useState } from "react";

function LyricsQuiz() {
  const [result, setResult] = useState("");

  const answer = "I am happy to see you";

  const checkAnswer = (text) => {
    if (text === answer) {
      setResult("✅ Correct");
    } else {
      setResult("❌ Wrong");
    }
  };

  return (
    <div className="glass game-box">
      <h2>🌍 Lyrics Translation Quiz</h2>

      <p>Tamil Line: "Unnai Paarka Santhosham"</p>

      <div className="card-actions" style={{ justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={() => checkAnswer("I am happy to see you")}>
          I am happy to see you
        </button>

        <button onClick={() => checkAnswer("I am sad today")}>
          I am sad today
        </button>

        <button onClick={() => checkAnswer("I like music")}>
          I like music
        </button>
      </div>

      <h3 className="result-line">{result}</h3>
    </div>
  );
}

export default LyricsQuiz;
