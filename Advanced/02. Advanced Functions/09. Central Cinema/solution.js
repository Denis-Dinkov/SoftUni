function solve() {
  const addMovieFunction = document
    .querySelector("#container button")
    .addEventListener("click", addMovie);
  const moviesOnScreenElement = document.querySelector("#movies ul");
  const archiveElement = document.querySelector("#archive ul");
  archiveElement.nextElementSibling.addEventListener(
    "click",
    () => (archive.innerHTML = null)
  );

  function addMovie(e) {
    e.preventDefault();
    let name = document.querySelector('input[placeholder="Name"]');
    let hall = document.querySelector('input[placeholder="Hall"]');
    let ticketPrice = document.querySelector(
      'input[placeholder="Ticket Price"]'
    );

    if (
      (name.value && hall.value && Number(ticketPrice.value)) ||
      ticketPrice.value === "0"
    ) {
      moviesOnScreenElement.innerHTML += `<li>
      <span>${name.value}</span>
      <strong>Hall: ${hall.value}</strong>
      <div>
        <strong>${Number(ticketPrice.value)}</strong>
        <input placeholder="Tickets Sold">
        <button>Archive</button>
      </div>
  </li>`;

      name.value = null;
      hall.value = null;
      ticketPrice.value = null;
    }

    let archiveButtons = Array.from(
      moviesOnScreenElement.querySelectorAll("button")
    ).forEach((btn) => btn.addEventListener("click", archiveFunction));

    function archiveFunction(e) {
      let ticketPrice = e.target.parentNode.children[0];
      let ticketSold = e.target.parentNode.children[1];
      let movieName = e.target.parentNode.parentNode.children[0].textContent;

      if (Number(ticketSold.value) || ticketsSold.value === "0") {
        archiveElement.innerHTML += `
        <li>
        <span>${movieName}</span>
        <strong>Total amount: ${(
          Number(ticketPrice.textContent) * Number(ticketSold.value)
        ).toFixed(2)}</strong>
        <button>Delete</button>
        </li>
       
       `;
        e.target.parentNode.parentNode.remove();
        Array.from(archiveElement.querySelectorAll("button")).forEach((btn) =>
          btn.addEventListener("click", (btn) => btn.target.parentNode.remove())
        ); // remove  movie from archive
      }
    }
  }
}
