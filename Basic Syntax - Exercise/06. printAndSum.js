function printAndSum(start, end) {
  let num = "";
  let sum = 0;
  for (i = start; i <= end; i++) {
    num += ` ${i}`;
    sum += i;
  }
  console.log(num);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
