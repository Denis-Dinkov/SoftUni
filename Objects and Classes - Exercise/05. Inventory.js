function inventory(input) {
  let players = [];

  for (const line of input) {
    let [name, level, items] = line.split(" / ");
    let currentHero = {
      name,
      level,
      items,
    };
    players.push(currentHero);
  }

  players.sort((a, b) => a.level - b.level);
  players.forEach((player) => {
    console.log(`Hero: ${player.name}`);
    console.log(`level => ${player.level}`);
    console.log(`items => ${player.items}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
