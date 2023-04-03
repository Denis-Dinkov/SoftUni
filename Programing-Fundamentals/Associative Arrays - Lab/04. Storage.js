function storage(input) {
  let map = new Map();

  for (const line of input) {
    let lines = line.split(" ");
    let product = lines[0];
    let quantity = Number(lines[1]);
    if (map.has(product)) {
      let currentQuantity = Number(map.get(product));
      let newQuantity = Number((currentQuantity += quantity));
      map.set(product, newQuantity);
    } else {
      map.set(product, quantity);
    }
  }

  for (const key of map) {
    console.log(`${key[0]} -> ${key[1]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
