n = 2; // prime or not
count =0

for(let i = 1; i<=n; i++){
    if(n % i === 0){
        count++
    }
}
if(count > 2){
console.log("not a prime num");
} else {
console.log('prime no');
}