const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const printBtn = document.querySelector("#btn-print");


const colors = ["#2563eb", "#dc2626", "#eab308", "#16a34a"];
const shapes = document.querySelectorAll(".shape");

function setColorVariables(variant) {
  if (variant === undefined) {
    variant = 0;
  }
  const getColor = (index) => colors[(index + variant) % colors.length];

  shapes.forEach((shape, index) => {
    shape.style.setProperty("--shape-color", getColor(index + 1));
  });
}

setColorVariables(0);

btn1.addEventListener("click", () => {
  setColorVariables(0);
});

btn2.addEventListener("click", () => {
  setColorVariables(1);
});

btn3.addEventListener("click", () => {
  setColorVariables(2);
});

btn4.addEventListener("click", () => {
  setColorVariables(3);
});

printBtn.addEventListener("click", () => {
  window.print();
});