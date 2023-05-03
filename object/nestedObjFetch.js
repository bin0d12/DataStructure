let address = {
    "house_no": 10,
    "street": "charlee street",
    "apartment": "abc apartment",
    "city": "new york"
}
let employee = {
    "name": "kevin",
    "age": 26,
    "email": "kevin@gmail.com",
    "addr": address,
    printDetails: function(){
           return `${this.name} with age ${this.age} having emil address ${this.email}`
        }
}

console.log(employee.addr.city);
console.log(employee["addr"]["city"]);