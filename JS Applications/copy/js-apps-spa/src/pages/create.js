import { getToken } from "../auth.js";
const createSection = document.querySelector(".create");
const createForm = createSection.querySelector("form");

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let data = {
        name: formData.get('name'),
        img: formData.get('img'),
        ingredients: formData.get('ingredients').split('\n'),
        steps: formData.get('steps').split('\n'),
    };

    fetch('http://localhost:3030/data/recipes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Successful recipe create')
        });

});

export function showCreate() {
  createSection.style.display = "block ";
}
