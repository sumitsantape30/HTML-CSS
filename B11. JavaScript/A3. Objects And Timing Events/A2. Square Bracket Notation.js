var student = {
    name: "sumit",
    rollNo: 82, 
    marks: 45,
    "2" : "two"
};

//5. 
function printProperty(obj, prop){
    //console.log(obj.prop); I can't use dot notation so will have to use square
    console.log(obj[prop]);
}

//var obj= new Object(); //1. you can create new object this way as well

//2. you can also access property by square bracket notation
console.log(student["marks"]);
// when you are accessing property via dot notation you dont have to use string or double quotes and while using sqaure bracket notation you have to use it in string form.

//3. now I have property 2
// so for accessing 2, we can't use student.2 here coz it'll throw a error, we need to use square bracket notation
console.log(student["2"]);

//4. creating a function
printProperty(student, "marks"); //I'm calling this function on object student and I want to print marks
// var prop= "makrs"; I can also pass this variable prop in the function while calling it


