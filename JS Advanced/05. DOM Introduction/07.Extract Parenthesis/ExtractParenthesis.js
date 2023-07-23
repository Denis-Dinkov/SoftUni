function extract(content) {

  let firstNumber = Number(document.getElementById('firstNumber').value)
  let secondNumber = Number(document.getElementById('secondNumber').value);
  let res = firstNumber - secondNumber;
  console.log(res);
  document.getElementById('result').textContent = res
}