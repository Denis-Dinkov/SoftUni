function books(input) {
  let newArr = input.shift().split(" | ");

  for (const el of input) {
    let index = el.split(" ");
    let command = index[0];
    let genre = index[1];
    let newGenre = index[2];

    switch (command) {
      case "Join":
        if (!newArr.includes(genre)) {
          newArr.push(genre);
        }
        break;
      case "Drop":
        if (newArr.includes(genre)) {
          newArr = newArr.filter((x) => x !== genre);
        }
        break;
      case "Replace":
        if (newArr.includes(genre) && !newArr.includes(newGenre))
          newArr.splice(newArr.indexOf(genre), 1, newGenre);
        break;

      case "Prefer":
        genre = Number(index[1]);
        newGenre = Number(index[2]);
        if (
          newArr.includes(newArr[genre]) &&
          newArr.includes(newArr[newGenre])
        ) {
          let temp = newArr[genre];
          newArr[genre] = newArr[newGenre];
          newArr[newGenre] = temp;
        }
        break;
    }
    if (el === "Stop!") {
      break;
    }
  }

  console.log(newArr.join(" "));
}
books([
  "Thriller | Young | Crime",
  "Join Political",
  "Replace Young Fairytale",
  "Prefer 6 2",
  "Stop!",
]);
