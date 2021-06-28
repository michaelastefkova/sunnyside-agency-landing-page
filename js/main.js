// NAV BAR FUNCTIONALITY
const toggleMenu = (() => {
    const burgerIcon = document.querySelector('.nav__burgerIconContainer');
    const navContainer = document.querySelector('.nav__linkContainer');

    burgerIcon.addEventListener('click', () => {
        console.log('x')
        navContainer.classList.toggle('expanded');
    })
})();

// ARROW SMOOTH SCROLL ON CLICK
const arrowScroll = (() => {
    const headerArrow = document.querySelector('.header__arrow');

    headerArrow.addEventListener('click', () => {
        document.querySelector('.grid').scrollIntoView({ behavior: 'smooth' });
    })
})();
