document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    const hamburgerToggle = document.querySelector('.hamburger-toggle');
    const menuLinks = document.querySelector('.menu-links');

    console.log('Hamburger Toggle element:', hamburgerToggle);
    console.log('Menu Links element:', menuLinks);

    if (hamburgerToggle && menuLinks) {
        console.log('Both elements found, adding click listener.');
        hamburgerToggle.addEventListener('click', function () {
            console.log('Hamburger toggle clicked!');
            menuLinks.classList.toggle('open');
            console.log('Menu links has class open:', menuLinks.classList.contains('open'));
            // Optional: Add animation or accessibility attributes here
            hamburgerToggle.setAttribute('aria-expanded', menuLinks.classList.contains('open'));
        });

        // Optional: Close menu when a link is clicked (for single-page sites)
        menuLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuLinks.classList.remove('open');
                hamburgerToggle.setAttribute('aria-expanded', 'false');
            });
        });
    } else {
        console.log('One or both elements not found. Hamburger menu will not function.');
    }
}); 