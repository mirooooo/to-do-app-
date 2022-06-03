const form = document.querySelector("#to-do");
const todoList = document.querySelector("#todo-list");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    console.log(e);
  } else if (e.target.tagName === "LI") {
    e.target.classList.add("crossedToDO");
    isCompleted 
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoInput = document.querySelector("#todo-input");
  const newLi = document.createElement("li");
  if (todoInput.value === "") {
    return '';
  }
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = " Delete";
  newLi.textContent = todoInput.value;
  newLi.classList.add("todo-list");
  todoList.appendChild(newLi);
  newLi.appendChild(deleteBtn);
  deleteBtn.classList.add('delbtn')
  todoInput.value = '';


   // save to localStorage
   savedTodos.push({ task: newLi.textContent, isCompleted: false });
   localStorage.setItem("todos", JSON.stringify(savedTodos));
 });
