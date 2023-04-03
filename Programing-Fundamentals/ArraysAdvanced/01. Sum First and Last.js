function sumFirstAndLast(input) {
  let numbers = Number(input);
  let firstNumber = Number(input.shift());
  let lastNumber = Number(input.pop());
  console.log(firstNumber + lastNumber);
}
sumFirstAndLast(["20", "30", "40"]);
