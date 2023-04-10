function registartion(input) {
  let username = input.shift();
  let command = input.shift();
  while (command !== "Registration") {
    let currentLine = command.split(" ");
    let newKey = "";
    switch (currentLine[0]) {
      case "Letters":
        let type = currentLine[1];

        for (const word of username) {
          newKey += type == "Upper" ? word.toUpperCase() : word.toLowerCase();
        }
        username = newKey;
        console.log(username);
        break;

      case "Reverse":
        let startIndex = Number(currentLine[1]);
        let endIndex = Number(currentLine[2]);
        let indexSum = startIndex + endIndex;
        if (indexSum >= 0 && indexSum <= username.length) {
          let deletePart = username.substring(startIndex, endIndex);
          newKey = username
            .substring(startIndex, endIndex + 1)
            .split("")
            .reverse()
            .join("");
          username.replace(deletePart, newKey);
          console.log(newKey);
        }
        break;

      case "Substring":
        let searchingString = currentLine[1];
        if (username.includes(searchingString)) {
          username = username.replace(searchingString, "");
          console.log(username);
        } else {
          console.log(
            `The username ${username} doesn't contain ${searchingString}.`
          );
        }
        break;

      case "Replace":
        let char = currentLine[1];

        for (const word of username) {
          if (word === char) {
            username = username.replace(word, "-");
          }
        }

        console.log(username);
        break;

      case "IsValid":
        let currentChar = currentLine[1];
        if (username.includes(currentChar)) {
          console.log("Valid username.");
        } else {
          console.log(`${currentChar} must be contained in your username.`);
        }
        break;

      default:
        break;
    }

    command = input.shift();
  }
}
registartion([
  "ThisIsSoftUni",
  "Reverse 1 3",
  "Replace S",
  "Substring hi",
  "Registration",
]);
