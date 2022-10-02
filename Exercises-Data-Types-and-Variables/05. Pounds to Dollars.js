function poundsToDollars(num) {
  let britishPounds = Number(num);
  let conversionRate = 1.31;
  let dollars = britishPounds * 1.31;
  console.log(dollars.toFixed(3));
}
poundsToDollars("39");
