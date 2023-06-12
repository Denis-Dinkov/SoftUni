import { updateAuth } from "../auth.js";
const loginContent = document.querySelector('.login');
const form = loginContent.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(e.currentTarget);
  let email = formData.get('email');
  let password = formData.get('password');

  fetch('http://localhost:3030/users/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(user => {
      if (user.code !== 403) {
        localStorage.setItem('user', JSON.stringify(user))
        alert('Succsessfull login!')
        updateAuth()
      } else { alert('Invalid user!') }
    })  
    .catch(error => console.log(error))



})

export function showLogin() {
  loginContent.style.display = 'block'
}