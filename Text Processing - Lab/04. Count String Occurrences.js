function stringOccurencies(line, word) {
  let text = line.split(' ');
  let counter = 0;

  for (const words of text) {
    if (words === word) {
      counter++;
    }
  }

  console.log(counter);
}
stringOccurencies(
  "This is a word and it also is a sentence",

  "is"
);
