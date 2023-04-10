function battle(input) {
  let players = {};
  let currentLine = input.shift();

  while (currentLine !== "Results") {
    let line = currentLine.split(":");

    switch (line[0]) {
      case "Add":
        let name = line[1];
        let health = Number(line[2]);
        let energy = Number(line[3]);
        if (!players.hasOwnProperty(name)) {
          players[name] = {
            health: health,
            energy: energy,
          };
        } else {
          players[name].health += health;
        }
        break;

      case "Attack":
        let atackerName = line[1];
        let defender = line[2];
        let damage = Number(line[3]);
        if (
          players.hasOwnProperty(atackerName) & players.hasOwnProperty(defender)
        ) {
          players[atackerName].energy -= 1;
          players[defender].health -= damage;
          if (players[defender].health <= 0) {
            delete players[defender];
            console.log(`${defender} was disqualified!`);
          }

          if (players[atackerName].energy <= 0) {
            delete players[atackerName];
            console.log(`${atackerName} was disqualified!`);
          }
        }
        break;
      case "Delete":
        let userName = line[1];
        delete players[userName];
        if (userName === "All") {
          players = {};
        }
        break;
      default:
        break;
    }
    currentLine = input.shift();
  }
  let peopleCount = Object.keys(players);
  console.log(`People count: ${peopleCount.length}`);
  for (const name in players) {
    console.log(`${name} - ${players[name].health} - ${players[name].energy}`);
  }
}

battle([
  "Add:Bonnie:3000:5",
  "Add:Kent:10000:10",
  "Add:Johny:4000:10",
  "Attack:Johny:Bonnie:400",
  "Add:Johny:3000:5",
  "Add:Peter:7000:1",
  "Delete:All",
  "Results",
]);
