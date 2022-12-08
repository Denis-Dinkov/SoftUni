function test(input) {
  let firstEmployee = Number(input[0]);
  let secondEmployee = Number(input[1]);
  let thirdEmplyee = Number(input[2]);
  let questions = Number(input[3]);
  let answeredQuestions = 0;
  let hours = 0;

  while (answeredQuestions < questions) {
    hours++;
    let studentAnweseredForHour = firstEmployee + secondEmployee + thirdEmplyee;
    if (!(hours == 3)) {
      answeredQuestions += studentAnweseredForHour;
    } else {
      break;
    }
  }

  console.log(`Time needed: ${hours}h.`);
}
test([1, 2, 3, 45]);
