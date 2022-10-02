function calculator(num, op, secNum) {
  let firstNum = Number(num);
  let operator = op;
  let secondNum = Number(secNum);
  switch (operator) {
    case "+":
      console.log((firstNum + secondNum).toFixed(2));
      break;
    case "-":
      console.log((firstNum - secondNum).toFixed(2));
      break;
    case "/":
      console.log((firstNum / secondNum).toFixed(2));
      break;
    case "*":
      console.log((firstNum * secondNum).toFixed(2));
      break;

    default:
      break;
  }
}
calculator(
  5,

  "+",

  10
);
