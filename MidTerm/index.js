document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector("img");
  const name = document.querySelector("#wSec");
  const input = document.querySelector("input");
  //   console.log(input);
  const btok = document.querySelector("#inSec>button");
  //   console.log(btok);
  const result = document.querySelector("#sec3");
  const bts = document.querySelectorAll("#sec2>button");

  img.style.display = "none";
  name.style.display = "none";
  input.style.display = "none";
  btok.style.display = "none";
  result.style.display = "none";

  console.log(bts);
  let obj = {
    0: "사과",
    1: "바나나",
    2: "당근",
    3: "가지",
  };
  //3번 단어 공부
  bts[0].addEventListener("click", (e) => {
    e.preventDefault();

    console.log("bt1 clicked");
    img.style.display = "inline";
    name.style.display = "inline";
    input.style.display = "none";
    btok.style.display = "none";
    result.style.display = "none";

    let n = Math.floor(Math.random() * 4);
    img.setAttribute("src", `img/${n + 1}.png`);
    let nname = obj[n];
    console.log(nname);
    console.log(n);
    name.innerHTML = `<h2>${nname}</h2>`;
  });
  //4번 단어 연습
  let total = 0;
  let correct = 0;
  bts[1].addEventListener("click", (e) => {
    e.preventDefault();

    console.log("bt2 clicked;");
    img.style.display = "inline";
    input.style.display = "inline";
    btok.style.display = "inline";
    result.style.display = "inline";
    name.style.display = "none";

    n = Math.floor(Math.random() * 4);
    e.preventDefault();
    img.setAttribute("src", `img/${n + 1}.png`);
    nname = obj[n];
    console.log(nname);
    console.log(n);
  });
  btok.addEventListener("click", (e) => {
    e.preventDefault();
    //5번 alert , focus
    console.log("btok clicked");
    if (input.value == "") {
      alert("단어를 입력하세요.");
      input.focus();
    }
    //6번 총 횟수 맞춘 횟수
    total = total + 1;

    if (input.value == nname) {
      correct = correct + 1;
      // 7번.재입력 방지.
      input.value = "";
    }
    console.log(total);
    console.log(correct);
    result.innerHTML = `<h2>총${total}번 ${correct}맞춤</h2>`;
  });
  //8번 단어연습 초기화
  bts[2].addEventListener("click", () => {
    console.log("bt3 clicked");
    total = 0;
    correct = 0;
    result.innerHTML = `<h2>총${total}번 ${correct}맞춤</h2>`;
    input.value = "";
  });
});
