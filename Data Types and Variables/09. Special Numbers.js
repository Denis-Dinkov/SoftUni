function specialNumbers(number) {
  for (let i = 1; i <= number; i++) {
    let sum = 0;
    let currentNumber = i.toString();
    for (let k = 0; k < currentNumber.length; k++) {
      sum += Number(currentNumber[k]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else console.log(`${i} -> False`);
    sum = 0;
  }
}
specialNumbers(15);
