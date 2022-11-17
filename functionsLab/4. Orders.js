function orders(type, count) {
  let coffePrice = Number(1.5);
  let waterPrice = Number(1.0);
  let cokePrice = Number(1.4);
  let snacksPrice = Number(2.0);

  switch (type) {
    case "coffee":
      console.log((coffePrice * count).toFixed(2));
      break;
    case "water":
      console.log((waterPrice * count).toFixed(2));
      break;
    case "coke":
      console.log((cokePrice * count).toFixed(2));
      break;
    case "snacks":
      console.log((snacksPrice * count).toFixed(2));
      break;

    default:
      break;
  }
}
orders("water", 5);
