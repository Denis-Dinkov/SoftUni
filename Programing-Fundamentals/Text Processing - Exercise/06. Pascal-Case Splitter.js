function pascalCaseSplitter(text) {
  let result = text[0];
  let lowerText = text.toLowerCase();

  for (let i = 1; i < text.length; i++) {
    if (lowerText[i] !== text[i]) {
      result += ", ";
    }
    result += text[i];
  }
  console.log(result);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
