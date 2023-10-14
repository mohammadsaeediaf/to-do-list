// selector:
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todos-button");
const todoListcontainer = document.querySelector(".todolist-container");
const todosFilter = document.querySelector(".todos-filter");
//add EventListener

todoButton.addEventListener("click", addTodo);
todoListcontainer.addEventListener("click", checkRemove);
todosFilter.addEventListener("click", todoFilter);
// functions
function addTodo(e) {
  e.preventDefault();
  // console.log(e);
  const addTododiv = document.createElement("div");
  addTododiv.classList.add("todo-list");
  addTododiv.innerHTML = `
    <li>${todoInput.value}</li>
    <span> <i class="far fa-check-square"></i></span>
    <span> <i class="far fa-trash-alt"></i></span>
    `;
  todoListcontainer.appendChild(addTododiv);
  todoInput.value = "";
}

function checkRemove(e) {
  const classList = [...e.target.classList];
  // console.log(e.target.classList);
  // const item = e.target.parentElement.parentElement;
  if (classList[1] === "fa-check-square") {
    const checkSquare = e.target.parentElement.parentElement;
    checkSquare.classList.toggle("completed");
  } else if (classList[1] === "fa-trash-alt") {
    const item = e.target.parentElement.parentElement;
    item.remove();
    console.log(item);
  }
}

function todoFilter(e) {
  console.log(e.target.value);
  const todos = [...todoListcontainer.childNodes];
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
    }
  });
}
