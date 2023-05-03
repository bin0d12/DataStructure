// function doAssignment(assignmentNumber, callback){
//     console.log("starting:" +  assignmentNumber);
//     callback()
// }
// function finished(){
//     console.log("this is finish function");
// }
// doAssignment("assignment-1", finished)

function doAssignment(assignmentNumber){
    console.log("starting:" + assignmentNumber);
    const finished = function(){
        console.log("finished: " + assignmentNumber);
    }
    finished()
}
doAssignment("Assignment1")