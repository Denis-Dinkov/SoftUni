import { generateHome } from "./pages/home.js";
import { showLogin } from "./pages/login.js";
import { showRegister } from "./pages/register.js";
import {error404} from "./pages/404.js"
import { showCreate } from "./pages/create.js";
import { showLogOut } from "./pages/logout.js";
const main = document.querySelector('.main-content')

const pages = {
  '/': generateHome,
  '/login': showLogin,
  '/register': showRegister,
  '/create': showCreate,
  '/logout': showLogOut,
}
export function router(pathname) {
hideUnusedPages()


const render = pages[pathname] || error404
render()
}

function hideUnusedPages() {
  Array.from(main.children).forEach(el => {
    el.style.display = 'none'
  })
}