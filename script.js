var sideNavbar = document.querySelector(".side-navbar");

function showNavbar() {
    sideNavbar.style.left = "0";
}

function closeNavbar() {
    sideNavbar.style.left = "-70%";
}

window.onbeforeunload = function () {
    window.location.href = '/'; // Redirect to home page, assuming '/' is your home URL
};