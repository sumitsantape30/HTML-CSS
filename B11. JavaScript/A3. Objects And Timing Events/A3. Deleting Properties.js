var student = {
    name: "sumit",
    rollNo: 82, 
    marks: 45,
    "2" : "two"
};

console.log(student);
//you can use delete with dot or square notation
delete student.marks;
delete student["rollNo"];
console.log(student);
