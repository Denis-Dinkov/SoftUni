function reverseInPlace(input) {
  for (let i = 0; i < input.length / 2; i++) {
    let tempElement = input[i];
    let previusIndex = input[input.length - 1 - i];
    input[i] = input[previusIndex];
    input[previusIndex] = input[tempElement];
  }
  console.log(input.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
