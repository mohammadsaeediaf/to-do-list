// selector:
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todos-button");
const todoListcontainer = document.querySelector(".todolist-container");
const todosFilter = document.querySelector(".todos-filter");
const resetBtn = document.querySelector(".reset-btn");
//add EventListener

todoButton.addEventListener("click", addTodo);
todoListcontainer.addEventListener("click", checkRemove);
todosFilter.addEventListener("click", todoFilter);
resetBtn.addEventListener("click", reset);

// functions
function addTodo(e) {
  e.preventDefault();
  // console.log(e);
  if (todoInput.value == "") {
    alert("Please Enter Your Plan");
  } else {
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
}

function checkRemove(e) {
  const classList = [...e.target.classList];
  // console.log(e.target.classList);
  // const item = e.target.parentElement.parentElement;
  if (classList[1] === "fa-check-square") {
    const checkSquare = e.target.parentElement.parentElement;
    checkSquare.classList.toggle("compeleted");
  } else if (classList[1] === "fa-trash-alt") {
    const item = e.target.parentElement.parentElement;
    item.remove();
  }
}
function todoFilter(e) {
  const todos = [...todoListcontainer.childNodes];
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
      case "Compeleted":
        if (todo.classList.contains("compeleted")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "Uncompleted":
        if (!todo.classList.contains("compeleted")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function reset() {
  const todos = [...todoListcontainer.childNodes];
  todos.forEach((todo) => {
    todo.style.display = "none";
  });
}
