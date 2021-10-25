//Objects help us in wrapping data and functionalities together, objects are basically collection of key-value pairs, key being the properties and values being the value of those properties and all the keys are string. 

//var students = {}; // this is an empty object, you can add properties as well
var students = {
    name: "abc",
    rollNo: 135,
     marks: 90
}; // here keys can only be string, you can put like "name" "rollNo" etc.

//now we have particular properties as well as values

//If I want to access one particular property of this object, the notation i'll use is dot
console.log(students.name);
students.name = "Sumit";
console.log(students);

//If I try to access the property which I have not defined in the object then JS will give undefined, java/cpp gives error
console.log(students.sem);

students.sem= 5; // no this object will have this property, its completely flexible to add any key anytime
console.log(students);

//you can have functions as value as well
