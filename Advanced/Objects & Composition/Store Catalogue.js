function storageCataloge(input) {
  let obj = {};

  input = input.sort((a, b) => a.localeCompare(b));
  for (const item of input) {
    let firstWord = item[0];
    if (!obj[firstWord]) {
      obj[firstWord] = [];
    }

    obj[firstWord].push(item);
  }

  for (const word in obj) {
    console.log(word);

    for (const item of obj[word]) {
      let [name, price] = item.split(" : ");
      price = Number(price);
      console.log(` ${name}: ${price}`);
    }
  }
}
storageCataloge([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
