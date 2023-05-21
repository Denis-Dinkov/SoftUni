function oddPosition(input) {
  let evenPositions = [];

  for (let i = 0; i < input.length; i++) {
    if (!(i % 2 === 0)) {
      evenPositions.push(Number(input[i]));
    }
  }

  let sorted = evenPositions.map((number) => number * 2).reverse();
  return sorted.join(" ");
}



console.log(oddPosition([10, 15, 20, 25]));
console.log(oddPosition([3, 0, 10, 4, 7, 3]))
