function commonElements(firstArr, secondArr) {
  for (let i = 0; i <= firstArr.length - 1; i++) {
    let tempIndex = firstArr[i];
    for (let j = 0; j <= secondArr.length - 1; j++) {
      let secondTempIndex = secondArr[j];
      if (tempIndex === secondTempIndex) {
        console.log(secondTempIndex);
      }
    }
  }
}
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],

  ["s", "o", "c", "i", "a", "l"]
);
