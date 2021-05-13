const renderContact = (main) => {
  const contactContainer = document.createElement('div');
  const title = document.createElement('h2');
  const phone = document.createElement('p');
  const addressTitle = document.createElement('h2');
  const address1 = document.createElement('div');
  const address2 = document.createElement('p');
  const takeOut = document.createElement('p');
  const patio = document.createElement('p');

  contactContainer.classList.add('contact');

  title.textContent = 'Contact';
  phone.textContent = '216-865-1486';
  addressTitle.textContent = 'Location';
  address1.textContent = '3222  Sunny Glen Lane';
  address2.textContent = 'leveland, OH 44114';
  takeOut.textContent = 'Take Out Hours: Thurs-Sun 4:00pm-8:30pm';
  patio.textContent = 'Patio Dining: Thurs-Sun 4:30pm-8:00pm';

  contactContainer.append(title, phone, addressTitle, address1, address2, takeOut, patio);

  main.appendChild(contactContainer);
};

export default renderContact;