const informations = document.querySelector('.informationsContainer');

const peoples = [
  {
    name: 'Filipe Alexandre',
    fullName: 'Filipe Alexandre Murilo Ramos',
    street: 'Rua José Barbosa, 5430',
    city: 'Auriflama',
    state: 'São Paulo',
    country: 'Brasil',
    telephone: '+55 (17) 98551-9936',
    birthday: '22/11/1996',
  },

  {
    name: 'Renata Sueli',
    fullName: 'Renata Sueli Marina Mendes',
    street: 'Avenida Doutor Carlos Botelho, 403',
    city: 'Pariquera-Açú',
    state: 'São Paulo',
    country: 'Brasil',
    telephone: '+55 (13) 98253-0930',
    birthday: '24/08/2003',
  },

  {
    name: 'Antonella Louise',
    fullName: 'Antonella Louise Carvalho',
    street: 'Parque Represa Billings III',
    city: 'Santo André',
    state: 'São Paulo',
    country: 'Brasil',
    telephone: '+55 (11) 99180-3464',
    birthday: '15/08/2003',
  },

  {
    name: 'Leonardo Thomas',
    fullName: 'Leonardo Thomas Davi Aparício',
    street: 'Rua Quatro',
    city: 'Santos',
    state: 'São Paulo',
    country: 'Brasil',
    telephone: '+55 (13) 99510-5452',
    birthday: '07/08/1994',
  }
];

peoples.map(people => {
  const rightArrow = document.createElement('img');
  rightArrow.src = './img/right-arrow.png';
  rightArrow.className = 'rightArrow';

  //Personal containers
  const fullNameContainer = document.createElement('div');
  const streetContainer = document.createElement('div');
  const cityContainer = document.createElement('div');
  const stateContainer = document.createElement('div');
  const countryContainer = document.createElement('div');
  const telephoneContainer = document.createElement('div');
  const birthdayContainer = document.createElement('div');

  //Personal details
  const name = document.createElement('p');
  const fullName = document.createElement('p');
  const street = document.createElement('p');
  const city = document.createElement('p');
  const state = document.createElement('p');
  const country = document.createElement('p');
  const telephone = document.createElement('p');
  const birthday = document.createElement('p');

  // information title
  const fullNameTitle = document.createElement('p');
  const streetTitle = document.createElement('p');
  const cityTitle = document.createElement('p');
  const stateTitle = document.createElement('p');
  const countryTitle = document.createElement('p');
  const telephoneTitle = document.createElement('p');
  const birthdayTitle = document.createElement('p');


  const shortNameContainer = document.createElement('div')
  const peopleDetails = document.createElement('div');

  //Content
  name.textContent = people.name;
  fullName.textContent = people.fullName;
  street.textContent = people.street;
  city.textContent = people.city;
  state.textContent = people.state;
  country.textContent = people.country;
  telephone.textContent = people.telephone;
  birthday.textContent = people.birthday;


  //Content titles
  fullNameTitle.textContent = 'Name: ';
  streetTitle.textContent = 'Street: ';
  cityTitle.textContent = 'City: ';
  stateTitle.textContent = 'State: ';
  countryTitle.textContent = 'Country: ';
  telephoneTitle.textContent = 'Telephone: ';
  birthdayTitle.textContent = 'Birthday: ';

  //Container title
  fullNameContainer.appendChild(fullNameTitle);
  stateContainer.appendChild(stateTitle);
  cityContainer.appendChild(cityTitle);
  stateContainer.appendChild(stateTitle);
  countryContainer.appendChild(countryTitle);
  telephoneContainer.appendChild(telephoneTitle);
  birthdayContainer.appendChild(birthdayTitle);

  //append details into containers
  fullNameContainer.appendChild(fullName)
  streetContainer.appendChild(street);
  cityContainer.appendChild(city);
  stateContainer.appendChild(state);
  countryContainer.appendChild(country);
  telephoneContainer.appendChild(telephone);
  birthdayContainer.appendChild(birthday);

  // name initial
  shortNameContainer.appendChild(name);
  shortNameContainer.appendChild(rightArrow)

  // show on screen
  informations.appendChild(shortNameContainer);
  informations.appendChild(peopleDetails);

  // peopleDetails hidden
  peopleDetails.style.display = 'none'

  shortNameContainer.addEventListener('click', () => {
    if (peopleDetails.style.display === 'none') {
      peopleDetails.style.display = 'block';
      peopleDetails.style.animation = 'move 0.5s'
      rightArrow.src = './img/arrow-down.png';

    }
    else {
      peopleDetails.style.animation = 'toRecall 0.3s';

      setTimeout(() => {
        peopleDetails.style.display = 'none';
        rightArrow.src = './img/right-arrow.png';

      }, 300)
    }
  })

  peopleDetails.appendChild(fullNameContainer);
  peopleDetails.appendChild(stateContainer);
  peopleDetails.appendChild(cityContainer);
  peopleDetails.appendChild(stateContainer);
  peopleDetails.appendChild(countryContainer);
  peopleDetails.appendChild(telephoneContainer);
  peopleDetails.appendChild(birthdayContainer);

  shortNameContainer.className = 'shortNameContainer';
  peopleDetails.className = 'peopleDetails';

  fullNameContainer.className = 'line';
  streetContainer.className = 'line';
  cityContainer.className = 'line';
  stateContainer.className = 'line';
  countryContainer.className = 'line';
  telephoneContainer.className = 'line';
  birthdayContainer.className = 'line';

  name.className = 'shortName'
  fullName.className = 'info';
  street.className = 'info';
  city.className = 'info';
  state.className = 'info';
  country.className = 'info';
  telephone.className = 'info';
  birthday.className = 'info';

  fullNameTitle.className = 'infoTitle';
  streetTitle.className = 'infoTitle';
  cityTitle.className = 'infoTitle';
  stateTitle.className = 'infoTitle';
  countryTitle.className = 'infoTitle';
  telephoneTitle.className = 'infoTitle';
  birthdayTitle.className = 'infoTitle';
});