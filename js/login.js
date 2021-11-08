const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("h1#greeting");

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
    makeGreeting(username);
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
  }
}

//greeting에 유저이름을 넣고 hidden 클래스 명을 조절합니다.
function makeGreeting(username) {
  greeting.innerText = `안녕하세요! \n${username}님`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//localStorage의 유저이름 저장여부에 따라 나타나는 화면을 다르게 만듭니다.
if (savedUsername === null) {
  //유저이름이 저장되어 있지 않다면 loginForm부터 보여줍니다.
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitUsername);
} else {
  //유저이름이 저장되어 있다면 greeting 내용을 보여줍니다.
  makeGreeting(savedUsername);
}
