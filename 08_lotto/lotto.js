document.addEventListener("DOMContentLoaded", () => {
  //DOM 요소 가져오기
  const lotto = document.querySelector("#lotto");
  const bt = document.querySelector("#bt");

  //로또 번호 저장 배열
  let arr = [];

  bt.addEventListener("click", () => {
    //배열초기화
    arr = [];
    arr.length = 0;
    //로또번호 생성
    while (arr.length < 7) {
      const n = Math.floor(Math.random() * 45) + 1;
      if (!arr.includes(n)) arr.push(n);
      console.log(arr);
    }
    //정렬
    arr.sort((a, b) => a - b);
    console.log(arr);

    let tm = arr.map(
      (item) => `<span class="sp${Math.floor(item / 10)}"> ${item} </span>`
    );
    console.log(tm);
    //6번째에 플러스 추가
    tm.splice(6, 0, "<span id='spplus'>+</span>");
    lotto.innerHTML = tm.join(" ");
    console.log(lotto.innerHTML);
  });
});
