const links = document.querySelectorAll('a');
const clicks = {};
links.forEach((link) => {
    clicks[link.href] = 0;
    link.addEventListener('click', () => {
        clicks[link.href]++;
        gtag('event', 'click', {
            'event_category': 'links',
            'event_label': link.href,
            'event_action': 'click'
        });
    });
});
