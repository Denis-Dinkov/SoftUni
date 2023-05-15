function sortArray(num, order) {
  if (order == "asc") {
    num.sort((a, b) => a - b);
  } else if (order == "desc") {
    num.sort((a, b) => b - a);
  }

  return num;
}

console.log(sortArray([14, 7, 17, 6, 8], "asc"));
