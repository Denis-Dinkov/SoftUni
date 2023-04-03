function inventory(input) {
  let obj = [];
  input.forEach((line) => {
    let [name, heroLevel, items] = line.split(" / ");
    let player = {
      name: name,
      heroLevel: Number(heroLevel),
      items: items,
    };

    obj.push(player);
  });

  obj.sort((a, b) => a.heroLevel - b.heroLevel);
  obj.forEach((line) => {
    console.log(`Hero: ${line.name}`);
    console.log(`level => ${line.heroLevel}`);
    console.log(`items => ${line.items}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
