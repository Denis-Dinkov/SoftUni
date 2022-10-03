function triplesOfLatinLetters(number) {
  for (let i = 0; i < number; i++) {
    let firstLetter = String.fromCharCode(97 + i);
    for (let k = 0; k < number; k++) {
      let secondLetter = String.fromCharCode(97 + k);
      for (let j = 0; j < number; j++) {
        let thirdLetter = String.fromCharCode(97 + j);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}
triplesOfLatinLetters(3);
