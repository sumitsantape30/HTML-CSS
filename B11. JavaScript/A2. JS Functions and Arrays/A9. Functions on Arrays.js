//arrays in js can be heterogenius

var arr= ["arr", 10, true, 20]; // can store values of any datatype

//how arrays are stored? In java arrays occupy continuos block of memory space but its not the same case in js

console.log(arr.length); // function for length of the array
console.log(arr.push(40)); // it'll push the 40 at the end of the array
console.log(arr.pop()); // you can also delete the element from the last as well
arr.shift(0); // it'll shift the 0th element to the left, it'll out of the array, it wont be the part of the array
console.log(arr.shift()); // it returns the value which is shifted, by default it'll shift the left element
arr.unshift(8); // now 8 will be added from the left

console.log(arr);
