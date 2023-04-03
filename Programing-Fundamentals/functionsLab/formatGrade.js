function formatGrades(grade) {
  let gradeNum = Number(grade);

  if (gradeNum < 3.0) {
    console.log(`Fail (${grade})`);
  } else if (gradeNum >= 3.0 && gradeNum < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (gradeNum >= 3.5 && gradeNum < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (gradeNum >= 4.5 && gradeNum < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else if (gradeNum >= 5.5) {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}
