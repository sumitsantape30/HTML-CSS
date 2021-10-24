function outer(){
     var outerVar= 10;
    function inner(){ 
        let innerVar= 10;
        console.log(outerVar);
        //this inner context will be created it will have all the info of all the variables that are there in this function and reference to the outer context so outer context for inner is this outer function
        // when you have written variable outerVar it will first search outerVar variable in the inner context, there is not such variable in the inner context then it will search for this variable in the outer context
    }
    inner();
    console.log(innnerVar); //this innerVar cannot be accessed outside its context
}

outer();
// innner() will not be accessible outside

=================================================
  
  
