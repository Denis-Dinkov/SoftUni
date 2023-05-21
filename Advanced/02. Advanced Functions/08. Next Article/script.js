function getArticleGenerator(input) {
  let text = input;

  return () => {
    if (text.length > 0) {
      let conatiner = document.getElementById("content");
      let article = document.createElement("article");
      let currentText = text.shift();
      article.innerText = currentText;
      conatiner.appendChild(article);
    }
  };
}
