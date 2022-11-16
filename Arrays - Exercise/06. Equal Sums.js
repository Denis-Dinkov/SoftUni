function equalSums(index) {
  let isEqual = "no";
  for (let i = 0; i < index.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let left = 0; left < i; left++) {
      leftSum += index[left];
    }

    for (let right = i + 1; right < index.length; right++) {
      rightSum += index[right];
    }

    if (leftSum === rightSum) {
      isEqual = i;
    }
  }
  console.log(isEqual);
}
equalSums([1]);
