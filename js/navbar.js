const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const backBtn = document.getElementById("backBtn");

// buka menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// tombol kembali TUTUP menu
if (backBtn) {
  backBtn.addEventListener("click", () => {
    navMenu.classList.remove("show");
    hamburger.classList.remove("active");
  });
}

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

reveals.forEach((el) => observer.observe(el));
