/*Programe that check instilized data is prime or not.......*/
// var n1=5;     //declaring variable and have value.
// if(n1%2==1) //condetion to find that number is prime number or not...
// {
//     console.log("Given data is priem number");   //if value is true....
// }
//  else
//  {
//     console.log("Given number is not prime.."); // if value is false
//  }

 /* Write a programme to find given number is leap year or not. */
//  var t=2016; 
// if(t%4==0){ 
//     if(t%100==0)
//     {
//         if(t%400==0) 
//         {
//             console.log("The givn number "+ t + "   is  leap year.....");
//         }
//         else
//         {
//             console.log("The givn number "+ t + "is not leap year.....");
//         }
        
//     }
//     else
//     {
//         console.log("The givn number "+ t + " is  leap year.....");
//     }
    
// }
// else{
//     console.log("The givn number "+ t + " is not leap year.....");
// }



/* Write a program to use ternary oprator*/

//  var age=18;
//  console.log((age==17)? "You can drive" : "You can't drive.");


/* write a programe using swtich case and break statement.*/
var area="triangle";
var PI=3.1415, l=5, b=6, r=4;
switch(area){
    case 'circle':
        console.log("The area of cirlce is " + PI*r**2);
        break;

    case 'rectangle':
        console.log("The area of rectrangle is " + l*b);
        break;
    
    case 'triangle':
        console.log("The area of traingle is "+(l*b)/2 );
        break;

    default:
        console.log("Please enter the valid data");
}