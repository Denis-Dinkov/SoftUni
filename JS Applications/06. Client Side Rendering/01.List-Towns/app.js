import { html, render } from "../node_modules/lit-html/lit-html.js";

const form = document
  .querySelector(".content")
  .addEventListener("submit", showTowns);
const target = document.getElementById("root");

function showTowns(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const towns = form.get("towns").split(", ");

  if (towns != "") {
    const items = (towns) => html`
      <ul>
        ${towns.map((town) => html`<li>${town}</li>`)}
      </ul>
    `;
    render(items(towns), target);
  }
}
