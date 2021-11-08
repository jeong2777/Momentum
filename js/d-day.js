const h2 = document.querySelector("div#dday_div h2");

//올해의 마지막 날을 디데이로 구하는 함수를 만듭니다.
function onUntilDday() {
  const now = new Date().getTime();
  const dDay = new Date(
    `${new Date().getFullYear()}-12-31T00:00:00+0900`
  ).getTime();
  const gap = dDay - now;
  const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hour = String(
    Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minute = String(
    Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const second = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  h2.innerText = `${day}일 ${hour}시간 ${minute}분 ${second}초 \n남았습니다!`;
}

onUntilDday();
setInterval(onUntilDday, 1000);
