const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const nameuser = document.querySelector("#username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//유저이름을 넣은 후 버튼을 누르면 화면에 greeting 내용이 표시되는 함수를 만듭니다.
function onSubmitUsername(event) {
  //preventDefault로 기본동작을 막습니다.
  event.preventDefault();
  const username = loginInput.value;
  if (username.length < 2) {
    alert("2글자 이상의 이름을 입력하세요!");
  } else {
    timeGreeting();
    makeUsername(username);
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
  }
}

//greeting에 시간에 맞는 인사를 넣고 hidden 클래스 명을 조절합니다.
function timeGreeting() {
  const hour = new Date().getHours();
  greeting.classList.toggle(HIDDEN_CLASSNAME);
  if (hour <= 6 && hour > 12) {
    greeting.innerText = "Good Morning,";
  } else if (hour <= 12 && hour > 18) {
    greeting.innerText = "Good Afternoon,";
  } else {
    greeting.innerText = "Good Evening,";
  }
}

//nameuser에 유저이름을 넣고 hidden 클래스 명을 조절합니다.
function makeUsername(name) {
  nameuser.innerText = `${name}`;
  nameuser.classList.toggle(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//localStorage의 유저이름 저장여부에 따라 나타나는 화면을 다르게 만듭니다.
if (savedUsername === null) {
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitUsername);
} else {
  timeGreeting();
  makeUsername(savedUsername);
}
