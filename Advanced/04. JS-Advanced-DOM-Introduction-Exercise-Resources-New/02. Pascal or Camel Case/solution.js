function solve() {
  let textInput = document.getElementById("text").value.toLowerCase();
  let editSpecifications = document.getElementById("naming-convention").value;
  let newText = "";

  if (editSpecifications == "Camel Case") {
    for (let i = 0; i < textInput.length; i++) {
      if (textInput[i] == " ") {
        newText += textInput[i + 1].toUpperCase();
        i++;
      } else {
        newText += textInput[i];
      }
    }
  } else if (editSpecifications === "Pascal Case") {
    newText += textInput[0].toUpperCase();
    for (let i = 1; i < textInput.length; i++) {
      if (textInput[i] === " ") {
        newText += textInput[i + 1].toUpperCase();
        i++;
      } else {
        newText += textInput[i];
      }
    }
  } else {
    newText = "Error!";
  }

  let res = document.getElementById("result");
  res.textContent = newText;
}
