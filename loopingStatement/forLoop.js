function loop(){
// using for loop
for(let i =0; i <=9;i++){
    console.log(`session${i}`);
}
// it
    // console.log("session1");
    // console.log("session2");
    // console.log("session3");
    // console.log("session4");
    // console.log("session5");
    // console.log("session6");
    // console.log("session7");
    // console.log("session8");
    // console.log("session9");
}
loop()

// uses of var and let in for loop
// using let
for(let i = 1; i <= 9; i++){
    console.log(`iterate${i}`);
}
console.log(`iterate2nd${i}`);   // when you use let it will give an error reference error like i is not defined

// using var

for(var i = 1; i <= 9; i++){
    console.log(`iterateWithVar${i}`);
}

console.log(`iterateWithVar${i}`);  // it iterate 10 time 
// it is creating memory leak