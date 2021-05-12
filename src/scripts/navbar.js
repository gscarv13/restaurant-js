const renderNavigation = () => {
  const navbar = document.createElement('nav');

  const logoContainer = document.createElement('div');
  const logoLink = document.createElement('a');

  const menuContainer = document.createElement('div');
  const menuLinkWrapper = document.createElement('div');
  const contactLinkWrapper = document.createElement('div');
  const aboutLinkWrapper = document.createElement('div');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');
  const aboutLink = document.createElement('a');

  navbar.classList.add('navbar');

  logoContainer.classList.add('logo');
  logoLink.textContent = '食';
  logoContainer.appendChild(logoLink);

  menuContainer.classList.add('menu');

  menuLinkWrapper.classList.add('item-box');
  menuLink.textContent = 'Menu';
  menuLinkWrapper.appendChild(menuLink);

  contactLinkWrapper.classList.add('item-box');
  contactLink.textContent = 'Contact';
  contactLinkWrapper.appendChild(contactLink);

  aboutLinkWrapper.classList.add('item-box');
  aboutLink.textContent = 'About';
  aboutLinkWrapper.appendChild(aboutLink);

  menuContainer.appendChild(menuLinkWrapper);
  menuContainer.appendChild(contactLinkWrapper);
  menuContainer.appendChild(aboutLinkWrapper);

  navbar.appendChild(logoContainer);
  navbar.appendChild(menuContainer);

  return navbar;
};

export default renderNavigation;