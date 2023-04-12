// input is 4 
let input = 4;
// output = *
//          * *
//          * * *
//          * * * *
// a0 = (0,0) 
// a1 = (1,0) (1,1)
// a2 = (2,0) (2,1) (2,2)
// a3 = (3,0) (3,1) (3,2) (3,3)


let str = "";
let ans = []
for(let i = 0; i< input; i++){
    // str = " "
    // for(let j = 0; j<= i; j++){
        str += "* "
    // }
    ans.push(str)
}
// return ans;
console.log(ans);