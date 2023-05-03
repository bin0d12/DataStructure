let arr = [1,2,3,1,5,6,2,6];

let removeArray = arr.filter((val, ind)=> {
   return arr.indexOf(val) !== ind
})
console.log(removeArray);

// if you want duplicate numbers then you have to use !== in the condition
// using for loop   
// for(let i = 0; i < arr.length; i++){
//     console.log(i);
// }