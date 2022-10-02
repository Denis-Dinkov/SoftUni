function specialNumbers(number) {
  for (let i = 1; i <= number; i++) {
    let isTrue = false;
    let currentNumber = i;
    if (currentNumber % 5 == 0) {
      isTrue = true;
      console.log(`${currentNumber} -> True`);
    }
    if (currentNumber % 7 == 0) {
      isTrue = true;
      console.log(`${currentNumber} -> True`);
    }
    if (currentNumber % 11 == 0) {
      isTrue = true;
      console.log(`${currentNumber} -> True`);
    }
    if (isTrue == false) {
      console.log(`${currentNumber} -> False`);
    }
  }
}
specialNumbers(15);
