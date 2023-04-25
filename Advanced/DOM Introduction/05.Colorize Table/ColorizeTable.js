function colorize() {
  let tableRows = document.querySelectorAll("tr:nth-of-type(2n) td");

  let rows = Array.from(tableRows)
  for (const x of rows) {
    x.style.backgroundColor = 'teal';
  }
}
