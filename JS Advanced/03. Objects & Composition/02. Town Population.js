function townPopulation(towns) {
  let obj = {};
  towns.forEach((town) => {
    let [townName, population] = town.split("<->");

    if (!obj[townName]) {
      obj[townName] = 0;
    }

    obj[townName] += Number(population);
  });

  Object.keys(obj).forEach((towns) => {
    console.log(`${towns}: ${obj[towns]}`);
  });
}

townPopulation([
  "Istanbul <-> 100000",

  "Honk Kong <-> 2100004",

  "Jerusalem <-> 2352344",

  "Mexico City <-> 23401925",

  "Istanbul <-> 1000",
]);
