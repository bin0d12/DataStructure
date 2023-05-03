let athlete = {};

athlete['name'] = "binod"
athlete["sports"] = "cricket"
athlete['num'] = 700863;
athlete['home address'] = "delhi"

console.log(athlete.num);
console.log(athlete.sports);
console.log(athlete.name);
// why we are using an array is see the below example
// console.log(athlete.home address);  // this is an error string you can't pass by space
// best practice is 
console.log(athlete['home address']);   // delhi it returns delhi
console.log(athlete['num']);
console.log(athlete['name']);
console.log(athlete['sports']);
let obj = {}
obj['name'] = "manoj"
console.log(obj.name);