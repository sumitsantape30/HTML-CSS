// you can have functions, objects as values as well. Means you'll have an object containing a object.

var student= {
    "name": " abc",
    rollNo: 135,
    marks: 90,
    "2": "two",
    address: {
        city: "New Delhi",
        pinCode: 11032
    }
};

console.log(student);

//to access the address object
console.log(student.address);
//for accessing city particularly 
console.log(student.address.city);
// you can use square notation as well
student.address["city"];
