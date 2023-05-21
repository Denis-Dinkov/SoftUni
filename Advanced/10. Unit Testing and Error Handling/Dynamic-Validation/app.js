function validate() {
  let inputElement = document
    .getElementById("email")
    .addEventListener("change", (e) => {
      let pattern = /[a-z]+\@[a-z]+\.[a-z]+/gm;
      let input = e.target.value;

      if (!pattern.test(input)) {
        e.currentTarget.classList.add("error");
      } else {
        e.currentTarget.classList.remove("error");
      }
    });
}
