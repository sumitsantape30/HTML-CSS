console.log(j); //4. so it'll print undefined

function hoistDemo(){
    console.log(i);
    var i= 10; 
    //1. if we print without var i=10 line the it will give an error and after putting this line it will print undefined. After mentioning that line it is able to understand that i is variable, the value of i is not figured out but i is a variable that exist is something that js intrepreter knows now, this is happening coz of the concept called hoisting.
}

hoistDemo();
//2. so in this case variable hoisting is happening. All the declarations in a function in JS are moved up to the top of the function.
//so code we have written in upper function is similar as:
function hoistDemo(){
    var i;
    console.log(i);
    i= 10;
}
//so JS interpreter moves all the declarations to the top of the function, so the time you reach at console statement i as a variable already exists.

//3. Now let's initialise a random variable here and print it at the top of the code
var j= 10; //the declaration of j will move to the top and it'll print undefined

============================================
  
//5. the way we have variable hoisting, we have function hoisting as well.

  console.log(j); 

hoistDemo();  //so js intrepeter know that hoist function exists by the time it reachers this line


function hoistDemo(){ // the function declaration that we have here is actually is moved at the top 
    console.log(i);
    var i= 10; 
}

var j= 10;
//js intrepeter moves all the function declarations and variable declarations to the top of the code
