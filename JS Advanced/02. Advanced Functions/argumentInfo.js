function argumenInfo() {
  let obj = {};

  Array.from(arguments).forEach((element) => {
    let type = typeof element;
    let value = element;

    console.log(`${type}: ${value}`);

    if (!obj[type]) {
      obj[type] = 0;
    }
    obj[type]++;
  });

  Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .forEach((x) => {
      console.log(`${x} = ${obj[x]}`);
    });
}

argumenInfo("cat", 42, function () {
  console.log("Hello world!");
});
