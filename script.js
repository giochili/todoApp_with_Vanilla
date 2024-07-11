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
function displayTodos() {
  for (let i = 0; i < todos.length; i++) {
    ul.innerHTML += `<li>${todos[i].text} ||   complited:${todos[i].completed}</li>
        `;
  }
}
