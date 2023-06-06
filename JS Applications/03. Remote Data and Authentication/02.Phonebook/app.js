function attachEvents() {
  const url = "http://localhost:3030/jsonstore/phonebook";
  //elements
  const phoneBooksList = document.getElementById("phonebook");
  const personNameInput = document.getElementById("person");
  const phoneNumberInput = document.getElementById("phone");
  //button elements
  const loadBtn = document.getElementById("btnLoad");
  loadBtn.addEventListener("click", loadPhoneBooks);

  const createBtn = document.getElementById("btnCreate");
  createBtn.addEventListener("click", addPhoneAddress);

  async function loadPhoneBooks() {
    phoneBooksList.innerHTML = "";
    try {
      const res = await fetch(url);
      const data = await res.json();

      Object.values(data).forEach(({ person, phone, _id }) => {
        let liElement = document.createElement("li");
        liElement.textContent = `${person}: ${phone}`;
        liElement.setAttribute("id", _id);

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.setAttribute("id", "btnDelete");
        button.addEventListener("click", deleteFunc);
        liElement.appendChild(button);

        phoneBooksList.appendChild(liElement);
      });
    } catch {
      console.log("error");
    }

    async function deleteFunc(e) {
      let key = e.currentTarget.parentNode.id;

      const res = await fetch(`${url}/${key}`, {
        method: "DELETE",
      });

      loadBtn.click();
    }
  }

  async function addPhoneAddress() {
    if(personNameInput.value === '' | phoneNumberInput.value === ''){
        alert('Invalid input');
    }

    const res = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': ' application/json'},
    });

  }
}

attachEvents();
