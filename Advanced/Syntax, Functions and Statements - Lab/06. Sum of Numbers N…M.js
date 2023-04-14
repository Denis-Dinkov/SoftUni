function sumOfNumbers(a, b) {
  let firstNum = Number(a);
  let secondNum = Number(b);
  let sum = 0;
  for (let i = firstNum; i <= secondNum; i++) {
    sum += i;
  }
  return sum;
}
sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");

let da = sumOfNumbers(1, 4);
console.log(da);
