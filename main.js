const createStudent = (studentName, studentGrade) =>{
    return {
        name: studentName
        , grade: studentGrade
    }
}
const addMathGrade = (studentObject) =>{
    studentObject.mathGrade = "B"
    return studentObject
}
const addHistoryGrade = (studentObject) =>{
    studentObject.historyGrade = "C"
    return studentObject
}
const addScienceGrade = (studentObject) =>{
    studentObject.scienceGrade = "A"
    return studentObject
}

const newStudent = createStudent("Brad", "F")
addMathGrade(newStudent)
addHistoryGrade(newStudent)
addScienceGrade(newStudent)

console.log(`${newStudent.name}'s overall grade is ${newStudent.grade}`)
console.log(`${newStudent.name}'s math grade is ${newStudent.mathGrade}`)
console.log(`${newStudent.name}'s history grade is ${newStudent.historyGrade}`)
console.log(`${newStudent.name}'s science grade is ${newStudent.scienceGrade}`)

