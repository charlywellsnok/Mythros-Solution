const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("navmenu");

hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active");
});