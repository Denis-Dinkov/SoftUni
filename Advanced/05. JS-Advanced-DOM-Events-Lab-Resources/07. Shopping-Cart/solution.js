function solve() {
  let textAreaElement = document.querySelector("textarea");
  let addButtonElement = Array.from(
    document.querySelectorAll(".product .product-add")
  ).forEach((button) => {
    button.addEventListener("click", addEvent);
  });
  let checkOutButtonElement = document
    .querySelector(".checkout")
    .addEventListener("click", () => {
      let finalText = `You bought ${purchasedFoods.join(
        ", "
      )} for ${totalSpend.toFixed(2)}.`;
      textAreaElement.value += finalText;
      disableButtons();
    });

  let totalSpend = 0;
  let purchasedFoods = [];

  function addEvent(e) {
    let productName =
      e.currentTarget.parentElement.querySelector(".product-title").textContent;

    let price = Number(
      e.currentTarget.parentElement.querySelector(".product-line-price")
        .textContent
    );

    totalSpend += price;
    purchasedFoods.push(productName);

    textAreaElement.value += `Added ${productName} for ${price.toFixed(
      2
    )} to the cart.\n`;
  }

  function disableButtons() {
    Array.from(document.querySelectorAll("button")).forEach((button) => {
      button.disabled = true;
    });
  }
}
