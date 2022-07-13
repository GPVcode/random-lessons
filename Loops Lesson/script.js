var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//For loop is one of tha main loops. todos.length is saying "how long is the length?(5)" i++ mean i + 1. if todos.length is greater that i then i++
var todosLength = todos.length;
for (var i=0; i < todos.length; i++) {
   console.log(i);
}


//For each
function logTodos(todo, i) {
    console.log(todos, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);


// While Loops
var counterOne = 10;
while (counterOne > 10) {
    console.log(counterOne);
    counterOne--;
}

// Do while loop
var counterTwo = 10
do {
    console.log("do while", counterTwo);
    counterTwo--;
} while (counterTwo > 0);