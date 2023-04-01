function imitationGame(input) {
  //getting incrupted message
  let incruptedMessage = input.shift();

  //recieving strings with instruction
  let currentLine = input.shift();
  while (currentLine !== "Decode") {
    let command = currentLine.split("|");
    let commandType = command[0];

    switch (commandType) {
      case "Move":
        let deleteCount = Number(command[1]);
        let partToDelte = incruptedMessage.substring(0, deleteCount);
        incruptedMessage = incruptedMessage
          .replace(partToDelte, "")
          .concat(partToDelte);
        break;

      case "Insert":
        let index = command[1];
        let value = command[2];
        let oldPart = incruptedMessage.substring(0, index);
        let newPart = oldPart.concat(value);
        incruptedMessage = incruptedMessage.replace(oldPart, newPart);
        break;

      case "ChangeAll":
        let substring = command[1];
        let replacement = command[2];
        let splitedKey = incruptedMessage.split("");
        for (let i = 0; i <= splitedKey.length; i++) {  
          if (splitedKey[i] === substring) {
            splitedKey[i] = replacement;
          }
        }

        incruptedMessage = splitedKey.join('');
        break;

      default:
        break;
    }

    currentLine = input.shift();
  }

  console.log(`The decrypted message is: ${incruptedMessage}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
