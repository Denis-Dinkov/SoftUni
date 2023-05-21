function sumTable() {
  let tables = Array.from(document.querySelectorAll("td"));
  let sum = 0;
  let total = document.getElementById("sum");

  for (let i = 0; i < tables.length - 2; i++) {
    if (!(i % 2 === 0)) {
      sum += Number(tables[i].textContent);
    }
  }

  total.textContent = sum;
}
