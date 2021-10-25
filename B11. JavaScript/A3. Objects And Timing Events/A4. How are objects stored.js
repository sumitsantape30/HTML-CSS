// Open book page no L4

var obj= {
    "p1": 10
}

var obj2= obj; // this is just another variable that is refering to the old object

console.log(obj);
console.log(obj2);

obj2.p1= 100;
console.log(obj2);
console.log(obj); 

console.log(obj == obj2);

console.log(obj === obj2);

obj2 = {"p1": 100}; // now this obj2 is refering to the other object

console.log(obj == obj2); // obj and obj2 are refering to two different objects in a memory
