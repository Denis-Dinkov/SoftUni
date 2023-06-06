function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";
  const textArea = document.getElementById("messages");
  const sendBtn = document
    .getElementById("submit")
    .addEventListener("click", postNewMessage);
  const refreshBtn = document.getElementById("refresh");
  refreshBtn.addEventListener("click", displayMesagges);

  async function postNewMessage() {
    const authorInput = document.querySelector('input[name="author"]');
    const messageInput = document.querySelector('input[name="content"]');
    if (authorInput.value == "" || messageInput.value == "") {
      alert("Please type input");
    }
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: authorInput.value,
        content: messageInput.value,
      }),
    });

    refreshBtn.click();
  }

  async function displayMesagges() {
    try {
      textArea.value = "";
      const res = await fetch(url);
      const data = await res.json();

      textArea.value = Object.values(data)
        .map(({ author, content }) => `${author}: ${content}`)
        .join("\n");
    } catch {
      console.log("error");
    }
  }
}

attachEvents();
