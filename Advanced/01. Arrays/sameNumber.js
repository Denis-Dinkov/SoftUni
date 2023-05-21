  function sameNumber(input) {
    let sum = 0;
    let isValid = true;
    let numbersArr = input.toString();
    let lastNumber = Number(numbersArr[0]);
    for (let i = 0; i < numbersArr.length; i++) {
      let currentNumber = Number(numbersArr[i]);

      if (!(lastNumber === currentNumber)) {
        isValid = false;
      }
      sum += currentNumber;
      lastNumber = currentNumber;
    }

    console.log(isValid);
    console.log(sum);
  }
sameNumber(1234);
