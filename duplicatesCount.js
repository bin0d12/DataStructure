let str = "aabbccddaabbddd"
let makeArr = str.split("")
let eleDuplCaont = {};

for(let i = 1; i < makeArr.length; i++){
   console.log(makeArr[i]);
}

// makeArr.forEach((elements) => {
//     eleDuplCaont[elements] = (eleDuplCaont[elements] || 0) + 1
// })
// console.log(eleDuplCaont);