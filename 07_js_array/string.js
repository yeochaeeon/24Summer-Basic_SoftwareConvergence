document.addEventListener("DOMContentLoaded", () => {
  //DOM요소 가져오기
  const txt1 = document.querySelector("#txt1");
  const txt2 = document.querySelector("#txt2");

  const bt1 = document.querySelector("#bt1");
  const bt2 = document.querySelector("#bt2");

  bt1.addEventListener("click", (e) => {
    e.preventDefault();
    if (txt1.value == " ") return;

    console.log(txt1.value);
    console.log(txt1.value.length); // 글자 길이 출력
    console.log(txt1.value.charAt(0)); // 첫 글자

    // for (let c of txt1.value) {
    //   console.log(c);
    // }
    // for (let i = txt1.value.length - 1; i >= 0; i--) {
    //   tm = tm + txt1.value[i];
    // }
    // console.log(tm);

    // 걍 문자 (무 떵 이)
    console.log(txt1.value);
    // 공백제거 && 출력
    noSpace = txt1.value.replaceAll(" ", "");
    console.log(`no space word == ${noSpace}`);
    //배열로 만들어줌 ['무','떵','이'] && 출력
    let arrWord = noSpace.split("");
    console.log(arrWord);
    // 역순 배열로 바꾸고 다시 글자로 합치기
    // 스플릿은 배열로 만들어주고 조인은 다시 문자열로 묶어줌
    reverseWord = noSpace.split("").reverse().join("");
    console.log(`reverseWord==${reverseWord}`);

    //원래 입력 문자 공백 제거
    txt = txt1.value.replaceAll(" ", "");
    console.log(`input without space == ${txt}`);

    //비교
    if (txt === reverseWord) {
      txt2.value = "회문입니다.";
    } else {
      txt2.value = "회문이 아닙니다.";
    }

    //공백 입력시 alert
    bt1.addEventListener("click", () => {
      if (txt1.value == "") {
        alert("글자를 입력하세요");
        txt1.focus();
        return;
      }
      let sum = 0;
      for (let c of txt1.value) {
        if (!isNaN(c)) {
          sum = sum + parseInt(c);
        }
      }
      txt2.value = sum;
    });
  });
});
