function firstAndLastKNumbers(input) {
  let separator = input.shift();
  let firstTwo = input.slice(0, separator);
  let lastTwo = input.slice(input.length - separator);
  console.log(firstTwo.join(" "));
  console.log(lastTwo.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9]);
