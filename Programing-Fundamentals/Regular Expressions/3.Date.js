function date(input) {
  let dates = input.shift();
  let pattern =
    /\b(?<day>\d{2})(?<separator>[\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

  let result = dates.matchAll(pattern);
  for (const match of result) {
    console.log(
      `Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`
    );
  }
}
date([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
