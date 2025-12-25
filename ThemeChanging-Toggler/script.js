let modeBtn = document.querySelector("#mode");
let mode = "light";
let img = document.querySelector("#modeImg");
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector("#mode").style.backgroundColor = "white";
    // document.querySelector("#mode").style.color = "black";
    body.classList.remove("light");
    body.classList.add("dark");
    img.src = "light.png";
    modeBtn.style.borderRadius = "100%";
  } else {
    mode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    // document.querySelector("#mode").style.backgroundColor = "black";
    // document.querySelector("#mode").style.color = "white";
    body.classList.remove("dark");
    body.classList.add("light");
    img.src = "dark.png";
  }

  console.log(mode);
});
