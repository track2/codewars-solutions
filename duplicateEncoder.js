function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(c => (word.toLowerCase().split(c).length - 1 > 1 ? ")" : "("))
    .join("");
}
