function mergeArray(firstArr, secondArr) {
  let newArr = [];
  for (let i = 0; i <= firstArr.length - 1; i++) {
    let tempElement = firstArr[i];
    let secondTempElement = secondArr[i];
    let sum = Number(tempElement) + Number(secondTempElement);

    if (i % 2 === 0) {
      newArr.push(sum);
    } else {
      newArr.push(tempElement + secondTempElement);
    }
  }
  console.log(newArr.join(" - "));
}
mergeArray(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);
