var a = 20;
function f1(){
    var x = undefined  // hoisting
    console.log(a);
    var a = 30;
}
f1()