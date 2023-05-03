let obj = [
    {name: "binod", salary: 10},
    {name: "sameer", salary: 2},
    {name: "sujit", salary: 10},
    {name: "sanu", salary: 20},
    {name: "swapnil", salary: 2},   
]
// this one if the name is matching then it will return the salary
// function f1(val){
//     for(let i =0; i < obj.length; i++){
//         if(obj[i].name === val){
//             return obj[i].salary
//         }
//     }
// }
// console.log(f1("sanu"))

function f1(data){
    obj.filter((val) => {
        // if(val.salary > data){
        if(val.salary < data){
           console.log(val.name)
        }
    })
}
console.log(f1(5))

    