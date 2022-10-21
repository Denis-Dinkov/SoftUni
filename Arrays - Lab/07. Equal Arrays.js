function equalArrays(firstIndex, secondIndex) {
  let isIdentical = true;
  let indexCounter = 0;
  let sum = 0;
  for (let i = 0; i <= firstIndex.length - 1; i++) {
    let firstNum = Number(firstIndex[i]);
    let secondNum = Number(secondIndex[i]);
    if (firstNum === secondNum) {
      sum += firstNum;
    } else {
      indexCounter += i;
      isIdentical = false;
      break;
    }
  }
  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${indexCounter} index`
    );
  }
}

equalArrays(
  ["1", "2", "3", "4", "5"],

  ["1", "2", "4", "4", "5"]
);
