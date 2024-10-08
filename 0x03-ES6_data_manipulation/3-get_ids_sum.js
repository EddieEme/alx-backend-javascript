export default function getStudentIdsSum(students) {
  const sumValue = 0;
  const sumId = students.reduce((preValue, curValue) => preValue + curValue.id, sumValue);
  return sumId;
}
