function oddOccurences(input) {
  let obj = {};
  let words = input.split(" ").map((word) => word.toLowerCase());
  for (const word of words) {
    if (!obj.hasOwnProperty(word)) {
      obj[word] = 0;
    }
  obj[word]++;
  }
  let sorted = Object.entries(obj)
  .filter(word => word[1] % 2 !== 0)
  .sort((kvpA,kvpB) => kvpB[1] - kvpA[1])
  .map(word => word.shift())
  
  console.log(sorted.join(' '))
}
oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
