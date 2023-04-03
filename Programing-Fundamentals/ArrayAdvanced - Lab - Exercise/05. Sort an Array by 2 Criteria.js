function sortByTwoCriteria(input) {
  let newArr = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(newArr.join("\n"));
}
sortByTwoCriteria(["alpha", "beta", "gamma"]);
