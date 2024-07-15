const input = document.querySelector(".input");
const ul = document.querySelector(".ul");
let todos = [];

function addTodo() {
  if (input.value) {
    todos.push({ text: input.value, completed: false });
    console.log(todos);
    displayTodos();
  }
  input.value = "";
}
function editTodo(para) {
  todos[para].completed = !todos[para].completed;
  displayTodos();
}
function deleteTodo(para) {
  todos.splice(para, 1);
  displayTodos();
}
function displayTodos() {
  ul.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    ul.innerHTML += `<div> <li>${todos[i].text} ||   ${
      todos[i].completed ? "complited" : "active"
    }</li><button onclick = editTodo(${i})> edit </button><button onclick = deleteTodo(${i})> delete </button></div>
        `;
  }
}
