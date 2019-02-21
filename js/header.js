  // header change on scroll
window.onscroll = function() {
    myFunction()
};
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop + 150;
function myFunction() {
    var logo = document.getElementById('header-logo');
    if (window.pageYOffset >= sticky) {
        logo.src = "assets/logo-black.svg";
        navbar.classList.add("sticky");  
    } 
    else {
        logo.src = "assets/logo.svg";
        navbar.classList.remove("sticky");
    }
}