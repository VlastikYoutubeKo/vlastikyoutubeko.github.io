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
})