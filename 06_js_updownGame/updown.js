document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input[type=number]");
  const button = document.querySelector("#bt");
  const img = document.querySelector("img");
  let flag = true;
  let nCom = 0;

  const init = () => {
    img.setAttribute("src", "./img/what.png");
    input.value = "";
    input.style.display = "inline";
    button.value = "제출";
    flag = true;
  };

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (flag == true) {
      nCom = Math.floor(Math.random() * 100) + 1;
      console.log(`nCom == ${nCom}`);
      flag = false;
    }

    let nUser = input.value;
    console.log(`nUser = ${nUser}`);

    if (nCom > nUser) {
      img.setAttribute("src", "./img/up.png");
      console.log(`flag == ${flag}`);
    } else if (nCom < nUser) {
      img.setAttribute("src", "./img/down.png");
      console.log(`flag == ${flag}`);
    } else {
      img.setAttribute("src", "./img/good.png");
      input.style.display = "none";
      button.value = "번호를 다시 생성하세요";
      button.addEventListener("click", (e) => {
        e.preventDefault();
        init();
      });
    }
  });
});
