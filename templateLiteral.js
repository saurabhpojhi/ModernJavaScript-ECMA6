// TemplateLiterals  or Template Strings

// es5

// here we used concatnet to used + sign 
console.log("my name is saurabh" + " my age is 27");  // output:- my name is saurabh my age is 27


// ES6

// here only we used backtick to concatnet the two string 
console.log(`my name is saurabh. my age is 27.`);   // output:- my name is saurabh my age is 27

// // es5

// let firstName = "saurabh";
// let lastName = "gupta";
// console.log("My name is " + firstName + ". My last name is  " + lastName + ".");  // output My name is saurabh. My last name is  gupta.

// es6

let firstName = "saurabh";
let lastName = "gupta";
console.log(`My name is ${firstName}. My last name is ${lastName}.`);  // output My name is saurabh. My last name is  gupta.

// // es5

// let a =5 ;
// let b = 10;
// console.log('fifteen is '+ (a+b)+ ' and/not' + (2*a+b)+ '.');

// es6 
let a =5 ;
let b = 10;
console.log(`fifteen is ${a+b} and  not  ${2*a+b}.`);

// es6 methods 
console.log(`${firstName}`.startsWith('s'));
console.log(`${firstName}`.endsWith('h'));
console.log(`${firstName}`.includes('saurabh'));
console.log(`${firstName} ${lastName} `.repeat(10));