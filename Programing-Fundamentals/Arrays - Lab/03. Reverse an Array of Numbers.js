function reverse(number, array) {
  let newArr = [];
  for (let i = number - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  console.log(newArr.join(""));
}
reverse(4, [-1, 20, 99, 5]);
