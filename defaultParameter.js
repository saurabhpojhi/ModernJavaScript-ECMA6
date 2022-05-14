// multiply of 2 no


//3s6
// function mult(a,b){
//     console.log(a*b);
// }

// mult(4);    // if pass only one value like 4 get output like ...NaN 

// function mult(a,b){
//    b = (typeof b !== 'undefined') ? b:3
//     console.log(a*b); 
// }

// mult(4);    // if pass only one value like 4 get output like 12

// now im Es6

function mult(a,b=2){
    console.log(a*b);
}
mult(4);



const mult1 = (a,b=4,c=5) => {
    console.log(`${a*b*c}`);
}
mult1(4);
