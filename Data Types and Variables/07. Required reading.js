function requiredReading(first, second, third) {
  let numberOfPages = first;
  let pagesReadForOneHour = second;
  let daysLeft = third;

  let totalTimeRead = numberOfPages / pagesReadForOneHour;
  let requiredHoursPerDay = totalTimeRead / daysLeft;
  console.log(requiredHoursPerDay);
}
requiredReading(
  432,

  15,

  4
);
