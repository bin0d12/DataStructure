let roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']
let numbers = [1,2,3,4,5,6,7,8,9,10]

function printEvenRoman(num){
    // for(let i =1; i<num.length; i = i+2){
    for(let i =0; i<num.length; i++){
        if(i % 2 == 1 ){
            console.log(num[i]);
        }
    }
}
printEvenRoman(roman)
printEvenRoman(numbers)