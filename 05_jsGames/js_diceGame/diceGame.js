document.addEventListener("DOMContentLoaded", () => {
  const imgCom = document.querySelector("#com");
  const imgUser = document.querySelector("#user");
  const buttons = document.querySelectorAll("#buttons > button");
  console.log(buttons);
  for (let bt of buttons) {
    bt.addEventListener("click", () => {
      //com의 난수 생성 및 이미지 변경
      const nCom = Math.floor(Math.random() * 6) + 1;

      console.log(`${nCom}.png`);
      imgCom.setAttribute("src", `./img/${nCom}.png`);
      //user 선택 반영 및 이미지 변경
      const nUser = parseInt(bt.textContent.charAt(0)); // 문자를 숫자로 변환
      console.log("nUser", nUser); // 콘솔에 "nUser 1" 이 출력됨.
      imgUser.setAttribute("src", `./img/${nUser}.png`);

      //결과 출력1 (h1으로) , textContent로
      const result = document.querySelector("#result > h1");
      if (nCom == nUser) {
        result.textContent = "맞음";
        console.log(`맞음 >> com: ${nCom} == user:${nUser}`);
      } else {
        result.textContent = "틀림";
        console.log(`틀림 >> (com: ${nCom}) != (user:${nUser})`);
      }
      // 결과 출력2 (div로), innerHTML로
      //   const result2 = document.querySelector("#result");
      //   if (nCom === nUser) {
      //     result2.innerHTML = "<h1>맞음</h1>";
      //   } else {
      //     result2.innerHTML = "<h1>틀림</h1>";
      //   }
    });
  }
});
