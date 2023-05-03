let student1 = {
    "name": "binod",
    "rollNo": 1,
    "stream": "pcm",
    "score": 360
}
let student2 = {
    "name": "sameer",
    "rollNo": 2,
    "stream": "angular",
    "score": 360
}
let student3 = {
    "name": "sujit",
    "rollNo": 3,
    "stream": "react",
    "score": 360
}

let standard = [student1, student2, student3];
// for(let i =0; i < standard.length; i++){
//     console.log(standard[i].name);
//     console.log(standard[i].rollNo);
//     console.log(standard[i].stream);
// }

// standard.forEach((item => {
//     console.log(item.name);
//     console.log(item.rollNo);
//     console.log(item.stream);
// }))

standard.forEach(printStudents)  // this is called callback function
// passing function as an argument that is called called

function printStudents(item) {
    // console.log(item.name);
    // console.log(item.rollNo);
    // console.log(item.stream);
    // if you have multiple keys in object
    for(let keys in item){
        console.log(item[keys]);
    }
}