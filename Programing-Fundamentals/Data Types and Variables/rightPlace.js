function rightPlace(str, char, string) {
  let res = str.replace("_", char);
  let output = res === string ? "Matched" : "Not Matched";
  console.log(output);
}
rightPlace("Str_ng", "i", "String");
