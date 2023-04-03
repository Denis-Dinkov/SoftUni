function school(input) {
  let students = {};

  for (const line of input) {
    let studentArr = line.split(" ");
    let name = studentArr.shift();
    let grades = studentArr.map((x) => Number(x));

    if (!students[name]) {
      students[name] = [];
    }

    students[name] = students[name].concat(grades);
  }

  let sortetArr = Object.entries(students).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [name, grades] of sortetArr) {
    let sum = 0;
    for (const grade of grades) {
      sum += grade;
    }

    let averageGrade = sum / grades.length;
    console.log(`${name}: ${averageGrade.toFixed(2)}`);
  }
}
school(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
