function maxSecOfElements(numbers) {
  let newArr = [];
  let isSameNumber = false;
  let numberLength = numbers.length;
  let lastNumber = 0;
  for (let i = 0; i <= numberLength - 1; i++) {
    let currentNumber = Number(numbers[i]);
    if (lastNumber === currentNumber) {
      newArr.push(currentNumber);
      isSameNumber = true;
    }
    lastNumber = currentNumber;
  }
  console.log(newArr);
}
maxSecOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
