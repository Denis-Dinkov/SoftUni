function deleteByEmail() {
  let usersElement = document.querySelectorAll("tr td:nth-of-type(2)");
  let inputElement = document.querySelector('input[type="text"]');
  let resultMessageElement = document.getElementById("result");

  let targetElement = Array.from(usersElement).find(
    (x) => x.textContent == inputElement.value
  );
  if (targetElement) {
    resultMessageElement.textContent = "Deleted.";
    targetElement.parentNode.remove();
  } else {
    resultMessageElement.textContent = "Not found.";
  }

  inputElement.value = "";
}
