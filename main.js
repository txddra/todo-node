//step one:
const fs = require('fs');


//step two:
//an array that will hold our 'todos'
//not sure what that means
const todoArr = []

//step three: 

 

//split new 
 const file = fs.readFileSync('./todos.csv', 'utf8')
    //this line makes them into rows
    const splitFile = file.split('\n')


const loadTodos = function(){
//this line makes them into string form
   
    // const subArr = file

    //loop through the rows, prints out elements of array, one by one
    for(let i = 0; i < splitFile.length;i++){
        console.log(todoArr.push(splitFile[i].split(',')))
    }
    console.log(splitFile)
    console.log(splitFile[0].split(','))
}
console.log(loadTodos())
console.log(todoArr)


// const displayTodos = function(){
// for(let i =0; i < ){

// }
// }