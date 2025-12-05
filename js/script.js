const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburger.classList.toggle("active");
});
