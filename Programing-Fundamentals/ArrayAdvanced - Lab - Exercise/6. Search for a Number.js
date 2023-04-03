function searchForNumber(array, req) {
  let elementsTaken = req[0];
  let numbersToDelete = req[1];
  let number = req[2];
  let counter = 0;
  let newArr = array.slice(0, elementsTaken);
  newArr.splice(0, numbersToDelete);
  for (const num of newArr) {
    if (num === number) {
      counter++;
    }
  }

  console.log(`Number ${number} occurs ${counter} times.`);
}
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
