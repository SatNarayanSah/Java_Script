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
let gender = "male";
switch(gender){
  case "male" :
    console.log("you are male");
    break;
  case "female":
    console.log("you are female");
    break;
}