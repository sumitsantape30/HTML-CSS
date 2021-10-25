// js allows you to run particular piece of code in certain time intervals or certain period of time.

//setTimeout();
//you have to give 2 things in this function, first thing you give is function which it should execute after certain interval and second thing you give is interval after which you want to execute this function

function sayHello(){
    console.log("Hello");
}

setTimeout(sayHello, 2000); // interval is in miliseconds, 1 second = 1000ms
// we have not did a function call(sayHello) in this setTimeout function. we have to pass the function and not make a call to the function
//when the time interval is over it runs this function only once.

//if you want this repeatitively
// you have setInterval function which will repeat this task after the interval that we specify
setInterval(sayHello, 1000);

//==========================================================================

//setTimeout();
 var second= 1; //1. if have to print the count
function sayHello(){
    console.log("After "+ second);
    second++;

    //2. if I want to stop this after 5 seconds
    if( second == 5){
        clearInterval(id);
        // neeeds the time instance that you want to stop, so we get instance from setInterval, (clearInterval will understand that this is the instance I have to stop)
        //4. now once clearInterval will run, it'll stop the execution
    }
}

//setTimeout(sayHello, 2000); 

//3. setInterval function returns the value that is the instance id
var id= setInterval(sayHello, 1000);
// it creates an timing instance which runs and it'll return the id of that instance so when you have to stop you'll have to pass that id
