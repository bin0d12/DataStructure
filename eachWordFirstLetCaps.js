// let input = "the quick brown fox";
// let conArr = input.split(" ")
// let c = ""
// for(let i = 0; i < conArr.length; i++){
//     // c += conArr[i].charAt(0).toUpperCase() + conArr[i].slice(1)+" "
//     c += conArr[i].charAt(0).toUpperCase() + conArr[i].slice(1) + " "
//     // let op = val.charAt(0).toUpperCase() + val.slice(1)
//     // console.log(op);
// }
// console.log(c);

// let data;
// for(let i =0; i < input.length; i++){

// }
// console.log(data);
// first - we need to check if the first char is have space or not 
// second - we need to check first char is caps or not
// forth - in between chars there have space or not.
// fifth - 
let input = "the quick brown Fox then It is";
let str = "";
for (let i = 0; i < input.length; i++) {   //n+1
  // console.log(input[i] != " ", "this is checking space");
  // console.log(i==0, "it is checking sentence first letter have space or not");
  // console.log(input[i -1], "it is checking in between character space");
  if (input[i] != " " && (i == 0 || input[i - 1] == " ")) { //
    // it is checking first char with no space and before starting char should be a space
    // console.log(input[i].charCodeAt(0), "input[i].charCodeAt(0)");
    if (
      input[i].charCodeAt(0) >= "a".charCodeAt(0) &&
      input[i].charCodeAt(0) <= "z".charCodeAt(0)
    ) {
      str += String.fromCharCode(input[i].charCodeAt(0) - 32);
    } else {
      str += input[i];
    }
  } else {
    str += input[i];
  }
}
console.log(str);
// console.log(input[i - 1], "this is differ");

// console.log('a'.charCodeAt(0) - 32);

// console.log(String.fromCharCode(input.charCodeAt(0) - 32))
// console.log(String.fromCharCode(input.charCodeAt(0) - ("a".charCodeAt(0) - "A".charCodeAt(0))))


// so basically broke down into 2 parts 
// how to identify wether my current char is the starting of a new word 
// 2nd was- how to capitalize the smaller case letter