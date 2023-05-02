    function validate() {
    let pattern = new RegExp(/[a-z]+\@[a-z]+\.[a-z]+/gm);
    let inputValueElement = document.getElementById("email");

    inputValueElement.addEventListener("change", (x) => {
        let inputEmail = x.target.value;
        let isTrue = pattern.test(inputEmail);
        if (isTrue) {
        x.target.classList.remove("error");
        } else {
        x.target.classList.add("error");
        }
    });
    }
