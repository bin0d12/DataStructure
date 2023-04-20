// substring will take numbers and return as a substring
// starts and ends value less then 0, it treated as 0 only

// syntax 
// StringName.subString(startIndex, EndIndex)
let email = "binodkumar@gmail.com";

function getDomainName(str){
    return str.substring(str.lastIndexOf('.'), str.length)
}
console.log(getDomainName(email));

console.log(email.substring(email.lastIndexOf('.'), email.length - 2));
                        //   this is startIndex   , this is endIndex