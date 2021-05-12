import './assets/stylesheet/style.css';
import './assets/images/bg-m3.jpg';

import renderNavigation from './scripts/navbar';
import { mainContainer, homeContent } from './scripts/home';
import renderMenu from './scripts/menu';
import renderAbout from './scripts/about';
import renderContact from './scripts/contact';
import renderFooter from './scripts/footer';

const loadPage = () => {
  const content = document.querySelector('#content');
  const main = mainContainer();

  content.appendChild(renderNavigation());

  renderContact(main);
  content.appendChild(main);
  content.appendChild(renderFooter());
};

loadPage();