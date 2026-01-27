/**
 * @author Tom Butler
 * @date 2026-01-27
 * @description On This Page navigation for long content pages.
 *              Creates a floating table of contents that highlights
 *              the current section as the user scrolls.
 */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.demo-section[id]');

    // Only show nav for pages with 3+ sections
    if (sections.length < 3) return;

    const nav = createPageNav(sections);
    document.body.appendChild(nav);

    observeSections(sections, nav);
    setupNavClicks(nav);
});

/**
 * Creates the floating navigation element
 * @param {NodeList} sections - The demo sections on the page
 * @returns {HTMLElement} The navigation element
 */
function createPageNav(sections) {
    const nav = document.createElement('nav');
    nav.className = 'page-nav';
    nav.setAttribute('aria-label', 'On this page');

    const heading = document.createElement('span');
    heading.className = 'page-nav-heading';
    heading.textContent = 'On this page';
    nav.appendChild(heading);

    const list = document.createElement('ul');
    list.className = 'page-nav-list';

    sections.forEach(section => {
        const id = section.id;
        const title = section.querySelector('.section-title');
        if (!title) return;

        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.className = 'page-nav-link';
        link.textContent = title.textContent;
        link.setAttribute('data-section', id);

        li.appendChild(link);
        list.appendChild(li);
    });

    nav.appendChild(list);
    return nav;
}

/**
 * Sets up IntersectionObserver to highlight current section
 * @param {NodeList} sections - The demo sections to observe
 * @param {HTMLElement} nav - The navigation element
 */
function observeSections(sections, nav) {
    const observerOptions = {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const links = nav.querySelectorAll('.page-nav-link');

                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-section') === id);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

/**
 * Handles smooth scrolling when nav links are clicked
 * @param {HTMLElement} nav - The navigation element
 */
function setupNavClicks(nav) {
    nav.addEventListener('click', (e) => {
        if (e.target.matches('.page-nav-link')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);

            if (target) {
                const header = document.querySelector('.site-header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}
