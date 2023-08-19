export function estimateReadingTime(contentArray) {
  // Extraemos el texto de cada objeto y lo combinamos en un solo string
  const fullText = contentArray.map((item) => item.text).join(" ");

  const wordsPerMinute = 200; // El promedio generalmente aceptado de palabras por minuto que una persona lee
  const numOfWords = fullText.split(" ").length;
  return Math.ceil(numOfWords / wordsPerMinute);
}
