const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

let backToTop = document.getElementById("back-to-top");
backToTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > visualViewport.height * .9 || document.documentElement.scrollTop > visualViewport.height * .9) {
        backToTop.classList.remove("back-to-top__hidden");
    } else {
        backToTop.classList.add("back-to-top__hidden");
    }
}

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})