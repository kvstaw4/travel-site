class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.header__menu-icon')
        this.menuContent = document.querySelector('.header__nav-links')
        this.menuLinks = document.querySelectorAll('.header__nav-links ul li a')
        this.events()
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu())
        this.menuLinks.forEach((link) => {link.addEventListener('click', () => this.toggleTheLinks())})
        this.menuIcon.addEventListener('click', () => this.toggleTheIcon())
    }

    toggleTheLinks() {
        this.menuLinks.forEach(link => {
            link.classList.toggle('active')
            this.menuIcon.classList.toggle('active')
            this.menuContent.classList.toggle('active')
        })
    }

    toggleTheIcon() {
        this.menuIcon.classList.toggle('active')
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('active')
    }
}

export default MobileMenu