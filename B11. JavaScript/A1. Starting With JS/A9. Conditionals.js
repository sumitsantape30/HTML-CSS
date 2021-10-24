var a= 10;

if( a > 0){
  console.log("Positive");
}else if( a < 0){
  console.log("Negative");
} else{
  console.log("Zero");
}

Output: Positive

===========================
var a= -1;

if( a > 0){
  console.log("Positive");
}else if( a < 0){
  console.log("Negative");
} else{
  console.log("Zero");
}
Output: Negative

===========================
  
var a= -1;

if( a){
  console.log("True");
}else{
  console.log("False");
}

Output: True // so here answer of this is True 

================================
  var a= 0;

if( a){
  console.log("True");
}else{
  console.log("False");
}

Output: False // now its false coz a is positive

// so in java these codes wont run, it would be boolean without condition, but in jS and CPP it runs.
//In jS all the values have an associated boolean value with them, if it is number the 0 -- false, if it is number then it is false and all other values other than 0 will be true.
// everything else will be true

======================================================================================
  
// If there's a string, then it will give true output
var a= "abcd";

if( a){
  console.log("True");
}else{
  console.log("False");
}
Output: True

// it the string is of length 0 then answer will be false
var a= "";

if( a){
  console.log("True");
}else{
  console.log("False");
}
Output: False

//so if it is a empty string then answer will be false and if it is a string then will be true.

=====================================================================================================
  // in case I dont give  value to a then variable a will have undefined as value.
  
  var a;

if( a){
  console.log("True");
}else{
  console.log("False");
}
Output: False

// and if I initialise a= null or a== undefined then it will give false as well.
