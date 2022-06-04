const form = document.querySelector("#to-do");
const todoList = document.querySelector("#todo-list");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoInput = document.querySelector("#todo-input");
  const newTodo = document.createElement("li");
  newTodo.isCompleted = false;
  if (todoInput.value === "") {
    return '';
  }
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = " Delete";
  
  newTodo.textContent = todoInput.value;
  
  newTodo.classList.add("todo-list");
  todoList.appendChild(newTodo);
  deleteBtn.classList.add('delbtn')
  todoInput.value = '';
  
  savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
  
  newTodo.appendChild(deleteBtn);
});
todoList.addEventListener("click", (e) => {
  let clickedListItem = e.target;

  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    console.log(e);
  } else if (e.target.tagName === "LI") {
    if (!clickedListItem.isCompleted) {
      clickedListItem.style.textDecoration = "line-through";
      clickedListItem.isCompleted = true;
    } else {
      clickedListItem.style.textDecoration = "none";
      clickedListItem.isCompleted = false;
    }
    
  }
});
