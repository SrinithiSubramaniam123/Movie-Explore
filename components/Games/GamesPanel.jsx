import React from "react";

import ThisVsThat from "./ThisVsThat";
import GuessSong from "./GuessSong";
import GuessMovie from "./GuessMovie";
import LyricsQuiz from "./LyricsQuiz";

function GamesPanel() {
  return (
    <div>
      <div className="section-heading">
        <h1>🎮 Entertainment Games</h1>
        <span className="section-count">4 games to play</span>
      </div>

      <ThisVsThat />

      <GuessSong />

      <GuessMovie />

      <LyricsQuiz />
    </div>
  );
}

export default GamesPanel;
