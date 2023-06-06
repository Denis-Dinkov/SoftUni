const url = "http://localhost:3030/jsonstore/collections/books";
const getAllBtn = document.getElementById("loadBooks");
getAllBtn.addEventListener("click", getAllBooks);
const addForm = document.querySelector("form");
addForm.addEventListener("submit", addBook);


async function getAllBooks() {
  const table = document.querySelector("tbody");
  const res = await fetch(url);
  const data = await res.json();

  Object.values(data).forEach(({ author, title }) => {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    titleCell.innerHTML = title;
    const authorCell = row.insertCell(1);
    authorCell.innerHTML = author;
    const editButton = row.insertCell(2);
    editButton.innerHTML = `
    <button>Edit</button>
   <button>Delete</button>`;
    editButton.addEventListener('click',actionButton)
  });
  console.log(table);
}

async function addBook(e) {
  e.preventDefault();
  const title = e.target.querySelector('input[name="title"]');
  const author = e.target.querySelector('input[name="author"]');

  if (title.value === "" || author.value === "") {
    return alert("Invalid input!");
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      author: author.value,
      title: title.value,
    }),
  });
  console.log(author.value);
}

async function actionButton(e) {
  console.log(e.target);
}
