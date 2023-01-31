function meetings(input) {
  let obj = {};

  input.forEach((line) => {
    let [weekDay, name] = line.split(" ");

    if (obj.hasOwnProperty(weekDay)) {
      console.log(`Conflict on ${weekDay}!`);
    } else {
      obj[weekDay] = name;
      console.log(`Scheduled for ${weekDay}`);
    }
  });

  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
