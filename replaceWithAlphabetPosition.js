function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[A-Z]/gi)
    .map(char => char.charCodeAt(0) - 64)
    .join(" ");
}
