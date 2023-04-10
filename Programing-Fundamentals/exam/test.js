function message(input) {
  let inputCounter = Number(input.shift());
  let pattern =
  /(?<tag>[*|@])(?<name>[A-Z][a-z]*)\1: (?<number1>\[[\w]\]\|){3}/gm
  let index = 0;

  while (inputCounter > index) {
    let line = input[index];
    let matchArray = line.matchAll(pattern);
    if (matchArray && matchArray.length > 0) {
      for (const match of matchArray) {
        let name = match.groups.name;
        let firstLetter = match.groups.letter.charCodeAt();
        let secondLetter = match.groups.letter2.charCodeAt();
        let thirdLetter = match.groups.letter3.charCodeAt();

        console.log(`${name}: ${firstLetter} ${secondLetter} ${thirdLetter}`);
      }
    } else {
      console.log("no matches");
    }

    index++;
  }
}
message([
  "3",
  "*Request*: [I]|[s]|[i]|",
  "*Taggy@: [73]|[73]|[73]|",
  "Should be valid @Taggy@: [v]|[a]|[l]|",
]);
