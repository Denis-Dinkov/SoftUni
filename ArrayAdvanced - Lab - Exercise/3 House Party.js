function houseParty(input) {
  let newArr = [];
  for (const el of input) {
    let command = el.split(" ");
    let name = command[0];
    if (!command.includes("not")) {
      if (newArr.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        newArr.push(name);
      }
    } else {
      if (newArr.includes(name)) {
        let currentIndex = newArr.indexOf(name);
        newArr.splice(currentIndex, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(newArr.join("\n"));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
