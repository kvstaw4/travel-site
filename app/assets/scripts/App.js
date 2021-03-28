import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'


let mobileMenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll('.advise__item'), 75);
new RevealOnScroll(document.querySelectorAll('.featured__left'), 60);
new RevealOnScroll(document.querySelectorAll('.featured__stories-item'), 60);

let stickyHeader = new StickyHeader();

if (module.hot) {
    module.hot.accept()
}