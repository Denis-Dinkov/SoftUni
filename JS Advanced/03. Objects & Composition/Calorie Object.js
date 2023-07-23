function calorieObject(input) {
  let obj = {};

  for (let i = 0; i < input.length; i += 2) {
    let name = input[i];
    let calorie = Number(input[i + 1]);

    obj[name] = calorie;
  }

  console.log(obj);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
