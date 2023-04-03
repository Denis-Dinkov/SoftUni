function mathPower(number, raiser) {
  let newNum = 1;
  for (let i = 1; i <= raiser; i++) {
    newNum = newNum * number;
  }
  console.log(newNum);
}
