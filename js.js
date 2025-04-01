document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('change', function () {
        if (this.checked) {
            navLinks.classList.add('active');
        } else {
            navLinks.classList.remove('active');
        }
    });

    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            if (menuToggle.checked) {
                menuToggle.checked = false;
                navLinks.classList.remove('active');
            }
        });
    });
});
