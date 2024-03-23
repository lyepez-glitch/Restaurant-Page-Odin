import './style.css';

import { loadPage } from './loadPage';
import setMenu from './Menu';
import setHome from './home';
import setAbout from './about';
import menuImg from './menuImg.jpg';
import homeImg from './homeImg.jpg';
import aboutImg from './aboutImg.jpg';

console.log("testing webpack again");
const homeBtn = setHome();
const menuBtn = setMenu();
const aboutBtn = setAbout();

document.addEventListener('DOMContentLoaded', () => {
    loadPage(homeImg, "This is home");
});
homeBtn.addEventListener("click", () => loadPage(homeImg, "This is home"));
menuBtn.addEventListener("click", () => loadPage(menuImg, "This is menu"));
aboutBtn.addEventListener("click", () => loadPage(aboutImg, "This is about"));







loadPage();