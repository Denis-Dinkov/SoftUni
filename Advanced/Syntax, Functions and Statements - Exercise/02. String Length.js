function stringLength(first, second, third) {
  let sumLength = first.length + second.length + third.length;
  let average = sumLength / 3;
  console.log(sumLength);
  console.log(Math.floor(average));
}
stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
