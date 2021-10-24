
======================Name function expression==========================
// you can also create a function expression just like you initialise a variable. expression means you have variable and you are assigning that variable some value. so in case of function expression the value you'll be assigning will be a function. 
// var ans= 10;

/* this is function declaration
function fact(n){
    var fact=1;

    for( var i=1; i<= n; i++){
        fact = fact * i;
    }
    return fact;
} */

// here you are assigning a function to the variable, this is function expression
var factorial = function fact(n){ // the expression that you have created this way is actually a named function expression, that simply means that the function here has a name
    var fact=1;

    for( var i=1; i<= n; i++){
        fact = fact * i;
    }
    return fact;
}; //and it should be terminated with the semicolon just like normal variables do

console.log(factorial); // it'll print the function coz thats what we have stored in factorial variable
console.log(factorial(5)); //this is how we call the function expression now

console.log(fact(6)); //I can't call the function directly by name now because this fact is just the name of the function for this factorial variable. This name fact works only within the function like you can make it recursive and it'll work

=======================================Anonymous Function Expression===================
  
  
var factorial = function fact(n){ 
    var fact=1;

    for( var i=1; i<= n; i++){
        fact = fact * i;
    }
    return fact;
}; 

//Anonymous function expression, function doesnt have name
var factorial2 = function (n){ //here you have not given the name of the function so when you print this variable, to iss function ka name variable ka jo nam hai wahi hojayega coz humne function ko koi nam nhi diya hai
    var fact=1;

    for( var i=1; i<= n; i++){
        fact = fact * i;
    }
    return fact;
};

console.log(factorial); 
console.log(factorial2); //isme function ka nam factorial2 kar dega coz humne function ka name nhi diya hai pehle

