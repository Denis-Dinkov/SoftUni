function solve(firstNum, secondNum, operator) {
  let sum;
  switch (operator) {
    case "+":
      sum = firstNum + secondNum;
      break;

    case "-":
      sum = firstNum - secondNum;
      break;
    case "*":
      sum = firstNum * secondNum;

      break;

    case "/":
      sum = firstNum / secondNum;
      break;

    case "%":
      sum = firstNum % secondNum;
      break;

    case "**":
      sum = firstNum ** secondNum;
      break;

    default:
      break;
  }
  console.log(sum);
}
solve(5, 6, "+");
solve(3, 5.5, "*");
