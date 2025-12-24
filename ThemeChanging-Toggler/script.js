let modeBtn = document.querySelector("#mode");
let mode = "light";
let img = document.querySelector("#modeImg");

modeBtn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("#mode").style.backgroundColor = "white";
    document.querySelector("#mode").style.color = "black";
    img.src = "light.png";
    modeBtn.style.borderRadius = "100%";
  } else {
    mode = "light";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("#mode").style.backgroundColor = "black";
    document.querySelector("#mode").style.color = "white";
    img.src = "dark.png";
  }

  console.log(mode);
});
