let binodAddress = {
    houseNo: 1,
    street: "bada sahi",
    apartment : "prestige group",
    city: "bangalore"
}
const rajuAddress = binodAddress;

let swapnaAddress = {
    houseNo: 1,
    street: "bada sahi",
    apartment : "prestige group",
    city: "bangalore"
}
console.log(binodAddress);
console.log(rajuAddress);
console.log(binodAddress === rajuAddress);
console.log(binodAddress === swapnaAddress);