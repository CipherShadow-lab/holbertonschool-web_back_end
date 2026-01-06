export default function updateStudentGradeByCity(studentList, city, newGrades) {
    return studentList

    // Filter students by city
        .filter(student => student.location === city)

    // Map over filtered students and update grades
        .map(student => {
            const grade = newGrades.find((grade) => grade.studentId === student.id)?.grade || 'N/A';
            return { ...student, grade };
});
