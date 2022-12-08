function painting(input) {
  let newArr = input.shift().split(" ");
  for (const index of input) {
    let el = index.split(" ");
    let command = el[0];
    let first = el[1];
    let seccond = el[2];

    switch (command) {
      case "Change":
        if (newArr.includes(first)) {
          newArr.splice(newArr.indexOf(first), 1, seccond);
        }
        break;

      case "Hide":
        if (newArr.includes(first)) {
          let newArr = newArr.filter((x) => x !== first);
        }

        break;

      case "Switch":
        if (newArr.includes(first) && newArr.includes(seccond)) {
          let temp = first;
          newArr.splice(newArr.indexOf(first), 1, seccond);
          newArr.splice(newArr.indexOf(seccond), 1, temp);
        }

        break;

      case "Insert":
        newArr.insert(newArr.indexOf(first), 0, seccond);

        break;
      case "Reverse":
        newArr.reverse();
        break;
      default:
        break;
    }
    if (command === "End") {
      break;
    }
  }
  console.log(newArr.join(" "));
  console.log(newArr.length);
}
painting([
  "115 101 114 73 111 116 75",
  "Insert 5 114",
  "Switch 116 73",
  "Hide 76",
  "END",
]);
