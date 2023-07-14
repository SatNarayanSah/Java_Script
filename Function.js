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
// function sum(a,b){  // In Function sum "a and b " is called paremeters
// var total = a+b;
// console.log(total);
// }
// sum();
// sum(12,12);  // In calling Function sum the values " 12 and 12" are called arguments
// sum(100000,52000000);    // In calling Function sum the values " 100000 and 52000000" are called arguments



/*  FUNCTION EXPRESSION  */
// function sum(a,b){  // In Function sum "a and b " is called paremeters
//     var total = a+b;
//     console.log(total);
//     }

//     var funExp = sum(12,12);  
//     funExp;   // this is function expression do the work.

/* ...............Anonnymous Function .......................*/
// var funExp=function(a,b){
//     return total =a+b;
//     console.log(total);
// }
// funExp(12,12);
// console.log(funExp(15,10));

//     /*  FUNCTION EXPRESSION  WITH RETURN KEYWORD */
// function sum(a,b){  // In Function sum "a and b " is called paremeters
//         return total = a+b;  // Using Return keyword
//     }
//     var funExp = sum(12,12);  
//     console.log("This is the sum of given two numbers:- " + funExp);   

// var n=1;
// for(n; n<=10;n++){
//     tableOf=3;
//     console.log(tableOf + " * "  + n + " = " + tableOf*n);
// }


// .............LET VS VAR VS SCOPE........................
/*       VAR ==> Function scope
        LET AND CONST ==> Block Scope          */


/*  This code will Run successfully   */
// var myName="Satyam sah";
// console.log(myName);
// myName="Ekak World";
// console.log(myName)  

/*  This code will Run Unsuccessfully  */
// const myName="Satyam sah";
// console.log(myName);
// myName="Ekak World";
// console.log(myName)  


/* This Programme run siccessfuly  */
// function cv()
// {
//     var myFirstNamr="Satyam"
//     console.log(myFirstNamr);

//     if(true){
//         var myLastName="Sah";
//         console.log('inner'+ myLastName);
//         console.log('inner'+ myFirstNamr);

//     }
//     console.log('outer'+ myFirstNamr);
// }
// cv();


/* This programm has an error */
// function cv()
// {
//     let myFirstNamr="Satyam"
//     console.log(myFirstNamr);

//     if(true){
//         let myLastName="Sah";
//         console.log('inner'+ myLastName);
//         console.log('inner'+ myFirstNamr);  

//     }
//     console.log('outer'+ myLastName);  //myLastName is not defined  **ERROR***
// }
// cv();



/* TEMPLATE LITERALS (TEMPLATE STRING) */
// for(var num=1; num<=10;num++)
// {

// let tableOf=19;
// console.log(` ${tableOf} * ${num} = ${tableOf*num}`);
// }



/** DEFAULT ARGUMENTS */
// function mul(a,b){
//         return a*b;
// }
// console.log(mul(5,9));
 
 
 /** ..............................Fat Arror function................. */
//  console.log(sum());
//  function sum(){
//         let a=5; b=6;
//         let sum = a+b;
//         return `the sum of the two number is ${sum}`;
//  }
   
 //Converting it into fat Arror function

//  const sum = () => {
//         let a=5; b=6;
//         let sum = a+b;
//         return `the sum of the two number is ${a*b}`;
//         return ` the sum of the two number is ${a=7}+${b=15}`;
/*    In one programe only one return can work other is terminated........*/
//  }
//  console.log(sum());

/** ..................Array in Java_Script............................. */


/**Traversal in array ............... */

// var faculty=[`Compute`,`Electrical`,`Electronics`,`Civil`,`Health Assistant`,`Pharmesya`,`Bsc.CSIT`];
// console.log(faculty[1]); //To display perticule element in index of array
// console.log(faculty.length);  // To check total element on index.
// console.log(faculty[faculty.length-1]);  //To display last element of index in array.

// Now we used For..in and For...of loops......
// for(let element in faculty){      // For.....In Loop
//         console.log(faculty[element]);
// }

// for(let data of faculty)// For....Of Loop
// {
//         console.log(data);
// }+3



// var faculty=[`Compute`,`Electrical`,`Electronics`,`Civil`,`Health Assistant`,`Pharmesya`,`Bsc.CSIT`];
// for(let element in faculty){      // For.....In Loop
//         console.log(element[element])
// }

// console.log("*************")
// for (let index = 0; index < faculty.length; index++) {
//         const element = faculty[index];
//         console.log(element)
//         // console.log(index)
        
// }

//  faculty.forEach(function(element,index,array){
//         // console.log(element);
//         console.log(element + " index " + index );
//  });


/* ..............Searching and filtring in an array............................... */
/** Puss method in java script................ */
// const animal =[`goat`,`cow`,`ox`];
// // animal.push(`Library`);
// animal[2]="dog"

// console.log(animal);


/*  unshift method in java script.............. */
 // This method puss the value at the fiest index in array............

//  const books=[1,0,6,20000000,2,56,4,10000,200000,4000]
// books.unshift(2,56);
//  books.sort(function(a , b)
//  {
//        return a - b
//  }); // this return as string
//  books.reverse();
//  console.log(books);

/* ................Array_Prototype_PoP().............. */
// const plants=[`brrocali`,`cauliflower`,`banana`,`tomato`,`potato`];
// console.log(plants);
// console.log(plants.pop()); //this will remove the laast element of array.
// console.log(plants);


/* ...........Array_Prototype_shift.............. */
// const plants=[`brrocali`,`cauliflower`,`banana`,`tomato`,`potato`];
// console.log(plants);
// console.log(plants.shift()); //this will remove the first element of array.
// console.log(plants);



/* Challenging task. 
1. Add dec at the end of an array
2. what is the return value of splice method
3. update march to March (Update)
4. Delete june fron array
The Array is "const month=[`jan`,`march`,`April`,`june0,``]"
*/

const month=[`jan`,`march`,`April`,`June`,`July`];
console.log(month);  
month.push(`dec`);//Add dec at the end of an array
console.log(month);


month[1]="March";  //update march to March (Update)
console.log(month);
month.splice(3,1);  //Delete june fron array
console.log(month);
