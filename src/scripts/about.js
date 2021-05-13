import Map from '../assets/images/map.png';

const renderAbout = (main) => {
  const container = document.createElement('div');
  const title = document.createElement('h2');
  const paragraph = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const mapImage = new Image();
  const div = document.createElement('div');

  container.classList.add('about');
  title.textContent = 'Who we are:';
  paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et iure repellendus eius minima cum sit cupiditate corporis repellat delectus.';
  paragraph2.textContent = 'Come visit us:';
  mapImage.src = Map;

  div.classList.add('img-cont');
  div.appendChild(mapImage);

  container.append(title, paragraph, paragraph2, div);
  main.appendChild(container);

  return main;
};

export default renderAbout;