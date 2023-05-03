let employee = {
    "name" : "binod",
    "age": 26,
    "email": "abc@gmail.com",
    printDetails: function(){
    // printDetails: () => {    // in arrow function this key word not working
        // return this.name + "age is" + this.age + "email is " + this.email
       return `${this.name} with age ${this.age} having emil address ${this.email}`
    }
}
console.log(employee.printDetails());
console.log(employee[2]);   // undefined 


console.log(this);