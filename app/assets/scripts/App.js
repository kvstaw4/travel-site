import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'


let mobileMenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll('.advise__item'), 75);
new RevealOnScroll(document.querySelectorAll('.featured__left'), 60);
new RevealOnScroll(document.querySelectorAll('.featured__stories-item'), 60);


if (module.hot) {
    module.hot.accept()
}