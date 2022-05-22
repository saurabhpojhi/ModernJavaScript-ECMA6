
//   hoisting means Memory to relate 
// Hoisting is a javascript mechanism where variable and function declaretion are moved to the yop of ther scope before the code execution.

// sum (5,10); 

//  var sum = function  (a,b){
//     add = a+b;
//     console.log(add);
// }
         // output here got   TypeError: sum is not a function
        
         var sum = function  (a,b){
            add = a+b;
            console.log(add);
        }
        sum (5,10);    // output here got  15 

// sum (5,10); 

// function sum (a,b){
//     add = a+b;
//     console.log(add);
// }                           
   
// // or 

// function sum (a,b){
//     add = a+b;
//     console.log(add);
// }
// sum (5,10);    
                      //       output here got   15