var student= {
    "name": " abc",
    rollNo: 135,
    marks: 90,
    "2": "two"
};

for( var prop in student){
    console.log(prop, student[prop]);
}
//to access all the keys
var keys= Object.keys(student);
console.log(keys);
var keys2= Object.getOwnPropertyNames(student);
console.log(keys2);
