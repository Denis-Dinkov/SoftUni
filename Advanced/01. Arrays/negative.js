function res(input) {
  let sorted = input.sort((a, b) => a - b);
  sorted.forEach((num) => {
    console.log(num);
  });
}
res([7, -2, 8, 9]);
