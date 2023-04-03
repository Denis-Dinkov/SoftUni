function wordsTracker(input) {
  let obj = {};
  let lookingWords = input.shift().split(" ");

  lookingWords.forEach((word) => {
    obj[word] = 0;
  });

  for (const word of input) {
    if (obj.hasOwnProperty(word)) {
      obj[word]++;
    }
  }

  let sortedObject = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (const word of sortedObject) {
    console.log(`${word[0]} - ${word[1]}`);
  }
}
wordsTracker([
  "is the",

  "first",
  "sentence",
  "Here",
  "is",

  "another",
  "the",
  "And",
  "finally",
  "the",

  "the",
  "sentence",
]);
