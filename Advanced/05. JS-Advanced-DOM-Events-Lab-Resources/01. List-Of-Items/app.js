function addItem() {
  let inputTextElement = document.getElementById("newItemText").value;
  let itemListElement = document.getElementById("items");
  let newItem = document.createElement('li');
  newItem.textContent = inputTextElement;
  itemListElement.appendChild(newItem);

  document.getElementById("newItemText").value = '';
}
