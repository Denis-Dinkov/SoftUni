const createSection = document.querySelector(".create");
const form = createSection.querySelector('form');
form.addEventListener('submit',(e)=> {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get('name');
  console.log(name);
})

export function showCreate() {
  createSection.style.display = "block ";
}
