const body = document.querySelector("body");
const bgChangeBtn = document.querySelector("#bgchange_btn");
const allImg = [
  "img/img0.jpg",
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
];

//랜덤 배경화면을 추출하는 함수를 만듭니다.
const createImg = () => {
  const num = Math.floor(Math.random() * allImg.length);
  body.style.backgroundImage = "url(" + allImg[num] + ")";
};

createImg();
bgChangeBtn.addEventListener("click", createImg);
