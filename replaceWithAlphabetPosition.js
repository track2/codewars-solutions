function alphabetPosition(text) {
  let res = "";
  const isLetter = n =>
    n.toLowerCase().charCodeAt(0) >= 97 && n.toLowerCase().charCodeAt(0) <= 122;
  for (i = 0; i < text.length; i++) {
    if (isLetter(text[i])) {
      const pos = text[i].toLowerCase().charCodeAt(0) - 96;
      res += pos + " ";
    }
  }
  return res.trim();
}
