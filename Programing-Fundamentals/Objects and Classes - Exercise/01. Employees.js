function employees(input) {
  let job = {};

  input.forEach((worker) => {
    let workerLength = worker.length;
    job[worker] = workerLength;
  });

  for (const key in job) {
    console.log(`Name: ${key} -- Personal Number: ${job[key]}`);
  }
}
employees([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
