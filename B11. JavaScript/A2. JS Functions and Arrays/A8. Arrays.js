
var arr= [1,3,4,5,6];

console.log(arr[3]);

console.log(arr[9]); // it'll print undefined in case you are trying to access the invalid index

arr[2]= 67; // you can set the value as well

arr[8]= 65; //bichke 3 indexes hai hi nhi driect 8th index dal rhe to print krte waqt woh empty print karega
console.log(arr); // output:  [ 1, 3, 67, 5, 6, <3 empty items>, 65 ]

// we can create array in this way as well
var arr= new Array(); 
var arr2= new Array(1,2,3,4,5);
var arr3= new Array(2); // the 2 that we have specified is not the value of the array, it is the size of the array
var arr4= new Array(5,6); // now this will be considered as elements of an array
// so when you are passing single element as a argument it'll be considered as size and more than 1 elements will be considered as elements



