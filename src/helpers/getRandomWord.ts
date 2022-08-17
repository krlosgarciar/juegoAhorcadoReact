let words: string[] = [
  "REACT",
  "ANGULAR",
  "VUE",
  "SVELTE",
  "NODE",
  "JAVASCRIPT",
  "VITE",
  "DOCKER",
  "GIT",
  "CSS",
  "HTML",
  "NEXT",
  "GRAPHQL",
  "MONGO",
];
export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
