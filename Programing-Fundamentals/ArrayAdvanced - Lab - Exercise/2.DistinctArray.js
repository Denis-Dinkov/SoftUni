function distinctArray(input) {
  let newArr = [];
  let length = input.length;
  for (let i = 0; i < length; i++) {
    if (!newArr.includes(input[i])) {
      newArr.push(input[i]);
    }
  }
  console.log(newArr.join(" "));
}
