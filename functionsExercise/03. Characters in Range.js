function charInRange(first, second) {
  let rangeStart = Math.min(first.charCodeAt(), second.charCodeAt());
  let rangeStop = Math.max(first.charCodeAt(), second.charCodeAt());
  let newArr = [];
  for (let i = rangeStart + 1; i < rangeStop; i++) {
    let currentChar = String.fromCharCode(i);
    newArr.push(currentChar);
  }

  console.log(newArr.join(" "));
}
charInRange(
  "C",

  "#"
);
