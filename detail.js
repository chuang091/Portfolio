const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', function() {
    let currentIndex = 0;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0) {
            currentIndex = index;
        }
    });

    nav.classList.toggle('top', currentIndex !== 0);

    navLinks.forEach((link, index) => {
        link.style.backgroundColor = currentIndex === index ? '#D2DAFF' : 'transparent';
        link.style.color = currentIndex === index ? '#ffffff' : '#ffffff';
    });
});

document.querySelectorAll('.project-info').forEach((button) => {
    button.addEventListener('click', (event) => {
        const project = event.target.getAttribute('data-project');
        window.location.href = `${project}-info.html`;
    });
});

document.getElementById('more-projects').addEventListener('click', () => {
    window.location.href = 'other-projects.html';
});
