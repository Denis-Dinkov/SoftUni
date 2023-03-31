function emojiDetector(input) {
  let text = input.shift();
  //creating patterns
  let wordPattern = /([::|**]{2})(?<word>[A-Z][a-z]{2,})\1/g;
  let digitsPattern = /\d/g;
  let coolWords = [];

  //Getting threshold and emoji count
  let emojiCount = 0;
  let threshold = 1;
  let allDigitsArr = text.match(digitsPattern);
  allDigitsArr.forEach((digit) => {
    threshold *= Number(digit);
  });

  //Finding all Emojies and calculating coolnes
  let allEmojiArr = text.matchAll(wordPattern);
  for (const emoji of allEmojiArr) {
    emojiCount++;
    let coolnes = 0;
    let emojiWithoutExtentions = emoji.groups["word"];

    //calculating coolnes
    for (const word of emojiWithoutExtentions) {
      coolnes += word.charCodeAt();
    }

    if (coolnes >= threshold) {
      coolWords.push(emoji);
    }
  }
  console.log(`Cool threshold: ${threshold}`);
  console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
  for (const word of coolWords) {
    console.log(word[0]);
  }
}
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
