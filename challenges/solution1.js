const string = 'papa Is A hero' // initialize the variable string

function lowertoUpper(){
     const text = string.split('')// split will enable the compiler to iterate every value
     .map(function(change){ //calls  the provided callback fn in each element in the string and constructs a new string
      return change === change.toUpperCase() ? change.toLowerCase() : change.toUpperCase() //give the condition of the function 
}).join('');// join the string after spliting and maping 

        return text; //return the variable name string 
}
 console.log(lowertoUpper()); //display the string in the function name 
