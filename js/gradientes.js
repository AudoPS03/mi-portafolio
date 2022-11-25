let boxMenuBar = document.getElementById("boxMenuBar");
let mainMenu = document.getElementById("mainMenu");

boxMenuBar.addEventListener("click", function() {
    if (mainMenu.classList.contains("main-menu-oculto")) {
        mainMenu.classList.add("main-menu-visible");
        mainMenu.classList.remove("main-menu-oculto");
    }
    else {
        mainMenu.classList.remove("main-menu-visible");
        mainMenu.classList.add("main-menu-oculto");
    }
});
