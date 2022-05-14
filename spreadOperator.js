// spread Operator .. its allowa to iterable to expand in plcae where 0+ argumtes are expects.
// it is mustly used in variable where array thre is more than 1 values are expected .

// es5

// function sum(a,b,c){
//     console.log(a+b+c);
// }
// //sum(1,2,3);
// var arrval = [1,2,3];
// sum.apply(null, arrval);

// es6 

// function sum(a,b,c){
//     console.log(a+b+c);
// }

// var arrval = [1,2,7];
// console.log(arrval)
// sum(...arrval);


let arr1 =[1,2,3];
let arr2 =[4,5,6];
let arr3=[7,8,9];

// replace concat()

//arr1 =arr1.concat(arr2);

arr1 = [...arr1,...arr2,...arr3];  // this is spred operator
console.log(arr1);

// replace copy()

let arrc1 = [1,2,3];
//let arrc2 = arr1;
//arr2.push(4,5)
let arrc2 = [...arrc1,4,5]
console.log(arrc2);
