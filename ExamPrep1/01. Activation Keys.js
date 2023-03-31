function activationKeys(input) {
  let rawKey = input.shift();

  //Getting instructions
  let currentLine = input.shift();
  while (currentLine !== "Generate") {
    let line = currentLine.split(">>>");
    let command = line.shift();

    switch (command) {
      case "Slice":
        let startDelete = line[0];
        let endDelete = line[1];
        let deleteWords = rawKey.substring(startDelete, endDelete);
        rawKey = rawKey.replace(deleteWords, "");
        console.log(rawKey);
        break;

      case "Contains":
        let searchingWorld = line[0];
        if (rawKey.includes(searchingWorld)) {
          console.log(`${rawKey} contains ${searchingWorld}`);
        } else {
          console.log("Substring not found!");
        }
        break;

      case "Flip":
        let type = line[0];
        let start = line[1];
        let end = line[2];

        let oldKey = rawKey.substring(start, end);
        let newKey =
          type == "Upper" ? oldKey.toUpperCase() : oldKey.toLowerCase();
        rawKey = rawKey.replace(oldKey, newKey);

        console.log(rawKey);
        break;
      default:
        break;
    }

    currentLine = input.shift();
  }

  console.log(`Your activation key is: ${rawKey}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
