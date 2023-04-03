function evenAndOdd(input) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i <= input.length - 1; i++) {
    let tempNumber = Number(input[i]);
    if (tempNumber % 2 === 0) {
      evenSum += tempNumber;
    } else {
      oddSum += tempNumber;
    }
  }
  let diff = evenSum - oddSum;
  console.log(diff);
}
evenAndOdd([3, 5, 7, 9]);
