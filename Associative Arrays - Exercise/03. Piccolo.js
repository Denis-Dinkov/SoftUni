function piccolo(input) {
  let obj = {};
  for (const person of input) {
    let [command, carNumber] = person.split(", ");
    if (command === "IN") {
      obj[carNumber] = 0;
    } else if (command === "OUT") {
      delete obj[carNumber];
    }
  }

  let sortedCars = Object.keys(obj).sort((a, b) => a[0].localeCompare(b[0]));

  sortedCars.forEach((car) => console.log(car));
}
piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
