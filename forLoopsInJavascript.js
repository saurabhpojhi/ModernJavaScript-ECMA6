  // for 

  // 1. For loops In javascript 
  // useful for executing code a desired number of time or for iterating through elements (arrays, strings, maps.. etc)

  let myArray = [0,1,2,3];

      for(let i = 0; i<myArray.length; i++){
          console.log(myArray[i]);
      }
  
      // 2. for Each 
      // useful for iterating through arrays

      let myArray1 =[0,1,2,3,4];
      myArray1.forEach(num =>{
          console.log(num)
      })

// for ... In 
// usefull for accessing key/values pairs in object 

let myObject = {
    key1:'value1',
    key2:'value2',
    key3:'value3'
}

for (let key in myObject){
    console.log(key,myObject[key]);
}