function fruit(fruit, grams, price) {
  let kilograms = Number(grams) / 1000;
  let cost = price * kilograms;

  console.log(
    `I need $${cost.toFixed(2)} to buy ${kilograms.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruit("orange", 2500, 1.8);
