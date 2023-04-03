function adAstra(input) {
  let totalCalories = 0;
  let productsObj = [];
  //get products
  let text = input.shift();
  let pattern =
    /([#|\|])(?<name>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;
  let matches = text.matchAll(pattern);
  //calculating calories

  for (const product of matches) {
    let productCalories = product.groups.calories;
    let productName = product.groups.name;
    let productDate = product.groups.date;

    productsObj.push(
      `Item: ${productName}, Best before: ${productDate}, Nutrition: ${productCalories}`
    );
    totalCalories += Number(productCalories);
  }
  let days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  productsObj.forEach((product) => {
    console.log(product);
  });
}
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
