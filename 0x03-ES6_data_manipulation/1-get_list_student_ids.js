export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const studentId = array.map((obj) => obj.id);
  return studentId;
}
