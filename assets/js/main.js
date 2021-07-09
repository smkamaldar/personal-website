// =================menu show y hidden=====================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ================ menu show ===================
// validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav__menu--show");
  });
}

// ================ menu hidden ===================
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--show");
  });
}

// ====================== hide menu with menu items=====================
// select all elements with nav__link class
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    navMenu.classList.remove("nav__menu--show");
  });
});
