function sameNumber(num) {
  let numString = "" + num;
  let lastNum = numString[0];
  let sum = Number(lastNum);
  let isValid = false;
  for (let i = 1; i < numString.length; i++) {
    if (lastNum == numString[i]) {
      sum += Number(numString[i]);
      isValid = true;
    } else {
      sum += Number(numString[i]);
      isValid = false;
    }

    lastNum = numString[i];
  }

  console.log(isValid);
  console.log(sum);
}
sameNumber(1234);
