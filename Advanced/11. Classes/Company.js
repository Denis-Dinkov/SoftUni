class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (name === "" || name === undefined || name === null) {
      throw new Error("Invalid input!");
    }
    if (
      salary === "" ||
      salary === undefined ||
      salary === null ||
      salary < 0
    ) {
      throw new Error("Invalid input!");
    }
    if (position === "" || position === undefined || position === null) {
      throw new Error("Invalid input!");
    }
    if (department === "" || department === undefined || department === null) {
      throw new Error("Invalid input!");
    }

    this.departments[department] = {
      name: name,
      salary: salary,
      position: position,
    };
    console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
  }

  bestDepartment(){
    console.log(this.departments['Construction'])
  
  }
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
