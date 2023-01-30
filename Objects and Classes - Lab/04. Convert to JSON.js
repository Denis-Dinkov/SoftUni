function converToJson(firstName, secondName, lastName) {
  let person = {
    name: firstName,
    lastName: secondName,
    hairColor: lastName,
  };
  console.log(JSON.stringify(person));
}
