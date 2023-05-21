function cookingNumber(number, first, second, third, forth, five) {
  let num = Number(number);
  let allComands = `${first},${second},${third},${forth},${five}`.split(",");

  for (const command of allComands) {
    switch (command) {
      case "chop":
        num = num / 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;

      case "spice":
        num += 1;
        break;

      case "bake":
        num *= 3;
        break;

      case "fillet":
        let percentage = num * 0.2;
        num -= percentage;
        break;
      default:
        break;
    }
    console.log(num);
  }
}
cookingNumber("9", "dice", "spice", "chop", "bake", "fillet");
