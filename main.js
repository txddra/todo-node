//step one:
const fs = require('fs');
const { listenerCount } = require('process');

// const readline = readline('readline');
//step two:
//an array that will hold our 'todos'
//not sure what that means
const todoArr = [];
const menu  =` you can:
1. add a task.
2. remove a task.
3. mark a task complete.
4. mark a task incomplete.
5. quit the app.
`; 


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
// console.log(  loadTodos())
// console.log(todoArr)


const displayTodos = function(printedNum){
for(let i =0; i < todoArr.length; i++){
    console.log('\nYour current todos are:')
const task = todoArr[i];
const listItem = todoArr [0];
const completeness = todoArr[1];
 let num = i +1;
let todoArrLine = '';
if(printedNum){
    todoArrLine =` ${todoArrLine} ${num} . `;
}
todoArrLine = todoArrLine + listItem + ' - ';
if (completeness === 'complete'){
    todoArrLine = todoArrLine + '✅'

}else{
    todoArrLine = todoArrLine + '✖';
}
console.log(todoArrLine);
}
}
 
const saveTodos = function(){
    const rowOfStrings = [];
    for(const todo of rows){
    rowOfStrings.push(`${todo[0]}, ${todo[1]}`);


    }
}