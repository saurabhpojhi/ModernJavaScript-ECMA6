// varibale Hoisting 

   // Note : in the function jab v aap call kr skte  but .. varibale me aap agar pahle call kr rhe h baad me calue assign kr rhe tab v uska value aayega undefined.


var a;

console.log(a);   // undefined

var a =10;
console.log(a);  // 10

console.log(a);
var a =10;    //   output : undefined


var b ;
b = 10;

console.log(b); // 10

// challenges hoisiting using variable and function 

  console.log("I am a" + job); // I am aundefined
  var job = "Web Developer";   
  console.log("I am a "+ job);   //I am a Web Developer

  function whoAMI(){
      console.log("I am a" + job); //I am aundefined
      var job = "Full stack";
      console.log("I am a "+ job);  //I am a Full stack
  }
  whoAMI();


