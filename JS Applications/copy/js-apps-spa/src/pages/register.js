const registerPage = document.querySelector(".register");
const form = registerPage.querySelector("form");
import { updateAuth } from "../auth.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(e.currentTarget);
  let email = formData.get("email");
  let password = formData.get("password");
  let confirmPassword = formData.get("rePass");

  if (password === confirmPassword) {
    fetch("http://localhost:3030/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/js",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("user", JSON.stringify(res)));
    alert("Successfull register");
    updateAuth();
  }
});
export function showRegister() {
  registerPage.style.display = "block";
}
