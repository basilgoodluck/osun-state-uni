const grays = document.querySelectorAll(".gray")

grays.forEach((gray)=>{
    gray.addEventListener("mouseover", ()=>{
        gray.style.setProperty("--changeDir", "65%");
        gray.style.setProperty("--opaq", "1");
    });

    gray.addEventListener("mouseout", ()=>{
        gray.style.setProperty("--changeDir", "-50%");
        gray.style.setProperty("--opaq", ".3");
    });
})

const navMenu = document.querySelector(".home .header .navMenu")

const show = function(){
    navMenu.classList.toggle("showmenu")

}
const exit = function(){
    navMenu.classList.remove("showmenu")

}