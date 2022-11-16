function magicSum(array, number) {
  let arrayL = array.length;
  for (let i = 0; i < arrayL; i++) {
    for (let j = i + 1; j < arrayL; j++) {
      if (array[i] + array[j] === number) {
        console.log(`${array[i]} ${array[j]}`);
      }
    }
  }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
