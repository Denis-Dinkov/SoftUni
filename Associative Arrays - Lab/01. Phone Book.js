function phoneBook(input) {
  let obj = {};
  for (const line of input) {
    let[name,number] = line.split(' ');
    obj[name] = number;
  }
  

  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])