import { html } from "../node_modules/lit-html/lit-html.js";
import { dataService } from "../src/dataService.js";
const detailsTemplate = (item, isOwner) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${item.imageUrl} alt="example1" />
      <p id="details-title">${item.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>
           ${item.description}
          </p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">
           ${item.nutrition}
          </p>
        </div>
        ${isOwner ? html`<div id="action-buttons">
          <a href="/edit/${item._id}" id="edit-btn">Edit</a>
          <a href="/delete/${item._id}" id="delete-btn">Delete</a>
        </div>`: ''}
        
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const data = await dataService.getOne(id);
  const isOwner = data._ownerId ===  );
  console.log(localStorage.getItem("userId"));
  ctx.render(detailsTemplate(data, isOwner));
}
