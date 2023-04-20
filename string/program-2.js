function sayMyName(name){
    return (`hello ${name}`)
}
let copySayMyName = sayMyName()  // it will store(hello undefined)
let copySayMyName1 = sayMyName  // it will store hello(function)
console.log(copySayMyName1(2));    // hello undefined(2)
//  it will give error like copySayMyName is not a function

// console.log(typeof ("string" + undefined))