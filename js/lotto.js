const lotto_div = document.querySelector("#lotto_div");
const lottoBtn = lotto_div.querySelector("button");
const number = lotto_div.querySelector("#lucky");

//겹치지 않는 랜덤한 6자리 수를 불러옵니다.(로또)
function onShowLottoNumber() {
  const lotto = [];

  //6번 반복합니다.
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 44) + 1;
    for (let j in lotto) {
      //lotto 배열 안에 이미 있는 숫자가 나온 경우 함수를 다시 불러들입니다.
      if (num === lotto[j]) {
        return onShowLottoNumber();
      }
    }
    lotto.push(num);
    number.innerText = `${lotto}`;
  }
}

lottoBtn.addEventListener("click", onShowLottoNumber);
