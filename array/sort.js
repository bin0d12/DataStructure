// let arr = [0,5,4,8,9,3,8,4,5];
// console.log(arr.sort());


// console.log(0/0);

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius
//   };
  
//   console.log(shape.diameter())
//   console.log(shape.perimeter())

// console.log(+1)
// console.log(!"Lydia")



function createMatrixII(size){
    let mainArr = [];
    let counter = 0
    for(let i =0; i < size; i++){
     let subArr = [];
      for(let j = i; j < i+2; j++){
        subArr.push(j+i)
      }
     mainArr.push(subArr)
    }
    console.log(mainArr)
  } 

  createMatrixII(2)
  function getNameAndLocation() {
  let  ob = {name: "Crio", location: "Bengaluru"};
   console.log(ob)
   const {name, location} = ob;
   console.log(name+" "+location)
 }
 getNameAndLocation()

 function mergedString(str){
    // You only need to implement this function.
    for(let i = 0; i < str.length; i++){
    }
    // console.log(str[0] + str[1]+str[2])
  }

  mergedString(["code", "for", "good", "vibes", "only"])
  