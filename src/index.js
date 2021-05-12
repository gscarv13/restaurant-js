import './assets/stylesheet/style.css';
import './assets/images/bg-m3.jpg';
import './assets/images/map.png';

import renderNavigation from './scripts/navbar';
import { mainContainer, homeContent } from './scripts/home';

const loadPage = () => {
  const content = document.querySelector('#content');
  const main = mainContainer();

  content.appendChild(renderNavigation());

  homeContent(main);
  content.appendChild(main);
};

loadPage();