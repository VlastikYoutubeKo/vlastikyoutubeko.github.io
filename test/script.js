// get all the links on the page
const links = document.querySelectorAll('a');

// loop through each link
links.forEach((link) => {
    // add a click event listener to the link
    link.addEventListener('click', () => {
        // send the event to Google Analytics
        gtag('event', 'click', {
            'event_category': 'outbound',
            'event_label': link.href
        });
    });


    // add a mouseover event listener to the link
    link.addEventListener('mouseover', () => {
        // generate a random color
        const randomColor = getRandomColor();
        // change the color of the link with a smooth transition
        link.style.transition = "color 0.5s ease-in-out";
        link.style.color = randomColor;
    });
});

// function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
