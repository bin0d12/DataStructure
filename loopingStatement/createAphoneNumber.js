let number = [9,8,7,6,5,4,3,2,1]
function getPhoneNo(num){
    let str = ""
    for(let i = 0; i < num.length; i++){
         str += num[i]
    }
    return str
}
console.log(getPhoneNo(number))
