let barMenu = document.getElementById("barMenu");
let mainMenu = document.getElementById("mainMenu");

barMenu.addEventListener("click", function() {
if (mainMenu.classList.contains("menu-bloque-oculto")) {
    mainMenu.classList.add("menu-bloque-visible");
    mainMenu.classList.remove("menu-bloque-oculto");
}
else{
    mainMenu.classList.remove("menu-bloque-visible");
    mainMenu.classList.add("menu-bloque-oculto");
}


});