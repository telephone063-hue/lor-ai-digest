const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
        navMobile.classList.toggle('is-open');
    });

    navMobile.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('is-open');
        });
    });
}
