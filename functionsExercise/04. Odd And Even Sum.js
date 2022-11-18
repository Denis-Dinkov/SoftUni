function oddAndEvenSum(input) {
  let inputToString = input.toString();
  let sumOfOdd = 0;
  let sumOfEven = 0;
  let inputLength = inputToString.length;
  for (let i = 0; i < inputLength; i++) {
    let currentNumber = Number(inputToString[i]);
    if (currentNumber % 2 === 0) {
      sumOfEven += currentNumber;
    } else {
      sumOfOdd += currentNumber;
    }
  }
  console.log(`Odd sum = ${sumOfOdd}, Even sum = ${sumOfEven}`);
}
oddAndEvenSum(1000435);
