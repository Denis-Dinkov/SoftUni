import { html, render } from "./node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

const body = document.getElementById("contacts");
const template = (contacts) => html`
  ${contacts.map(person => html`<div id="contacts">
        <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${person.name}</h2>
                <button class="detailsBtn" @click=${showDetail}>Details</button>
                <div class="details" id="${person.id}">
                    <p>Phone number: ${person.phoneNumber}</p>
                    <p>Email: ${person.email}</p>
                </div>
            </div>
        </div>`)}
`;

function showDetail(e) {
  const button = e.target.parentNode.querySelector(".details");
  button.style.display = "block";

}

render(template(contacts), body)
