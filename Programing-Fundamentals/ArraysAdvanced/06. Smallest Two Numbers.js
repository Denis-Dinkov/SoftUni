function smallestTwoNumber(input) {
  let sortedNumber = input.sort((a, b) => a - b).slice(0, 2);
  console.log(sortedNumber.join(" "));
}
smallestTwoNumber([30, 15, 50, 5]);
