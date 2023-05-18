function solution() {
  let foodsStock = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 2,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 10,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };


  function comands(input) {
    let [command, type, quantity] = input.split(" ");
    switch (command) {
      case "restock":
        for (const food in foodsStock) {
          foodsStock[food][type] += Number(quantity);
        }
        return console.log("Success");
        break;

      default:
        break;
    }
  };
  


}
let manager = solution();

console.log(manager("restock flavour 50")); // Success

console.log(manager("prepare lemonade 4"));
