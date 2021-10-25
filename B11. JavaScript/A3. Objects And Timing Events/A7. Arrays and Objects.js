//js arrays are basically objects. that means arrays also have key value pairs, the keys are actually the indices.

var arr= [1,2,3,4,5];

//an array like this is similar to an object like this
var obj= {
    "0": 1,
     "1":2, 
     "2":3, 
     "3": 4, 
     "4":5
}

//array is slightly different from object coz it has property called length which object does not has

//obj.key or obj[key], we use these notations in objects and we can use them in array as well
console.log(arr[0]); // we used to put in double quotes in object, here you can acess with and without double quotes as well.
console.log(arr["0"]);

console.log(obj.length);
console.log(arr.length);

//If I have to add "abc" at 6th index I can do that as well
arr[6] = "abc";

console.log(arr);

Output:
1
1
undefined
5
[ 1, 2, 3, 4, 5, <1 empty item>, 'abc' ]
