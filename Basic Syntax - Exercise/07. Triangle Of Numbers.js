function triangeNumber(number) {
  for (i = 1; i <= number; i++) {
    let count = "";
    for (j = 1; j <= i; j++) {
      count += `${i} `;
    }
    console.log(count);
  }
}

triangeNumber(11);
