function encodeAndDecodeMessages() {
  let buttonElements = Array.from(
    document.querySelectorAll("#container div button")
  );
  let decodedMessage = document.getElementsByTagName("textarea")[0];
  let encodedMessage = document.getElementsByTagName("textarea")[1];

  buttonElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      let buttonName = e.target.textContent;
      if (buttonName.includes("Encode")) {
        let inputValue = e.target.parentElement.querySelector("textarea").value;
        let encodedText = encoding(inputValue);

        console.log(encodedText);
        encodedMessage.value = encodedText;
        decodedMessage.value = "";
      } else if (buttonName.includes("Decode")) {
        let display = e.target.parentElement.querySelector("textarea");
        let decodedText = decode(encodedMessage.value);
        display.value = decodedText;
      }
    });
  });

  function encoding(inputText) {
    let encodedResult = "";
    for (const word of inputText) {
      let currentCharValue = word.charCodeAt() + 1;
      encodedResult += String.fromCharCode(currentCharValue);
    }
    return encodedResult;
  }

  function decode(inputText) {
    let decodeResult = "";
    for (const word of inputText) {
      let currentCharValue = word.charCodeAt() - 1;
      decodeResult += String.fromCharCode(currentCharValue);
    }
    return decodeResult;
  }
}
