function summOfEvenNumber(input) {
  let sum = 0;
  for (let i = 0; i <= input.length - 1; i++) {
    let thisNum = Number(input[i]);
    if (thisNum % 2 === 0) {
      sum += thisNum;
    }
  }
  console.log(sum);
}
summOfEvenNumber(["2", "4", "6", "8", "10"]);
