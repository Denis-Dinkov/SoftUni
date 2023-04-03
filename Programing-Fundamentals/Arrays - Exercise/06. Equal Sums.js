function equalSums(index) {
<<<<<<< Updated upstream
  let isEqual = "no";
  for (let i = 0; i < index.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
=======
  let indexLength = index.length;
  let isEqual = "no";
  for (let i = 0; i < indexLength; i++) {
    let rightSum = 0;
    let leftSum = 0;
>>>>>>> Stashed changes
    for (let left = 0; left < i; left++) {
      leftSum += index[left];
    }

<<<<<<< Updated upstream
    for (let right = i + 1; right < index.length; right++) {
      rightSum += index[right];
    }

    if (leftSum === rightSum) {
      isEqual = i;
=======
    for (let right = i + 1; right < indexLength; right++) {
      rightSum += index[right];
    }
    if (rightSum === leftSum) {
      isEqual = index[i];
>>>>>>> Stashed changes
    }
  }
  console.log(isEqual);
}
<<<<<<< Updated upstream
equalSums([1]);
=======
equalSums([1, 2]);
>>>>>>> Stashed changes
