function sum(input) {
  let firstNum = Number(input.shift());
  let lastName = Number(input.pop());

  return firstNum + lastName;
}

let sumOfNumbers = sum;

console.log(sumOfNumbers(["20", "30", "40"]));
