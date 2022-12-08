function vacation(input) {
  let days = input.shift();
  let budged = Number(input.shift());
  let peopleCount = Number(input.shift());
  let fuelPricePerKm = Number(input.shift());
  let foodExpenses = Number(input.shift());
  let roomPricePerNight = Number(input.shift());
  let isEnoughMoney = true;

  if (peopleCount > 10) {
    roomPricePerNight = roomPricePerNight * 0.75;
  }
  let totalExpenses =
    roomPricePerNight * peopleCount * days + foodExpenses * peopleCount * days;

  for (let i = 1; i <= input.length; i++) {
    let distance = Number(input[i - 1]);
    let currentExpenses = distance * fuelPricePerKm;
    totalExpenses += currentExpenses;

    if (i % 3 === 0 || i % 5 === 0) {
      let aditionalExpenses = totalExpenses * 0.4;
      totalExpenses += aditionalExpenses;
    } else if (i % 7 === 0) {
      let moreMoney = totalExpenses / peopleCount;
      totalExpenses -= moreMoney;
    }

    if (totalExpenses > budged) {
      let diff = Math.abs(budged - totalExpenses);
      console.log(
        `Not enough money to continue the trip. You need ${diff.toFixed(
          2
        )}$ more.`
      );
      isEnoughMoney = false;
      return;
    }
  }

  if (isEnoughMoney) {
    let diff = Math.abs(budged - totalExpenses);
    console.log(
      `You have reached the destination. You have ${diff.toFixed(
        2
      )}$ budget left.`
    );
  }
}
vacation([
  "7",
  "12000",
  "5",
  "1.5",
  "10",
  "20",
  "512",
  "318",
  "202",
  "154",
  "222",
  "108",
  "123",
]);
