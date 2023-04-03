function companyUsers(input) {
  let obj = {};

  for (const line of input) {
    let [company, id] = line.split(" -> ");
    if (!obj.hasOwnProperty(company)) {
      obj[company] = [];
    }

    obj[company].push(id);
  }
  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

  sorted.forEach((line) => {
    let company = line[0];
    let allIDs = line[1];
    let uniqueIds = {}
     allIDs.forEach(id => {
      uniqueIds[id] = 0
     })
    console.log(company);
    for (const id in uniqueIds) {
      console.log(`-- ${id}`);
    }
  });
}
companyUsers([
  "SoftUni -> AA12325",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
