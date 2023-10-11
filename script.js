// selector:
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todos-button");
const todoListcontainer = document.querySelector(".todolist-container");
//add EventListener


todoButton.addEventListener("click", addTodo);

// functions
function addTodo(e) {
  e.preventDefault();
  console.log(e);
  const addTododiv = document.createElement("div");
  addTododiv.classList.add("todo-list");
  addTododiv.innerHTML = `
  <li>Task 1</li>
  <span> <i class="far fa-check-square"></i></span>
  <span> <i class="far fa-trash-alt"></i></span>
  `;
}
