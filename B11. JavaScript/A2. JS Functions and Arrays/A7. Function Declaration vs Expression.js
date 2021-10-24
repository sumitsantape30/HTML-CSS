
console.log(fact(5)); // this will print properly, function hoisting
//console.log(factorial(7)); // it knows that variable factorial exists but error is that factorial is not holding the value of a function, if you try printing the value of factorial it'll print undefined
console.log(factorial); // it'll print undefined because if variable hoisting, all variables are hoisted above, their declarations are moved upward


function fact(n){
    var fact=1;
    for( var i=1; i<= n; i++){
        fact = fact * i;
    }
    return fact;
} 

var factorial = function fact(n){ // so this function is available below this point of line only, you can use this above this code. so if you dont want hoisting to be interfer in you code then you can use function expression 
    var fact=1;

    for( var i=1; i<= n; i++){
        fact = fact * i;
    }
    return fact;
}; 

//so function epxressions are preffered while writing code coz of hoisting advantage and some other things
//the prime difference in both these two is hoisting difference, hoisting difference between declaration and expression
