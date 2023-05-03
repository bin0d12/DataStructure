const score = ["8.12", "8.34", "9", "9.12", "10"];


// let winner = score[0]
// let second_runner = score[1]
// let third_runner = score[2]

// this is destructuring
// let [winner,second_runner, third_runner] = score
// you can skip for getting the data
let [ , ,winner,second_runner, third_runner] = score

console.log(winner);
console.log(second_runner);
console.log(third_runner);