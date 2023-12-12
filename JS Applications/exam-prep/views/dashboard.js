import { html } from "../node_modules/lit-html/lit-html.js";
import { dataService } from "../src/dataService.js";

const dashboardTem = (data) => html`
  <h2>Fruits</h2>
  ${data.length > 0
    ? html`<section id="dashboard">
        ${data.map((item) => fruitCard(item))}
      </section>`
    : html`<h3 class="nothing">Nothing to see yet</h3>`}
`;

const carCard = (item) => html`
  <div class="fruit">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p>${item.description}</p>
    <a class="details-btn" href="/details/${item._id}">More Info</a>
  </div>
`;

export async function showDashboard(ctx) {
  const data = await dataService.getAll();
  ctx.render(dashboardTem(data));
}
