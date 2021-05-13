import './assets/stylesheet/style.css';
import './assets/images/bg-m3.jpg';

import renderNavigation from './scripts/navbar';
import { mainContainer, homeContent } from './scripts/home';
import renderFooter from './scripts/footer';
import renderMenu from './scripts/menu';
import renderAbout from './scripts/about';
import renderContact from './scripts/contact';

const main = mainContainer();

const loadPage = () => {
  const content = document.querySelector('#content');

  content.appendChild(renderNavigation());

  homeContent(main);
  content.appendChild(main);
  content.appendChild(renderFooter());
};

loadPage();

const clearDiv = () => {
  const main = document.querySelector('.main');
  while (main.lastChild) {
    main.removeChild(main.lastChild);
  }
  return main;
};

const clearSelected = () => {
  const menuContainer = document.querySelector('.menu').children;
  for (let i = 0; i < 3; i += 1) {
    if (menuContainer[i].classList.contains('selected')) {
      menuContainer[i].classList.remove('selected');
    }
  }
};

const loadHome = () => {
  const main = clearDiv();
  clearSelected();
  homeContent(main);
  return main;
};

const loadMenu = () => {
  const link = document.querySelector('.menuListener');
  const main = clearDiv();
  clearSelected();
  link.parentElement.classList.add('selected');
  renderMenu(main);
  return main;
};

const loadContact = () => {
  const link = document.querySelector('.contactListener');
  const main = clearDiv();
  clearSelected();
  link.parentElement.classList.add('selected');
  renderContact(main);
  return main;
};

const loadAbout = () => {
  const link = document.querySelector('.aboutListener');
  const main = clearDiv();
  clearSelected();
  link.parentElement.classList.add('selected');
  renderAbout(main);
  return main;
};

const menuLink = document.querySelector('.menuListener');
const contactLink = document.querySelector('.contactListener');
const aboutLink = document.querySelector('.aboutListener');
const logo = document.querySelector('.logo');

menuLink.addEventListener('click', loadMenu);
contactLink.addEventListener('click', loadContact);
aboutLink.addEventListener('click', loadAbout);
logo.addEventListener('click', loadHome);
