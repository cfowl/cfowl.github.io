function toggleNav() {
    document.getElementsByClassName("menu-show")[0].classList.toggle("nav-show");

    if (document.getElementById("menu-button").innerHTML === "CLOSE") {
        document.getElementById("menu-button").innerHTML = "MENU";
    } else {
        document.getElementById("menu-button").innerHTML = "CLOSE";
    }
}