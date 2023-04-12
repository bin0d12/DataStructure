// function myFunction(num){
//     if(num === 0) 
//     return;
//     myFunction(num-1)
// }
// console.log(myFunction(5))


function printForword(num){
    if(num === 0)
    return;
    printForword(num -1)
    console.log(num);
}
printForword(4)