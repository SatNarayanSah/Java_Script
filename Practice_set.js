// this is the first practice set in js with code with harry youtube channel

/* Questions
1. Create a variable of type string and try to add a number to it
2. Use typeof operator to find the datatype of the string in last previous questions
3. Create a const object in javascript can you change it to hold a number letter?
4. Try to add a new key to the const object in problem 3 where you alter to do it?
5. Write a JS program to create a word meaning dictionary of 5 words. */

// Question no.1 
// let MyName = "satyam sah";
// let MyAge = 20;
// console.log(MyName + MyAge);

// //Questions No. 2
// console.log(typeof (MyName + MyAge)); //Output:- String


// // Question No. 3
// const items ={
//   name: "satyam sah",
//   age: 20,
//   developer: false
// }// No i can not add string or number letter.

// //Questions No. 4
// items['friend'] = false //using this way we can add new key to the const object.
// console.log(items); 

// // Question No.5
// const dictionary = {
//   Serendipity: "The occurrence of events by chance in a happy or beneficial way.",
//   Ephemeral: "Lasting for a very short time.",
//   Eloquent: "Fluent or persuasive in speaking or writing.",
//   Aplomb: "Self-confidence or assurance, especially when in a demanding situation.",
//   Ineffable: "Too great or extreme to be expressed or described in words."
// }
// console.log(dictionary['Aplomb']);


// this is the Second practice set in js with code with harry youtube channel

/* Questions:
1. Use logical operator fo find whether the age of a person lies between 10 and 20?
2. Demonstrate the use of switch case statement in JavaScript
3. Write a js program to find whether a number is divisible by 2 and 3
4. write a js program to find whether a number is divisible by either 2 or 3
5. Print you can drive or you cannot drive based on age beaing grater than 18 using ternary operator */

// Questions No. 1's Solutions
// let age = 1
// if(age >= 10 && age<= 20){
//   console.log("Your age is lies between 10 to 20");
// }else{
//   console.log("Your age does not lies between 10 to 20");
// }

// Question No.2's Solution
// let gender = "male";
// switch(gender){
//   case "male" :
//     console.log("you are male");
//     break;
//   case "female":
//     console.log("you are female");
//     break;
// }


// Questions No.3's Solution 

// let n = 90;
// if(n % 2 == 0 && n % 3 == 0){
// console.log("Your Number is divisible by 2 and 3");
// }
// else{
//   console.log("Your Number is not divisible by 2 and 3");
// }


// practice set on topic of loop and function
/* Questions
1. Write a program to print the marks of a student in an object using for loop
 obj = { harry: 18, rohan : 70, aakash: 7}
2. write the program Q1 using for in loop
3. Write the program to print "try again" until the user enter the correct number
4. Write a function to find mean of 5 numbers */


// Questions No.1's Solution
//  let mark ={
//   harry: 18,
//   rohan : 70,
//   aakash: 7
//   }
//   for(let i=0; i<Object.keys(mark).length; i++){
//     console.log("The mark of " + Object.keys(mark)[i] + " are " + mark[Object.keys(mark)[i]]);
//   }
  
  
//   // Questions No.2's Solution
//   for(let index in mark){
//     console.log("The mark of " + index + " : " + mark[index]);
//   }


// Questions No.3's Solution

// Questions No.4's Solutions
// function MeanValue  ( a,b,c,d,e)  {
//   return (a+b+c+d+e)/5;
// }
// let value= MeanValue(3,4,5,6,7);
// console.log(value);




// Practice set on topic of String
/* Questions
1. What will the following point in js console.log("har\*" .length)
2. Explore the icludes, starts with & endwith function of a string
3. write a program to cover a given string to loercase
4. Extract the amount out of this string "Please give Rs. 1000"
5. Try to change 4th character of a given string where you allow to do it.*/

// Question 1's solution
console.log("har\*".length); // 4
// Question 2's solution
console.log("har\*".includes("ar")); // true