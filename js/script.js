let barMenu = document.getElementById("barMenu");
let menuUl = document.getElementById("menuUL");

barMenu.addEventListener("click", function() {
    if (menuUl.classList.contains("menu-horiz")) {
        menuUl.classList.remove("menu-horiz");
        menuUl.classList.add("menu-responsive");
    }
    else {
        menuUl.classList.add("menu-horiz");
        menuUl.classList.remove("menu-responsive");
    }
})
     