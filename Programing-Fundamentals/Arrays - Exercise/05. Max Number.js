function maxNumber(input) {
  let maxNumber = 0;
  let newArr = [];
  for (let i = 0; i <= input.length - 1; i++) {
    let isBigger = true;
    let firstNumber = Number(input[i]);
    for (let j = i + 1; j <= input.length; j++) {
      let secondNumber = Number(input[j]);
      if (firstNumber <= secondNumber) {
        isBigger = false;
      } else {
        maxNumber = firstNumber;
      }
    }
    if (isBigger) {
      newArr.push(maxNumber);
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([41, 41, 34, 20]);
