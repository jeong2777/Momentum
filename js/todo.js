const toDoForm = document.getElementById("todo_form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOARR_KEY = "todoArr";

let todoArr = [];

//localStorage에 키와 값을 주는 함수입니다.
function saveTodo() {
  localStorage.setItem(TODOARR_KEY, JSON.stringify(todoArr));
}

//X가 선택된 li를 삭제하는 함수입니다.
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArr = todoArr.filter((arr) => arr.id !== parseInt(li.id));
  saveTodo();
}

//form이 제출될 때 li를 만들어 표시하는 함수입니다.
function addTodo(inputValue) {
  const li = document.createElement("li");
  li.id = inputValue.id;
  const span = document.createElement("span");
  span.innerText = inputValue.text;
  const button = document.createElement("span");
  button.classList.add("todobutton");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//form이 제출되면 함수를 실행합니다.
function onSubmitTodo(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: inputValue,
    //삭제 시 선택된 li를 구별하기 위해 현재 시간을 id로 줍니다.
    id: Date.now(),
  };
  todoArr.push(newTodoObj);
  addTodo(newTodoObj);
  saveTodo();
}

toDoForm.addEventListener("submit", onSubmitTodo);

const savedTodos = localStorage.getItem(TODOARR_KEY);

//localStorage에 저장된 값이 있다면 그 값을 각각 변환해서 나타냅니다.
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todoArr = parsedTodos;
  parsedTodos.forEach(addTodo);
}
