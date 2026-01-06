export default function getStudentsByLocation(studentList, city) {
    return studentList.filter((i) => i.location === city);
}
