function cats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  input.forEach((line) => {
    let [name, age] = line.split(" ");
    let cat = new Cat(name, age);

    cat.meow();
  });
}
