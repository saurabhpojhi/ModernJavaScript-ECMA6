
//   hoisting means Memory to relate 
// Hoisting is a javascript mechanism where variable and function declaretion are moved to the yop of ther scope before the code execution.

// Function Hoisting 


  // even the Es6 also got error

//   sum (10,10); 

//   const sum = (a,b) =>{
//       add = a+b;
//       console.log(add)   
//   }        
                 // ReferenceError: Cannot access 'sum' before initialization

                 const sum1 = (a,b) =>{
                    add = a+b;
                    console.log(add)   
                }        
                sum1 (10,10);        // output 20

// sum (5,10); 

//  var sum = function  (a,b){
//     add = a+b;
//     console.log(add);
// }
         // output here got   TypeError: sum is not a function
        
        //  var sum = function  (a,b){
        //     add = a+b;
        //     console.log(add);
        // }
        // sum (5,10);    // output here got  15 

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