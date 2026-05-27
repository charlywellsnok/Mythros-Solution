const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

/* OPEN MENU */
hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

/* CLOSE MENU */
closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
