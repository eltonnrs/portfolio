const btnHireMe = document.querySelector(".btn-hire");
const btnProjects = document.querySelector(".btn-projects")
const btns = [
    document.querySelector(".btn-home"),
    document.querySelector(".btn-skills"),
    document.querySelector(".btn-about")
]
const sections = [
    document.querySelector("#home"),
    document.querySelector("#skills"),
    document.querySelector("#about")
]
const btnHamburguer = document.querySelector(".btn--list");
const navMenu = document.querySelector(".nav");
const logo = document.querySelector(".logo-box");
btnHamburguer.addEventListener("click", (el) => {
    btnHamburguer.children[0].classList.toggle("active");
    btnHamburguer.children[1].classList.toggle("active");
    navMenu.classList.toggle("menu-active");
});

btns.forEach((el, idx) =>{
    el.addEventListener("click", ()=>{
        event.preventDefault();
        if (navMenu.classList.contains("menu-active")) {
            btnHamburguer.children[0].classList.toggle("active");
            btnHamburguer.children[1].classList.toggle("active");
            navMenu.classList.toggle("menu-active");
        }
        sections.forEach((el)=>{
            el.classList.remove("active")
        });
        sections[idx].classList.toggle("active");
    });
});

btnHireMe.addEventListener("click", ()=>{
    event.preventDefault();
    if (navMenu.classList.contains("menu-active")) {
            btnHamburguer.children[0].classList.toggle("active");
            btnHamburguer.children[1].classList.toggle("active");
            navMenu.classList.toggle("menu-active");
        }
        sections.forEach((el)=>{
            el.classList.remove("active")
        });
    sections[1].classList.toggle("active");
});



btnProjects.addEventListener("click", ()=>{
    event.preventDefault();
    if (navMenu.classList.contains("menu-active")) {
            btnHamburguer.children[0].classList.toggle("active");
            btnHamburguer.children[1].classList.toggle("active");
            navMenu.classList.toggle("menu-active");
        }
        sections.forEach((el)=>{
            el.classList.remove("active")
        });
    sections[2].classList.toggle("active");
});
