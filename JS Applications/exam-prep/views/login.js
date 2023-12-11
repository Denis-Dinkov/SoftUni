import { html } from "../node_modules/lit-html/lit-html.js";
import { userService } from "../src/userService.js";


const loginTemplate = () => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit=${handleSubmit} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;

let context = null;
export function showLogin(ctx) {
  ctx.render(loginTemplate());
  context = ctx;
}

export async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    window.alert("Error");
    return;
  }

  await userService.login(email, password);
  context.goTo("/");
}
