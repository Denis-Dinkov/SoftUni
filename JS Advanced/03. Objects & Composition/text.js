let pattern =
  /\| (?<t>[A-Z][a-z]+) \| (?<Latitude>[A-Z][a-z]+) \| (?<Longitude>[A-Z][a-z]+)/g;
let text = "| Town | Latitude | Longitude |";

let matches = text.matchAll(pattern);
console.log(matches.groups.t);
