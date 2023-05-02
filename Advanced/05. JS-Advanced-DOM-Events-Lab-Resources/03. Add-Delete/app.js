function addItem() {
  let inputElement = document.getElementById("newItemText");
  let itemsList = document.getElementById("items");
  let newItem = document.createElement("li");

  newItem.textContent = inputElement.value;
  let deleteElement = document.createElement("a");
  deleteElement.href = "#";
  deleteElement.textContent = "[Delete]";
  newItem.appendChild(deleteElement);
  itemsList.appendChild(newItem);

  deleteElement.addEventListener("click", (a) => {
    deleteElement.parentNode.remove();
  });

  inputElement.value = "";
}
