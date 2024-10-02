export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const employee of Object.values(report.allEmployees)) {
    allEmployees.push(...employee);
  }
  return allEmployees;
}
