// ..................FUNCTION DEFINITION..................
// Before we use a function, we need to define it.
/* A finction definition also called a function declaration, or declaration, or function statements
consists of the func tion keyword, followed by: */

/* The name of the function.
A list of parametes to the function, enclosed in parantheses and seperate ny commas(,) 
The javascript statements that define the function, enclosed in curly brackets,{......} */

// function sun()   // Function declaring
// {
//     var a=5, b=6;
//     var  total=a+b;
//  console.log(total);
// }
// sun();    //calling function

/* write a progrme using function parameter nad arguments */
function sum(a,b){  // In Function sum "a and b " is called paremeters
var total = a+b;
console.log(total);
}
sum();
sum(12,12);  // In calling Function sum the values " 12 and 12" are called arguments
sum(100000,52000000);    // In calling Function sum the values " 100000 and 52000000" are called arguments