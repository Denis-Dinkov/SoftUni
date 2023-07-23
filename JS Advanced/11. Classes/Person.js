class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

let res = [];
let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
res.push(person.toString());
let person2 = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
res.push(person.toString());
console.log(res);
