import { render } from "./node_modules/lit-html/lit-html.js";
// import { userService } from "./src/userService.js";
// import { userHelper } from "./src/userHelper.js";
import page from "./node_modules/page/page.mjs";

import { showHome } from "./views/home.js";
import { showDashboard } from "./views/dashboard.js";
import { showSearch } from "./views/search.js";
import { showAdd } from "./views/add.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showLogout } from "./views/logout.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";


console.log('asdasdasdasdas')
const root = document.querySelector("main");
const userNav = document.querySelector(".user");
const guestNav = document.querySelector(".guest");

page(decorateContext);
page("/", showHome);
page("/dashboard", showDashboard);
page("/search", showSearch);
page("/add", showAdd);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", showLogout);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);



page.start();
updateNav();

async function logout() {
  await userService.logout();
  updateNav();
  page.redirect("/");
}

function renderer(template) {
  render(template, root);
}

function updateNav() {
  const userData = userHelper.getUserData();
  if (userData) {
    userNav.style.display = "block";
    guestNav.style.display = "none";
  } else {
    userNav.style.display = "none";
    guestNav.style.display = "block";
  }
}

function goTo(path) {
  page.redirect(path);
}

function decorateContext(ctx, next) {
  ctx.render = renderer;
  ctx.updateNav = updateNav;
  ctx.goTo = goTo;

  next();
}
