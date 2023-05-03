// undefined

console.log(vari); // undefined
var vari = 10

// console.log(lettt);  // cannot access lett before initialization
// let lettt = 10

// console.log(constttt);  // Cannot access 'constttt' before initialization
// const constttt = 10

// this is function declaration
console.log(functionDeclaration(1,2));  //3
function functionDeclaration(a,b){
    return a + b
}

console.log(functionDeclaration(1,2));  //3



// function expression
// this is using var
// console.log(functionExpression(2,3));   // using var "functionExpression" is not a function error

// this is using let and const
// console.log(functionExpression(2,3)); // cannot access "functionExpression" before initialization error

const functionExpression = function(a,b){
    return a + b
}
console.log(functionExpression(2,3));  //5
