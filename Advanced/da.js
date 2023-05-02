let email = "abv@abv.bg";
let second = "123@abv.bg";
let pattern = new RegExp(/[a-z]+\@[a-z]+\.[a-z]+/g);
let varno = pattern.test(second);
console.log(varno);
if (varno) {
  console.log("da");
} else {
  console.log("ne");
}
