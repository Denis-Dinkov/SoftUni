function furniture(input) {
  const pattern =
    />>(?<name>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
  let totalMoney = 0;

  console.log("Bought furniture:");
  for (let row of input) {
    let validProduct = pattern.exec(row);
    while (validProduct !== null) {
      let name = validProduct.groups["name"];
      console.log(name);
      let price = Number(validProduct.groups["price"]);
      let quantity = Number(validProduct.groups["quantity"]);
      totalMoney += price * quantity;

      validProduct = pattern.exec(row);
    }
  }

  console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
