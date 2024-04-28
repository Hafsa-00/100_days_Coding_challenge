let grade = [89,85,79,90,87];
let averageGrades= grade.reduce((total,grade) => total + grade ,0 )/grade.length;
console.log(averageGrades);