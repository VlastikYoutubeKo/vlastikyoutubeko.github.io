// get all the links on the page
const links = document.querySelectorAll('a');

// create an object to store the number of clicks for each link
const clicks = {};

// loop through each link
links.forEach((link) => {
    // set the initial number of clicks for the link to 0
    clicks[link.href] = 0;

    // add a click event listener to the link
    link.addEventListener('click', () => {
        // increment the number of clicks for the link
        clicks[link.href]++;
        // send the event to Google Analytics
        gtag('event', 'click', {
            'event_category': 'outbound',
            'event_label': link.href,
            'event_action': link.text,
            'transport_type': 'beacon'
          });
          
        // display the number of clicks for the link
        console.log(`Link ${link.href} has been clicked ${clicks[link.href]} times`);
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
