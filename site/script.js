const hamborgir=document.querySelector(".hamborgir");
const navMenu=document.querySelector(".nav-menu");
var body=document.querySelector("body");

hamborgir.addEventListener("click", () => {
            hamborgir.classList.toggle("active");
            navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamborgir.classList.remove("active");
    navMenu.classList.remove("active");
}))
