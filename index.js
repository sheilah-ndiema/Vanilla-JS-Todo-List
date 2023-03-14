//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterTodo = document.querySelector(".filter-todos")

//Event-Listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteTodo)

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo")
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo);
  console.log(newTodo)
  //checkmark button

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton);

  //Delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class=\"fa-solid fa-trash\"></i>"
  trashButton.classList.add("trash-btn")
  todoDiv.appendChild(trashButton);


  //Append to list
  todoList.appendChild(todoDiv);
  //clear todo input value

  todoInput.value = ""
}

function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall")

    todo.addEventListener("transitionend", function () {

      todo.remove();
    })
  }

  //checkmark

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

}

function filterTodo() {

}