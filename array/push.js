let arr = ["Audi", "BMW", "Hyundai", "jaguar", 0, true, undefined]

console.log(arr.length);
arr.push('kia');
console.log(arr.length);
console.log(arr.push("TATA"));   // push is only return the number
console.log(arr.pop());
console.log(arr);

console.log(arr.sort()); //this return ascending order

console.log(arr.reverse());   //this returns descending order

console.log(arr.includes('bmw'));  // false-== > bcoz it is case sensitive 
console.log(arr.includes("BMW"))   // it returns true
console.log(arr.includes("BMW",2))   // it returns false bcoz we are checking after 3 index


// split method

let str = "Hello from CRIO welcome to session 5"
let convertToArray = str.split(" ")
console.log(convertToArray);

for(let i =0; i < convertToArray.length; i++){
    if(convertToArray[i] === 'CRIO'){
        convertToArray[i] = convertToArray[i].toLocaleLowerCase()
        console.log(convertToArray[i] = convertToArray[i].toLocaleLowerCase(), "tttttttttt");
    }
    console.log(convertToArray[i]);
}
console.log(convertToArray.join(" "));

let string = "welcome";

let convertToArr = string.split("");
console.log(convertToArr.reverse().join(""));