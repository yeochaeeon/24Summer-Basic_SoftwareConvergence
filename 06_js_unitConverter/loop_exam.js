console.log("x1=", x);
var x = 20;
// let x = 20;
console.log("x2=", x);

let arr = [10, 20, 30];

console.log("**전통적인 반복문**");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for .. in
console.log("**for in 반복문**");
for (let i in arr) {
  console.log(arr[i]);
}

//forEach
console.log("**for each 반복문**");
arr.forEach((item, i) => console.log(`${i}=>${item}`));

//for .. of
console.log("**for of 반복문**");
for (let i of arr) {
  console.log(i);
}

for (let [i, item] of arr.entries()) {
  console.log(`${i}=>${item}`);
}
document.addEventListener("DOMContentLoaded", () => {
  const msg = document.querySelector("msg");
  msg.innerHTML = '<h2 style="color:blue; margin:20px;">메시지영역</h2>';
});
