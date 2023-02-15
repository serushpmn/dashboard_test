let solid_button = document.getElementById("solid-link");
let outline_button = document.getElementById("outline-link");
let outline_2x_button = document.getElementById("outline-2x-link");
let dashed_button = document.getElementById("dashed-link");
let solid_tab = document.getElementById("solid-tab");
let outline_tab = document.getElementById("outline-tab");
let outline_2x_tab = document.getElementById("outline-2x-tab");
let dashed_tab = document.getElementById("dashed-tab");
let hide = document.getElementById("hide");
let outline_test = document.getElementById("outline-link");

// solid_tab.style.display === "none";
solid_button.addEventListener("click", () => {
  console.log("show only solid");
  solid_tab.style.display = "";
  outline_tab.style.display = "none";
  outline_2x_tab.style.display = "none";
  dashed_tab.style.display = "none";
  solid_button.classList.add("active");
  outline_button.classList.remove("active");
  outline_2x_button.classList.remove("active");
  dashed_button.classList.remove("active");
});
outline_button.addEventListener("click", () => {
  console.log("show only outline");
  solid_tab.style.display = "none";
  outline_tab.style.display = "";
  outline_2x_tab.style.display = "none";
  dashed_tab.style.display = "none";
  solid_button.classList.remove("active");
  outline_button.classList.add("active");
  outline_2x_button.classList.remove("active");
  dashed_button.classList.remove("active");
});
outline_2x_button.addEventListener("click", () => {
  console.log("show only outline 2x");
  solid_tab.style.display = "none";
  outline_tab.style.display = "none";
  outline_2x_tab.style.display = "";
  dashed_tab.style.display = "none";
  solid_button.classList.remove("active");
  outline_button.classList.remove("active");
  outline_2x_button.classList.add("active");
  dashed_button.classList.remove("active");
});
dashed_button.addEventListener("click", () => {
  console.log("show only dashed");
  solid_tab.style.display = "none";
  outline_tab.style.display = "none";
  outline_2x_tab.style.display = "none";
  dashed_tab.style.display = "";
  solid_button.classList.remove("active");
  outline_button.classList.remove("active");
  outline_2x_button.classList.remove("active");
  dashed_button.classList.add("active");
});
