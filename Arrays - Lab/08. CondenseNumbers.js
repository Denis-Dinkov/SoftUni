function condenseNumbers(input) {
  let result = [];
  for (let i = 0; i <= input.length - 1; i++) {
    result.push(input[i]);
  }

  while (result.length > 1) {
    let tempArr = [];
    for (let i = 0; i < result.length - 1; i++) {
      tempArr[i] = result[i] + result[i + 1];
    }
    result = tempArr;
  }
  console.log(result.join(""));
}
condenseNumbers([5, 0, 4, 1, 2]);
