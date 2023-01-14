const links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.color = 'red';
    });
    link.addEventListener('mouseout', (event) => {
        event.target.style.color = '#0077c9';
    });
});
