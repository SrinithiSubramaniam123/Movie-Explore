// Small shared helpers so every card type gets a consistent,
// genre-aware "poster" look without using any external/copyrighted images.

const GRADIENTS = [
  "linear-gradient(135deg, #8b5cf6, #ec4899)",
  "linear-gradient(135deg, #22d3ee, #6d3df0)",
  "linear-gradient(135deg, #f59e0b, #ec4899)",
  "linear-gradient(135deg, #34d399, #22d3ee)",
  "linear-gradient(135deg, #ec4899, #6d3df0)",
  "linear-gradient(135deg, #6d3df0, #34d399)",
];

export function gradientFor(seed) {
  const str = String(seed || "x");
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % GRADIENTS.length;
  }
  return GRADIENTS[Math.abs(hash) % GRADIENTS.length];
}

const GENRE_ICONS = {
  Action: "💥",
  "Sci-Fi": "🚀",
  Anime: "🎴",
  Crime: "🕵️",
  Thriller: "🔪",
  Dance: "💃",
  Mass: "🔥",
  Pop: "🎤",
  "K-Pop": "✨",
};

export function iconFor(genre, fallback) {
  return GENRE_ICONS[genre] || fallback || "🎬";
}
