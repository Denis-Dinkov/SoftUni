const home = document.querySelector(".home");
const url = "http://localhost:3030/data/recipes";
const recipeList = home.querySelector(".recipe-list");

export function generateHome() {
  home.style.display = "block";
  fetch(url)
    .then((res) => res.json())
    .then((recipies) => {
      recipeList.innerHTML = "";
      renderRecipes(Object.values(recipies));
    });
}

function renderRecipes(recipes) {
  const fragment = document.createDocumentFragment();
  recipes.forEach((recipe) => {
    fragment.appendChild(recipeElement(recipe));
  });
  recipeList.appendChild(fragment);
}

function recipeElement(recipe) {
  const recipeElement = document.createElement("article");
  recipeElement.classList.add("preview");
  recipeElement.innerHTML = `
  <div class="title">
  <h2>${recipe.name}</h2>
  </div>
  <div class="small">
  <img src=${recipe.img}
  </div>
  `;

  return recipeElement;
}
