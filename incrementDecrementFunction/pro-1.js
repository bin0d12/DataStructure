for(let i =0; i <=9; i++){
    console.log(`iterate 1st ${i}`);  // it prints 10 bcoz it starts with 0 index
}

for(let i =1; i <=9; i++){
    console.log(`iterate2nd ${i}`);  // it prints 9 time bcoz it starts with 1
}

for(let i =1; i <=9; ++i){
    console.log(`iterate2nd3rd ${i}`);  // it prints 9 time bcoz it starts with 1
}

// print 9,8,7,6,5

for(let i =10; i >= 5; i--){
    console.log(`prints from ${i}`);
}