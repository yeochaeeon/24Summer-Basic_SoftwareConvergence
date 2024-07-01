const Convert = (lsel, rsel, label1, label2) => {
  if (lsel.value === "℃") {
    rsel.value = "℉";
    label1.textContent = "℃";
    console.log(`label1 changed to ${label1.textContent}`);
    label2.textContent = "℉";
    console.log(`label2 changed to ${label2.textContent}`);
  } else {
    rsel.value = "℃";
    label1.textContent = "℉";
    console.log(`label1 changed to ${label1.textContent}`);
    label2.textContent = "℃";
    console.log(`label2 changed to ${label2.textContent}`);
  }
  console.log("convert function ended");
};

const txtConvert = (txt1, txt2, label1) => {
  if (label1.textContent == "℃") {
    txt2.value = (9 / 5) * txt1.value + 32;
  } else {
    txt2.value = (txt1.value - 32) * (5 / 9);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const inputSel = document.querySelector("#lsel");
  const outputSel = document.querySelector("#rsel");

  const txt1 = document.querySelector("#txt1");
  const txt2 = document.querySelector("#txt2");

  const label1 = document.querySelector("#label1");
  const label2 = document.querySelector("#label2");

  inputSel.addEventListener("change", () => {
    console.log("left select changed");
    Convert(inputSel, outputSel, label1, label2);
  });

  txt1.addEventListener("change", () => {
    txtConvert(txt1, txt2, label1);
  });
});
