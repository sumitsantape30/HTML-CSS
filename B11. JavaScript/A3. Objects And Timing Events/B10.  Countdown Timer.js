 var count= 10;

function timer(){
    if( count == 0){
        console.log("Time up!!");
        clearInterval(id);
        // you should know which interval you have to clear for that you need instance id
        return;
    }
    console.log(count);
    count--;
}

var id= setInterval(timer, 1000);
