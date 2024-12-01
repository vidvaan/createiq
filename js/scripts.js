// Sticky Navbar Effect
window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Initialize ScrollReveal for animations
window.sr = ScrollReveal();

sr.reveal('.hero-section h1', {
    duration: 2000,
    origin: 'top',
    distance: '50px',
});

sr.reveal('#about', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
});

sr.reveal('#courses', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
});

sr.reveal('#contact', {
    duration: 2000,
    origin: 'right',
    distance: '100px',
});
