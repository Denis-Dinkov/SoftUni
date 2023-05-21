function create(words) {
  let contentElement = document.getElementById("content");
  for (const word of words) {
    let newDiv = document.createElement("div");
    let newParagraph = document.createElement("p");
    newParagraph.textContent = word;
    newParagraph.style.display = "none";
    newDiv.appendChild(newParagraph);
    newDiv.addEventListener("click", (e) => {
      console.log((e.target.children[0].style.display = "block"));
    });
    contentElement.appendChild(newDiv);
  }
}
