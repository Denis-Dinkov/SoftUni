function calculator(numOne, numTwo, operator) {
  switch (operator) {
    case "multiply":
      console.log(numOne * numTwo);
      break;

    case "divide":
      console.log(numOne / numTwo);
      break;
    case "add":
      console.log(numOne + numTwo);
      break;
    case "subtract":
      console.log(numOne - numTwo);
      break;
    default:
      break;
  }
}

calculator(5, 5, "multiply");
