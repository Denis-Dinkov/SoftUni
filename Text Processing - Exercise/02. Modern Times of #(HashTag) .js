function solve(input) {
  let searchedWords = [];
  let text = input.split(" ");

  text.forEach((word) => {
    let isValid = word.startsWith("#") && word.length > 1;
    if (isValid) {
      let isLetter = true;
      word = word.substring(1);
      for (const letter of word) {
        let lowerCaseWord = letter.toLowerCase();
        if (
          lowerCaseWord.charCodeAt() < 97 ||
          lowerCaseWord.charCodeAt() > 122
        ) {
          isLetter = false;
          break;
        }
      }
      if (isLetter) {
        searchedWords.push(word);
      }
    }
  });

  searchedWords.forEach((word) => {
    console.log(word);
  });
}
solve(
  "The symbol # is known #variously in English-speaking #Reg1ions as the #number sign"
);
