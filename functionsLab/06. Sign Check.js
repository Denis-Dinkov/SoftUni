function signCheck(numberOne, numberTwo, numberThree) {
  let negativeCount = 0;

  if (isNegative(numberOne)) {
    negativeCount++;
  }

  if (isNegative(numberTwo)) {
    negativeCount++;
  }

  if (isNegative(numberThree)) {
    negativeCount++;
  }

  if (negativeCount % 2 === 0) {
    return "Positive";
  } else {
    return "Negative";
  }

  function isNegative(number) {
    if (number < 0) {
      return number < 0;
    }
  }
}
signCheck();
