let arr = [1,1,2,2,3,5,3,4,4,5,,6,6,7,8,9];

console.log(arr.sort((a,b) => {
    return b - a
}));

console.log(arr.sort());