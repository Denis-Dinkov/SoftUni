function daysInAMonth(month, year) {
  let days = new Date(month, year);
  console.log(days.getDate());
}
daysInAMonth(1, 2012);
