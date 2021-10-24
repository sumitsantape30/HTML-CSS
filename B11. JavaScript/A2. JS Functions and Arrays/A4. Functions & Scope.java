//Scopre: it is the in which you can use the variable, where this variable is accessible.

var name= "scope"; //this variable has global scope means this can be accessed throughout the program
console.log(name);

//function scope: it refers to scope of variables within the function

function scopeDemo(){
    var i= 10; // the scope of i will be only within this function
    console.log(i);
}

scopeDemo();
console.log(i); // I wont be able to print the i here coz i is not in this global scope but i is defined in the local scope of function which we also called as lexical scope

===================
  
var name= "global"; 
console.log(name);


function scopeDemo(){
    //so we have create two variables, outer name has global scope and inner name has function scope
    var name= "function"; 
    console.log(name); //when intrepeter reaches this line it look for value of name within the current scope and current scope is function scope coz we are currently in the function scope
    //if we hadnt intitialise the name in this function scope then it would have look for the name variable outside the function scope, and here outer scope is global scope
}

scopeDemo();
console.log(name); //this will print "global" as it is in global scope

=========================
  //Execution Context
  //you can think of EC as an environment, every code in JS has an execution context associated with it, that means the environment where this code is being run
  /* open book's first page from last: L-1 */
  
  function c(){
    console.log("Inside c");
}

function b(){
    c();
    console.log("Inside b");

}

function a(){
    b();
    console.log("Inside a");
}

a();
console.log("global context");
  
 //see its dry run in book on page L-2 to L3
  
