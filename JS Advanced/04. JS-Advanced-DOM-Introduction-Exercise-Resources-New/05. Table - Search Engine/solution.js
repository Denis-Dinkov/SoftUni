function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let tableRows = Array.from(document.querySelectorAll("tbody tr"));
    let search = document.getElementById("searchField").value;

    for (const row of tableRows) {
      if (search !== "" && row.innerHTML.includes(search)) {
        row.className = "select";
      } else {
        row.classList.remove("select");
      }
    }
    search.value = "";
  }
}
