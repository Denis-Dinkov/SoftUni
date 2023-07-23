function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((button) => {
    button.addEventListener("click", onClick);
  });
  function onClick(e) {
    let profile = e.target.parentElement;
    let isChecked = profile.querySelector('input[value="unlock"]').checked;

    if (isChecked) {
      if (e.target.textContent == "Show more") {
        profile.querySelector("div").style.display = "block";
        e.target.textContent = "Hide it";
      } else if (e.target.textContent == "Hide it") {
        profile.querySelector("div").style.display = "none";
        e.target.textContent = "Show more";
      }
    }
  }
}
