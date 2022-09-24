function vacation(group, typeGroup, dayOfWeek) {
  let price = 0;
  let totalPrice = 0;
  switch (typeGroup) {
    case "Students":
      if (dayOfWeek === "Friday") {
        price = 8.45;
      } else if (dayOfWeek === "Saturday") {
        price = 9.8;
      } else if (dayOfWeek === "Sunday") {
        price = 10.46;
      }
      totalPrice = price * group;
      if (group >= 30) {
        totalPrice *= 0.85;
      }
      break;
    case "Business":
      if (dayOfWeek === "Friday") {
        price = 10.9;
      } else if (dayOfWeek === "Saturday") {
        price = 15.6;
      } else if (dayOfWeek === "Sunday") {
        price = 16;
      }
      if (group >= 100) {
        group -= 10;
      }
      totalPrice = price * group;
      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        price = 15;
      } else if (dayOfWeek === "Saturday") {
        price = 20;
      } else if (dayOfWeek === "Sunday") {
        price = 22.5;
      }
      totalPrice = price * group;
      if (group >= 10 && group <= 20) {
        totalPrice *= 0.95;
      }
      break;

    default:
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
