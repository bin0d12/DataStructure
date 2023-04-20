// first char is capital

// input 
let name = "heLLo frOm CrIO"; 
// output 
// op= "Hello from crio"

function capitalFirstChar(str){
    // return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase()
    return str[0].toUpperCase() + str.toLowerCase().substring(1, str.length)
}
console.log(capitalFirstChar(name));