
function f1(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);  
    } else if(num2 > num1 && num2 > num3){
        console.log(num2);
    } else {
        console.log(num3);
    }
}
f1(6,8,10)

// using nested loop

function f2(name1, name2, name3){
    if(name1 > name2){
        if(name1> name3){
            console.log(name1);
        }
    } else if(name2 > name1){
        if(name2 > name3){
            console.log(name2);
        }
    } else {
        console.log(name3);
    }
}
f2(5,6,7)