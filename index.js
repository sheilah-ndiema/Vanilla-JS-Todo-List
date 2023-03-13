//selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")


//Event-Listeners
todoButton.addEventListener("click", addTodo)

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo")
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = 'hey';
  todoDiv.appendChild(newTodo);
  //checkmark button

  const completedButton = document.createElement("button");
  completedButton.textContent = "done";
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton);

  //Delete button
  const trashButton = document.createElement("button");
  trashButton.textContent = "delete";
  trashButton.classList.add("complete-btn")
  todoDiv.appendChild(trashButton);


  //Append to list
  todoList.appendChild(todoDiv);
}