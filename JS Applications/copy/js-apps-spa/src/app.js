import { router } from "./router.js";
import { updateAuth } from "./auth.js";

const navigation = document.querySelector(".navigation");
const guestNavigation = document.querySelector("#guest");
const userNavigation = document.querySelector('#user')
guestNavigation.style.display = "inline";
userNavigation.style.display = 'inline'
router('/')
updateAuth()
navigation.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName == "A") {
    const url = new URL(e.target.href);
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    router(url.pathname);
  }
});
