const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
const backBtn = document.getElementById("backBtn");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Tombol kembali
backBtn.addEventListener("click", () => {
  nav.classList.remove("show");
  hamburger.classList.remove("active");
});
