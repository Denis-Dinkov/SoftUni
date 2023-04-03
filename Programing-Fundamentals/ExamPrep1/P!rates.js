function pirates(input) {
  let piratesObject = {};
  //Until the "Sail" command is given
  let line = input.shift();

  while (line !== "Sail") {
    let currentLine = line.split("||");
    let city = currentLine[0];
    let people = Number(currentLine[1]);
    let gold = Number(currentLine[2]);
    // let [city, people, gold] = line.split("||");

    if (!piratesObject.hasOwnProperty(city)) {
      piratesObject[city] = {
        people: people,
        gold: gold,
      };
    } else {
      piratesObject[city].people += people;
      piratesObject[city].gold += gold
    }
    line = input.shift();
  }

  //After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given.
  line = input.shift();

  while (line !== "End") {
    let currentAttack = line.split("=>");
    let city = currentAttack[1];
    switch (currentAttack[0]) {
      case "Plunder":
        let killedPeople = Number(currentAttack[2]);
        let stealedGold = Number(currentAttack[3]);

        piratesObject[city].people -= killedPeople;
        piratesObject[city].gold -= stealedGold;
        console.log(
          `${city} plundered! ${stealedGold} gold stolen, ${killedPeople} citizens killed.`
        );

        if (piratesObject[city].people <= 0 || piratesObject[city].gold <= 0) {
          delete piratesObject[city];
          console.log(`${city} has been wiped off the map!`);
        }

        break;

      case "Prosper":
        let town = currentAttack[1];
        let increaseGold = Number(currentAttack[2]);

        if (increaseGold >= 0) {
          piratesObject[city].gold += increaseGold;
          console.log(
            `${increaseGold} gold added to the city treasury. ${town} now has ${piratesObject[city].gold} gold.`
          );
        } else {
          console.log(`Gold added cannot be a negative number!`);
        }
        break;
    }
    line = input.shift();
  }

  //print output
  let keys = Object.keys(piratesObject);

  if (keys.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${keys.length} wealthy settlements to go to:`
    );
    for (const key in piratesObject) {
      console.log(
        `${key} -> Population: ${piratesObject[key].people} citizens, Gold: ${piratesObject[key].gold} kg`
      );
    }
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
}

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
