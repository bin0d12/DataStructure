const address = {
    houseNo : 10,
    city: "Berhampur",
    pin: 761008
}
// this is storing the copy of address value
let usingSpreadOperator = {...address}
// this is storing the address reference
let rajuAddress = address
console.log(address);
console.log(rajuAddress === address);        // true
console.log(usingSpreadOperator === address); // false


// copy using =;

rajuAddress.city = "bhubaneswar";
console.log(rajuAddress);
console.log(address);

usingSpreadOperator.pin = 500018
console.log(usingSpreadOperator, "using spreed operator and doing the copy");
console.log(address, "it is not effected ");
