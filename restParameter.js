// es5

// function sum (a,b,c,d,e,f){
//     console.log(a+b+c+d+e+f);
// }

// sum (1,2,3,4,5,6);

// es6 


   // rest parameter syntax allow to indefinities number of arguumnets it represnts as an array

   function sum (...inputs){    /// here ... is called rest parameter
       console.log(inputs);
      
       let total = 0;
       for(let i of inputs){
           total += i;
       }
       console.log(total);
   }
   sum(1,2,3,4,5,6,10)    // yaha pe jitna v arguments pass kiya woh sab array me output dega 


function fun(a,b,...c){
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
}
fun('Ronaldo','Neymer','Pele','Messi','Edan');     

// output -  
// Ronaldo Neymer
// [ 'Pele', 'Messi', 'Edan' ]
// Pele
// 3
// 2


