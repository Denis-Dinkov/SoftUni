function NegativeOrPositiveNumber(input) {
  let newArr = [];
  for (const number of input) {
    if (number < 0) {
      newArr.unshift(number);
    } else {
      newArr.push(number);
    }
  }
  console.log(newArr.join("\n"));
}
NegativeOrPositiveNumber(["3", "-2", "0", "-1"]);
