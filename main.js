//step one:
const fs = require('fs');


//step two:
//an array that will hold our 'todos'
//not sure what that means
const input = process.argv[2]

//step three: 
const file = fs.readFileSync('./todos.csv', 'utf8')