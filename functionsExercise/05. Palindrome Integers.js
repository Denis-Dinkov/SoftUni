function palindromeIntegers(numbers) {
  let numbersLength = numbers.length;
  for (let i = 0; i < numbersLength; i++) {
    let currentNumber = numbers[i];
    let numberToString = currentNumber.toString();
    let reversedNumber = numberToString.split("").reverse().join("");
    if (numberToString === reversedNumber) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

palindromeIntegers([32, 2, 232, 1010]);
