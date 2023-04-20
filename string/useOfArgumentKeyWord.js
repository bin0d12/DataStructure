function f1(name1, name2){
    // return arguments[0] --> it will give name1
    // return arguments[1] --> it will give name2
    return arguments[0][0] + arguments[1][0]
}
console.log(f1("Binod", "Sameer"))

// arrow function

 let arrowFun = (name1, name2) => {
    return arguments[0][0] + arguments[1][0]
 }

 console.log(arrowFun("sujit", "linkan"));