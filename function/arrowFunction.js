// thi is used for sort hand method

// of you have one argument u no need to write parenthesis 
// see the below example
// 
// console.log(sayMyName('biNOD'), " this is using var");

var sayMyName = name => `Hello ${name}`
console.log(sayMyName('biNOD'));

// if you have multiline logic then see the below code

var sayMyName1 = name => {
    // console.log(this, "thisssss keyword");
    // console.log(arguments, "argument keyWord");
    let capitalFirstLatter = name[0].toUpperCase() + name.substring(1).toLowerCase() 
    return capitalFirstLatter
}

console.log(sayMyName1('biNOD'));


// you can write this using sort hand method
// const sum = (a,b) =>{
//    return a + b
// }
// why
// if you have one line statement no need body
const sum = (a,b) => a +b
console.log(sum(2,3));