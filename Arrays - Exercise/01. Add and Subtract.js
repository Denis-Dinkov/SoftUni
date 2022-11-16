function addAndSubtract(input) {
  let newArr = [];
  let sumOfOrigArr = 0;
  let sumOfNewArr = 0;
  for (let i = 0; i < input.length; i++) {
    let currentNumber = Number(input[i]);
    sumOfOrigArr += currentNumber;
    if (currentNumber % 2 === 0) {
      newArr.push(currentNumber + i);
    } else {
      newArr.push(currentNumber - i);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    let currentNumber = Number(newArr[i]);
    sumOfNewArr += currentNumber;
  }
  console.log(newArr);
  console.log(sumOfOrigArr);
  console.log(sumOfNewArr);
}
addAndSubtract([-5, 11, 3, 0, 2]);
