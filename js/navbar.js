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

// REVEAL EFFECT - SMOOTH & ELEGANT
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 120; // semakin kecil semakin cepat muncul

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // biar elemen atas langsung tampil

reveals.forEach((el, i) => {
  el.style.transitionDelay = (i * 0.15) + "s";
});


