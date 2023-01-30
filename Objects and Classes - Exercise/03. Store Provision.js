function storeProvision(stock, delivery) {
  let loot = {};

  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    let quantity = Number(stock[i + 1]);

    loot[product] = quantity;
  }

  for (let i = 0; i < delivery.length; i += 2) {
    let product = delivery[i];
    let quantity = Number(delivery[i + 1]);

    if (loot.hasOwnProperty(product)) {
      loot[product] += quantity;
    } else {
      loot[product] = quantity;
    }
  }

  for (const key in loot) {
    console.log(`${key} -> ${loot[key]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
