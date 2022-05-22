


// // es5 

//const myproglang = ['js','php','python','java','c'];

// var top1= myproglang[0];
// var top2 = myproglang[1];
// var top3 = myproglang[2];

// console.log("my fev prog lang is "+ top1);


// es6 

const myproglang = ['js','php','python','java','c'];


 //let [top1,top2,top3,top4,top5] = myproglang;

// console.log("my fev prog lang is "+ top1);

// console.log(myproglang.length);
 let [top1,,,,top5]=myproglang;      // yaha pe count kr rhe 1st and last wala element

console.log(`my fav prog lang is ${top1} and my last fav is ${top5}`);


// swap to number without third variable 

let a =5 ;
let b = 10;

[a,b] = [b,a];

// let temp = a;
// a = b;
// b = temp;

console.log(`the value of a is ${a} and value of b is ${b}`);
