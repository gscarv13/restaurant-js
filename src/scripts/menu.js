const renderMenu = (main) => {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid');

  for (let i = 0; i < 4; i += 1) {
    const dishItem = document.createElement('div');
    const dishName = document.createElement('h2');
    const dishDescription = document.createElement('p');
    const dishPrice = document.createElement('h3');

    dishName.textContent = 'Dish';
    dishDescription.textContent = ' Some description of the dish goes here, and also add some more description';
    dishPrice.textContent = '$20';

    dishItem.classList.add('dish-item');
    dishItem.appendChild(dishName);
    dishItem.appendChild(dishDescription);
    dishItem.appendChild(dishPrice);

    gridContainer.appendChild(dishItem);
  }

  return main.appendChild(gridContainer);
};

export default renderMenu;