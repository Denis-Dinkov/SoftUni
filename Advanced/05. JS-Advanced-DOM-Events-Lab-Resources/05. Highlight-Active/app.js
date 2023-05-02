function focused() {
  let divElement = document.querySelectorAll('div input[type="text"]');

  let arrDiveElement = Array.from(divElement);
  for (const element of arguments) {
    element.addEventListener("focus", (e) => {
      e.currentTarget.parentNode.classList.add("focused");
    });

    element.addEventListener("blur", (e) => {
      e.currentTarget.parentNode.classList.remove("focused");
    });
  }
}
