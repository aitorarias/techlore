export function estimateReadingTime(text) {
  const wordsPerMinute = 225; // Puedes ajustar esto según tus preferencias
  const wordCount = text.split(/\s+/).length; // Contar las palabras
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}
