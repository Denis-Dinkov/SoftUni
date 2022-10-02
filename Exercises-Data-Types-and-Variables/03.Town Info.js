function townInfo(firstP, secondP, thirdP) {
  let town = firstP;
  let population = Number(secondP);
  let area = Number(thirdP);
  console.log(
    `Town ${town} has population of ${population} and area ${area} square km.`
  );
}
townInfo(
  "Sofia",

  1286383,

  49
);
