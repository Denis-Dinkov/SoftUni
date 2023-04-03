function sumOfDigits(num) {
  let numText = num.toString();
  let sum = 0;
  for (i = 0; i < numText.length; i++) {
    sum += Number(numText[i]);
  }
  console.log(sum);
}
sumOfDigits(97561);
