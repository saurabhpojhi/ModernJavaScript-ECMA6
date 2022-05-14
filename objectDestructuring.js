
// // case 1
// const biodata = {
//     name:"saurabh",
//     age:27,
//     deg:"MCA"
// }

// let {name,age,deg}= biodata;   /// this is destructuring 

// console.log(`my name is ${name}. my age is ${age}. my deg is ${deg}.`);


// case 2 
const biodata = {
    name:"saurabh",
    age:27,
    deg:"MCA",
    hobby:{
        first:'playing',
        sec:'reading book'
    }
}

let {name:myname,age,deg, hobby}= biodata;   // here simple string variable me store kr diya   

console.log(`my name is ${myname}. my age is ${age}. my deg is ${deg}. I love hobby like ${hobby.sec}`);

