function race(input) {
  let namePattern = /[A-Za-z]+/g;
  let numbersPattern = /[0-9]+/g;
  let obj = {};
  let racers = input.shift().split(", ");
  let index = 0;
  while (input[index] !== "end of race") {
    let currentRow = input[index];
    let name = currentRow.match(namePattern).join("");

    if (racers.includes(name)) {
      let distance = currentRow.match(numbersPattern).join("");
      let totalDistance = 0;
      for (const digit of distance) {
        totalDistance += Number(digit);
      }

      if (!obj.hasOwnProperty(name)) {
        obj[name] = totalDistance;
      } else {
        obj[name] += totalDistance;
      }
    }

    index++;
  }

  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
