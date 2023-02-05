function wordOccurences(input) {
  let words = {};
  for (const word of input) {
    if (!words[word]) {
      words[word] = 0;
    }
    words[word]++;
  }

  let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);
  for (const word of sortedWords) {
    console.log(`${word[0]} -> ${word[1]} times`);
  }
}
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
