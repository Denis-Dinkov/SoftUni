function train(input) {
  let arr = input.shift().split(" ").map(Number);
  let maxCapacity = input.shift();
  let inputLength = input.length;
  for (let i = 0; i < inputLength; i++) {
    let command = input[i].split(" ");
    if (command.length == 2) {
      let number = Number(command[1]);
      arr.push(number);
    } else {
      for (let j = 0; j < arr.length; j++) {
        let sum = Number(command) + arr[j];

        if (sum <= maxCapacity) {
          arr[j] += Number(command);
          break;
        }
      }
    }
  }
  console.log(arr.join(" "));
}
