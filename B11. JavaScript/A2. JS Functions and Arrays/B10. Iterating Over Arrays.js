// different ways through which we can iterate over arrays

var arr= [1,2,3,4,5,6];

for(var i= 0; i< arr.length; i++){
    console.log(arr[i]);
}

//for each method

function print(element){ // you can also pass index, array as argument as well
    console.log(element);
}

// for(var i= 0; i< arr.length; i++){
//     print(arr[i]);
// } yeh loop lagake print function ko call karne se acha use for each method

arr.forEach(print); //as a argument you have to pass the function that you want to apply on all the elements of the array

