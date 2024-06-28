document.addEventListener("DOMContentLoaded", () => {
  console.log("주사위 게임 입장 ");
  const img = document.querySelector("img");
  const bt = document.querySelector("button");
  const images = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
  ];

  bt.addEventListener("click", () => {
    console.log("새로운 주사위 굴리기");
    const randomIndex = Math.floor(Math.random() * 6);
    img.src = images[randomIndex];
  });
});
