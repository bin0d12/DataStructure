function createMatrix(size){
    let result = []
    for(let i = 0; i < size; i++){
        console.log(i);
        let subArr = []
        for(let j = 0; j < size; j++){
            console.log(j);
            subArr.push(j)
        }
        result.push(subArr)
        // console.log(i);
    }
    return result
}

console.log(createMatrix(4))