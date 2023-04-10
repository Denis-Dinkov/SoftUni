function message(input) {
  let inputCounter = Number(input.shift());
  let pattern =
    /(?<tag>[*|@])(?<name>[A-Z][a-z]*)\1: (?<number1>\[\w])\|(?<number2>\[\w])\|(?<number3>\[\w])\|$/gm;
  let index = 0;
  while (inputCounter > index) {
    let line = input[index];
    let check = line.match(pattern);
    let matches = line.matchAll(pattern);
 
    if (check != null) {
      for (const match of matches) {
        let name = match.groups.name;
        let firstLetter = match.groups.number1.split([])[1].charCodeAt();

        let secondLetter = match.groups.number2.split([])[1].charCodeAt();

        let thirdLetter = match.groups.number3.split([])[1].charCodeAt();

        console.log(`${name}: ${firstLetter} ${secondLetter} ${thirdLetter}`);
      }
    } else {
      console.log("Valid message not found!");
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
