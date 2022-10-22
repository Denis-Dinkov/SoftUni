function arrayRotation(arr, rotation) {
  let newArr = [];
  for (let i = 0; i < rotation; i++) {
    let tempElement = arr.shift();
    arr.push(tempElement);
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
