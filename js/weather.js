//나의 API 키를 넣습니다.
const API_KEY = "94cde8e68330f30e0405c9ed822a0ba1";

//유저의 위치에 따라 날씨정보를 가져오는 함수를 만듭니다.
function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const link = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      const tempBox = document.querySelector("#weather li:first-child");
      const nameBox = document.querySelector("#weather li:nth-child(2)");
      const weatherBox = document.querySelector("#weather li:last-child");
      tempBox.innerText = `${data.main.temp}°`;
      nameBox.innerText = data.name;
      weatherBox.innerText = `${data.weather[0].main}`;
    });
}

//유저의 정보를 가져오지 못한 경우 경고창을 띄웁니다.
function onGeoError() {
  alert("Can't find you. No weather for you ;(");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
