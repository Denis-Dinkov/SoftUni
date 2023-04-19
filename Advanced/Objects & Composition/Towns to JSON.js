function townsToJSON(input) {
  let obj = {};
  let pattern =
    /\| (?<town>[A-Z][a-z]+) \| (?<Latitude>[A-Z][a-z]+) \| (?<Longitude>[A-Z][a-z]+)/gm;
  let firstLine = input.shift().matchAll(pattern);
  for (const iterator of firstLine) {
    obj
  }
}

townsToJSON([
  "| Town | Latitude | Longitude |",

  "| Sofia | 42.696552 | 23.32601 |",

  "| Beijing | 39.913818 | 116.363625 |",
]);
