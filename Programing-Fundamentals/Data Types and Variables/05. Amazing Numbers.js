function amazingNumbers(numbers) {
  let numString = numbers.toString();
  let sum = 0;
  let isAmazing = false;
  for (i = 0; i < numString.length; i++) {
    let currentNumber = Number(numString[i]);
    sum += currentNumber;
  }
  let sumText = sum.toString();

  for (i = 0; i < sumText.length; i++) {
    let currentDigit = Number(sumText[i]);
    if (currentDigit == 9) {
      isAmazing = true;
      break;
    }
  }

  if (isAmazing) {
    console.log(`${numbers} Amazing? True`);
  } else {
    console.log(`${numbers} Amazing? False`);
  }
}
amazingNumbers(999);
