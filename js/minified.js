const btnHireMe=document.querySelector(".btn-hire"),btnProjects=document.querySelector(".btn-projects"),btns=[document.querySelector(".btn-home"),document.querySelector(".btn-skills"),document.querySelector(".btn-about")],sections=[document.querySelector("#home"),document.querySelector("#skills"),document.querySelector("#about")],btnHamburguer=document.querySelector(".btn--list"),navMenu=document.querySelector(".nav"),logo=document.querySelector(".logo-box");btnHamburguer.addEventListener("click",e=>{btnHamburguer.children[0].classList.toggle("active"),btnHamburguer.children[1].classList.toggle("active"),navMenu.classList.toggle("menu-active")}),btns.forEach((e,t)=>{e.addEventListener("click",()=>{event.preventDefault(),navMenu.classList.contains("menu-active")&&(btnHamburguer.children[0].classList.toggle("active"),btnHamburguer.children[1].classList.toggle("active"),navMenu.classList.toggle("menu-active")),sections.forEach(e=>{e.classList.remove("active")}),sections[t].classList.toggle("active")})}),btnHireMe.addEventListener("click",()=>{event.preventDefault(),navMenu.classList.contains("menu-active")&&(btnHamburguer.children[0].classList.toggle("active"),btnHamburguer.children[1].classList.toggle("active"),navMenu.classList.toggle("menu-active")),sections.forEach(e=>{e.classList.remove("active")}),sections[1].classList.toggle("active")}),btnProjects.addEventListener("click",()=>{event.preventDefault(),navMenu.classList.contains("menu-active")&&(btnHamburguer.children[0].classList.toggle("active"),btnHamburguer.children[1].classList.toggle("active"),navMenu.classList.toggle("menu-active")),sections.forEach(e=>{e.classList.remove("active")}),sections[2].classList.toggle("active")});