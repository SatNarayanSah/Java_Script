// this is the first practice set in js with code with harry youtube channel

/* Questions
1. Create a variable of type string and try to add a number to it
2. Use typeof operator to find the datatype of the string in last previous questions
3. Create a const object in javascript can you change it to hold a number letter?
4. Try to add a new key to the const object in problem 3 where you alter to do it?
5. Write a JS program to create a word meaning dictionary of 5 words. */

// Question no.1 
let MyName = "satyam sah";
let MyAge = 20;
console.log(MyName + MyAge);

//Questions No. 2
console.log(typeof (MyName + MyAge)); //Output:- String


// Question No. 3
const items ={
  name: "satyam sah",
  age: 20,
  developer: false
}// No i can not add string or number letter.

//Questions No. 4
items['friend'] = false //using this way we can add new key to the const object.
console.log(items); 

// Question No.5
const dictionary = {
  Serendipity: "The occurrence of events by chance in a happy or beneficial way.",
  Ephemeral: "Lasting for a very short time.",
  Eloquent: "Fluent or persuasive in speaking or writing.",
  Aplomb: "Self-confidence or assurance, especially when in a demanding situation.",
  Ineffable: "Too great or extreme to be expressed or described in words."
}
console.log(dictionary['Aplomb']);


