var arr= [1,2,3,4,5];

var obj= {
    "0": 1,
     "1":2, 
     "2":3, 
     "3": 4, 
     "4":5
}

obj.prop= "Demo"; // adding new property
// can I add the property which is not an interger in an array? yes you can coz arrays are essentially objects
arr.prop= "Demo";
// but the length of the array will not change by this, length will be still 5
console.log(arr.length);

arr[10]= "dd";
//now length of the array will be changed
console.log(arr.length);

console.log(arr);
console.log(obj);

//interating over an array
for(var i in arr){
    console.log(i);
}
