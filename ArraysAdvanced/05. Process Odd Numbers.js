function processOddNumbers(input) {
  let result = input
    .filter((x, i) => i % 2 !== 0)
    .map((i) => i * 2)
    .reverse();
  console.log(result.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
