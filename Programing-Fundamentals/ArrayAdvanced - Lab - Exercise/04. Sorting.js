function sorting(input) {
  let sortedArr = input.sort((a, b) => a - b);

  let newArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    let biggestNumber = sortedArr.pop();
    let smallestNumber = sortedArr.shift();
    newArr.push(biggestNumber);
    newArr.push(smallestNumber);
  }
  newArr.push(sortedArr.pop());
  newArr.push(sortedArr.shift());

  console.log(newArr.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
