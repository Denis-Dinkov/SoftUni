function test(input) {
  let newArr = ["King of Diamonds"];
  let listOfCards = input.shift().split(",");
  let commandsCount = input.shift();
  let isFund;

  for (let i = 0; i <= input.length; i++) {
    let commandType = input.shift().split(",");
    let card = 0;
    let indexPlace = 0;

    switch (commandType[0]) {
      case "Add":
        card = commandType[1];
        isFund = newArr.includes(card);
        if (isFund) {
          console.log("Card is already in the deck");
        } else {
          console.log("Card successfully added");
          newArr.push(card);
        }
        break;

      case "Remove":
        card = commandType[1];
        isFund = newArr.includes(card);
        if (isFund) {
          newArr.splice(card);
          console.log("Card successfully removed");
        } else {
          console.log("Card not found");
        }
        break;
      case "Remove At":
        indexPlace = commandType[1];
        card = commandType[2];
        isFund = newArr.includes(card);
        if (isFund) {
          newArr.splice(card);
          console.log("Card successfully removed");
        } else {
          console.log("Card not found");
        }
        break;
      case "Insert":
        let index = commandType[1];
        let da = commandType[2];
        isFund = newArr.include(card);
        if (isFund) {
          newArr.splice(card);
          console.log("Card successfully removed");
        } else {
          console.log("Card not found");
        }
        break;

      default:
        break;
    }
  }
}
test([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
]);
