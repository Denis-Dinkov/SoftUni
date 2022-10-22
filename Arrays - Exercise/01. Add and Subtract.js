function addAndSubtract(input) {
  let newArr = [];
  let sumOfInput = 0;
  let sumOfNewArr = 0;
  for (let i = 0; i <= input.length - 1; i++) {
    let tempNum = Number(input[i]);
    sumOfInput += tempNum;
    if (tempNum % 2 === 0) {
      newArr.push(tempNum + i);
    } else {
      newArr.push(tempNum - i);
    }
  }
  for (let i = 0; i <= newArr.length - 1; i++) {
    sumOfNewArr += Number(newArr[i]);
  }
  console.log(newArr);
  console.log(sumOfInput);
  console.log(sumOfNewArr);
}
addAndSubtract([-5, 11, 3, 0, 2]);
