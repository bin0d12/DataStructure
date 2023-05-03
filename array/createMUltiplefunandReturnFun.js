function add(x, y){
    return x + y
}
function sub(x, y){
    return x - y
}
function mul(x, y){
    return x * y
}
function div(x, y){
    return x / y
}

const calcArr = [add, sub, mul, div]

for(let i =0; i < calcArr.length; i++){
    console.log(calcArr[i](10, 5));
}