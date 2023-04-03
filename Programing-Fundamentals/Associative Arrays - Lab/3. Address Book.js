function addressBook(input) {
  let obj = {};

  for (const line of input) {
    let[name,address] = line.split(':');
    obj[name] = address;
  }

  let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
  for (const line of sorted) {
    console.log(`${line[0]} -> ${line[1]}`);
  }
}
addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])