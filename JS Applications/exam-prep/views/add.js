import { html } from "../node_modules/lit-html/lit-html.js";
import { dataService } from "../src/dataService.js";

const addTemplate = () => html` <section id="create">
  <div class="form">
    <h2>Add Fruit</h2>
    <form @submit="${onsubmit}class" ="create-form">
      <input type="text" name="name" id="name" placeholder="Fruit Name" />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image"
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fruit</button>
    </form>
  </div>
</section>`;

let context = null
export function showAdd(ctx) {
  ctx.render(addTemplate());
  context = ctx
}

async function onsubmit(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const name = form.get("name");
  const imageUrl = form.get("imageUrl");
  const description = form.get("description");
  const nutrition = form.get("nutrition");
  const data = {
    name,
    imageUrl,
    description,
    nutrition,
  };

  if (!name || !imageUrl || !description || !nutrition) {
    return windows.alert("Error");
  }
  await dataService.createFruit(data);
  context.goTo("/dashboard")
}
