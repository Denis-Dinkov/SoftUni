function minerTask(input) {
  let obj = {};
  let inputLength = input.length;
  for (let i = 0; i < inputLength; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);
    if (!obj.hasOwnProperty(resource)) {
      obj[resource] = 0;
    }
    obj[resource] += quantity;
  }

  for (const resource in obj) {
    console.log(`${resource} -> ${obj[resource]}`);
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
