function sumOfOddNumbers(number) {
  let count = number;
  let num = 1;
  let sum = 0;
  while (count >= 1) {
    sum += num;
    count--;

    console.log(num);
    num += 2;
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
