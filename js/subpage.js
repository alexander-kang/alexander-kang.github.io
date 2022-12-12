// Have to wait for the window to fully load for a lot of the logic to work
window.onload = function () {
    // If the window is small enough, we should replace the normal links in the nav bar with a button that shows a nav menu when clicked
    if (window.innerWidth < 261) {
        document.getElementById('nav-links').innerHTML = `
        <button type="button" id="toggle-navbutton" aria-controls="nav-menu" aria-label="Toggle nav menu" aria-expanded="false">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div id="nav-menu" aria-labelledby="toggle-navbutton">
            <ul id="nav-list-mobile">
                <li><a id="projects-link" href="/index.html#projects">Projects</a></li>
                <li><a id="resume-link" href="/assets/Kang_Resume.pdf">Resume</a></li>
            </ul>
        </div>
        `;

        // Defining things for ease of use
        const toggle = document.querySelector('#toggle-navbutton');
        const menu = document.querySelector('#nav-menu');
        const list = document.querySelector('#nav-list-mobile');
        const homeLink = document.querySelector('#home-link');
        const projectsLink = document.querySelector('#projects-link');
        const resumeLink = document.querySelector('#resume-link');
        let isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        // Function that toggles whether the nav menu is visible or not
        const toggleVisibility = () => {
            isExpanded = !isExpanded;
            toggle.setAttribute('aria-expanded', isExpanded);
        };

        // Function that just closes the nav menu
        const visibilityOff = () => {
            if (isExpanded) {
                isExpanded = "false";
                toggle.setAttribute('aria-expanded', "false");
            }
        }

        // If the button is clicked, toggle the nav menu
        toggle.addEventListener('click', toggleVisibility);

        // If you click outside the nav menu, close the menu or if you click a link, close the menu
        list.addEventListener('click', (x) => x.stopPropagation());
        menu.addEventListener('click', toggleVisibility);
        homeLink.addEventListener('click', visibilityOff);
        projectsLink.addEventListener('click', visibilityOff);
        resumeLink.addEventListener('click', visibilityOff);
    }
    // If the window isn't that small, we can:
    //     * use larger footer icons for the contact info
    //     * use a larger showcase image
    else {
        // Footer icon stuff
        let footerImages = document.getElementsByClassName('footer-img');
        for (var i = 0; i < footerImages.length; i++) {
            footerImages[i].style.width = '25px';
        }

        // Showcase image stuff
        let showcaseImages = document.getElementsByClassName('showcase-img');
        for (var i = 0; i < showcaseImages.length; i++) {
            showcaseImages[i].style.width = '415px';
        }
    }
};
