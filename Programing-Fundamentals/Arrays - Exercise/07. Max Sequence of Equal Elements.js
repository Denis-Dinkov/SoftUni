function maxSequenceOfElements(input) {
  let newArr = [];
  let arrL = input.length;
  for (let i = 0; i < arrL; i++) {
    let currentArray = [];
    let currentNumber = input[i];
    for (let j = i; j < arrL; j++) {
      let secondCurrentNumber = input[j];
      if (currentNumber === secondCurrentNumber) {
        currentArray.push(input[i]);
      } else {
        break;
      }
    }
    if (currentArray.length > newArr.length) {
      newArr = currentArray;
    }
  }
  console.log(newArr.join(" "));
}
maxSequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
