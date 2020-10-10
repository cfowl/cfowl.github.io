function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

    if (document.getElementById("menu-button").innerHTML === "Menu") {
        document.getElementById("menu-button").innerHTML = "X";
    } else {
        document.getElementById("menu-button").innerHTML = "Menu";
    }
}