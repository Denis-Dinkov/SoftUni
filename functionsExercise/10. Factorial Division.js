function factorialDivision(firstNum, secondNum) {
  let firstSum = 1;
  let secondSum = 1;

  for (let i = firstNum; i > 0; i--) {
    firstSum *= i;
  }

  for (let k = secondNum; k > 0; k--) {
    secondSum *= k;
  }

  let finalResult = firstSum / secondSum;

  console.log(finalResult.toFixed(2));
}

factorialDivision(6, 2);
