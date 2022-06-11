// arrow funcation also called fat function

// es5

// var sum = function(){
//     var a =5;
//     var b= 10;
//     return a+b;
// }

// console.log(sum());

//  es6

const sum1 = () =>{
    let a = 10;
    let b= 20;
    return a+b;
}
console.log(sum1());

//  let a= 10;
//  let b=20;
//  const sum2 = () => a+b
//  console.log(sum2())


//  let a = 20;
//  const sum3 = (b) => a+b

//  console.log(sum3(20));


const add = (a,b) => a+b

console.log(add(30,30))