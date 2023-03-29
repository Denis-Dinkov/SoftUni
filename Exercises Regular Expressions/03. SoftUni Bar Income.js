function bar(input) {
  let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g;

  let totalSpend = 0;
  let index = 0;

  while (input[index] !== "end of shift") {
    let currentRow = input[index];
    let customer = pattern.exec(currentRow);

    if(customer !== null){
    let name = customer.groups["customer"];
    let product = customer.groups["product"];
    let count = Number(customer.groups["count"]);
    let price = Number(customer.groups["price"]);
    let spendMoney = price * count;

    console.log(`${name}: ${product} - ${spendMoney.toFixed(2)}`);
    totalSpend += spendMoney;
  }

    
    index++;
    customer = pattern.exec(currentRow);
  }

  console.log(`Total income: ${totalSpend.toFixed(2)}`);
}
bar([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
