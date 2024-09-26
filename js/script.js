const btnMenu = document.querySelector(".btn-menu");
const MobileMenu = document.querySelector(".mobile-menu");
const btnClose = document.querySelector(".btn-close");
btnMenu.addEventListener("click", () => {
    MobileMenu.classList.add("active");
});
btnClose.addEventListener("click", () => {
    MobileMenu.classList.remove("active");
});
