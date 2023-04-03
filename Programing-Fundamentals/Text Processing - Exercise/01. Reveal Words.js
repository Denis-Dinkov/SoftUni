function revealWords(word, text) {
  let wordsArray = word.split(", ");

  wordsArray.forEach((element) => {
    const match = "*".repeat(element.length);
    text = text.replace(match, element);
  });

  console.log(text);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
