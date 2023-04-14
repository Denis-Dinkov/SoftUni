function solve(input) {
  let counter = Number(input);
  for (let i = 0; i < counter; i++) {
    let sum = "";
    for (let y = 0; y < counter; y++) {
      sum += " * ";
    }
    console.log(sum);
  }
}
solve(2);
