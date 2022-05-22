// scope chain is used to resolve the value of variable names in javascript

// at the top of the scope chain is the global scope .

// Lexical scopiing - a function that luxicaly within another fucntion get access to the scope of the outer function.

  var a = "hello guys";

  function first(){
      var b = " how are you";
       
      second();

      function second(){
          var c = "myself saurabh";
          console.log(a+b+c);
      }
  }
  first();


