const mainContainer = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  return main;
};

const homeContent = (main) => {
  const header = document.createElement('h1');
  const paragraph = document.createElement('p');

  header.textContent = 'Anteiku';
  paragraph.textContent = 'Online order and delivery available. ';

  main.appendChild(header);
  main.appendChild(paragraph);

  return main;
};

export { mainContainer, homeContent };