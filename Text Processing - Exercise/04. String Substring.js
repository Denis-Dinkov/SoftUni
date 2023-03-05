function stringSubtring(reqWord, text) {
  let textArray = text.split(" ");

  for (const word of textArray) {
    
    if (word.toLowerCase() === reqWord.toLowerCase()) {
      return console.log(reqWord);
    }
  }

  console.log(`${reqWord} not found!`);
}
stringSubtring('javascript',
'JavaScript is the best programming language');
