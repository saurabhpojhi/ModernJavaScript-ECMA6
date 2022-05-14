// Number & Global Methods Iin ES6

// 1. the isFinite() method

// let num =5;
// console.log(isFinite(num)); // output :  true

// let num1 =Infinity
// console.log(isFinite(num1));   // output :  false

// let num2 =NaN;
// console.log(isFinite(num2));   // output :  false

// let num3 ="saurabh";
// console.log(isFinite(num3));   // output :  false


let number = Infinity;
console.log(isNaN(number));   // false

let number1 = 'vivek'
console.log(Number.isNaN(number1));   // false

let num11 = 5;
console.log(Number.isInteger(num11)); // true