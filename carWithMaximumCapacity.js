
let data = [
    { 
        color: 'red',
        type: 'Station Wagon',
        capacity: 5
    },
    {
        color: 'green',
        type: 'Convertible',
        capacity: 2
    },
    {
        color: 'white',
        type: 'MiniVan',
        capacity: 4
    }
  ];
  

function maxCapacityType(arr) {
    for(let i =0; i< arr.length; i++){
        console.log(arr[i].capacity > 4);
        if(arr[i].capacity >4){
            console.log(arr[i].type)
        }
    // console.log(arr[i].type)
    }
}
console.log(maxCapacityType(data))