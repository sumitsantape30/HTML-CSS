function getSum(a, b){

    console.log(a, b); //this will print value of a only as we have passed single value, aur b keliye undefined print karega
    return a+b; //here we are trying to add 6 with undefined that's why its giving NaN.
}

let result= getSum(6); //we have passed only on1 value, in java/cpp it'll throw a error but js is forgiving, it'll print NaN
console.log(result);

getSum(6, 7, 8); // the function need only two values but we are passing 3 values \, the extra argument will be simple ignored and it'll return the sum of first two values
//this will give output: 13
