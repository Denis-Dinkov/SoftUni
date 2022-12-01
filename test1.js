function walking(input) {
  let index = 0;
  let target = 10000;
  let command = input[index];
  index++;
  let totalSteps = 0;
  let isSheReachedGoals = false;
  while (command !== "Going home") {
    let steps = Number(command);
    totalSteps += steps;
    if (totalSteps >= target) {
      let diff = Math.abs(totalSteps - target);
      console.log(`Goal reached! Good job! `);
      console.log(`${diff} steps over the goal!`);
      isSheReachedGoals = true;
      break;
    }
    command = input[index];
    index++;
  }
  if (isSheReachedGoals === false) {
    if (command === "Going home") {
      let steps = Number(input[index]);
      index++;
      totalSteps += steps;
      let diff = Math.abs(totalSteps - target);
      if (totalSteps >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
      } else console.log(`${diff} more steps to reach goal.`);
    }
  }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
