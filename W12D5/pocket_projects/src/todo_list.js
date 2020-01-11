
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const addTodos = document.querySelector(".add-todo-form");
const todoList = document.querySelector(".todos");

const addTodo = function (event) {
    event.preventDefault();
    const todoInput = document.querySelector("[name=add-todo]").value;
    const todo = {todoInput, done: false};
    todos.push(todo);
    populateList();
    localStorage.setItem("todos", JSON.stringify(todos));
    
    event.currentTarget.reset();
}

const populateList = function() {
    todoList.innerHTML = "";
    todos.forEach((todo, index)=> {
        const li = document.createElement("li");
        const label = document.createElement("label")
        label.innerHTML = todo["todoInput"];
        const inputT = document.createElement("input");
        inputT.setAttribute("type", "checkbox")
        inputT.checked = todo["done"]
        inputT.className = "checkbox"
        inputT.setAttribute("index", index)
        li.appendChild(inputT);
        li.appendChild(label);
        todoList.appendChild(li);
        
    })
}

populateList();
addTodos.addEventListener("submit", addTodo);

checks = document.querySelectorAll(".checkbox");

const clickCB = function(event) {
    const check = event.target
    const todo = todos;
    if (check.className === "checkbox") {
        checked = todos[check.getAttribute("index")].done
        if (checked === true){
            checked = false
        } else {
            checked = true
        }
        todos[check.getAttribute("index")].done = checked;
    } else {
        return;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    populateList();
}
        
todoList.addEventListener("click", clickCB);

            
            
            