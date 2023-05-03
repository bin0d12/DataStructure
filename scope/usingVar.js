var globalScope = "this is global scope";

// function functionScope(){
//     return globalScope
// }
// console.log(functionScope())


// you can access like this as well
function functionScope1(){
    console.log(globalScope, "globalScope");
   globalScope = "this is accessible from function scope"
    console.log(globalScope);
}








// functionScope1()
// function sayHi() {
//     console.log(name);   // undefined
//     console.log(age);     // cannot access before initialization
//     var name = 'Lydia';
//     let age = 21;
//   }
  
//   sayHi();
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
// //   var is global scope so it is replacing the value while for loop
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

// const shape = {
//     radius: 10,
//     diameter(){
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());

//   const bird = {
//     size: 'small',
//   };
  
//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };
// console.log(mouse.bird.size);
//   console.log(mouse.bird.size, "1")
//    console.log(mouse[bird.size] , "2")
//    console.log(mouse[bird["size"]], "3")


//    let a = 3;
// let b = new Number(3);  // this is typeof object
// let c = 3;
// console.log(typeof b, b);
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);