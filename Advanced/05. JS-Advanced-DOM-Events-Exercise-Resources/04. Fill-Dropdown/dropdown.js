function addItem() {
  let inputText = document.getElementById("newItemText");
  let inputValue = document.getElementById("newItemValue");
  let buttonElement = document.querySelector("input[type=button]");
  let menuElement = document.getElementById("menu");

  let newMenu = document.createElement("option");
  newMenu.text = inputText.value;
  newMenu.value = inputValue.value;

  if (inputText.value !== "" && inputValue.value !== "") {
    menuElement.appendChild(newMenu);
  }

  inputText.value = "";
  inputValue.value = "";
}
