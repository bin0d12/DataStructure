let globalScope = "this is global scope";
function functionScope(){
    console.log(globalScope);
let globalScope = "this is function scope";
console.log(globalScope)
}
functionScope()