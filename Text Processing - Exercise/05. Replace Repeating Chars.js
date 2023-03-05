function replaceRepeatingString(input) {
  let specWords = input[0];
  for (let i = 1; i < input.length; i++) {
    let currrentWord = input[i];
    let lastWord = input[i - 1];
    if (lastWord != currrentWord) {
      specWords += currrentWord;
    }
  }
  console.log(specWords);
}
replaceRepeatingString("qqqwerqwecccwd");
