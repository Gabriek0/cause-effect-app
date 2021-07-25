const peopleContainer = document.querySelector('.peopleContainer')

const peopleInformations = [
  {
    name: 'Rodrigo',
    fullName: 'Rodrigo dos Santos',
    street: 'Paulista',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brazil',
    telephone: '707070',
    birthday: '17/10/2001'
  },

  {
    name: 'Rodrigo',
    fullName: 'Rodrigo dos Santos',
    street: 'Paulista',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brazil',
    telephone: '707070',
    birthday: '17/10/2001'
  },

]

function start() {

  peopleInformations.map(people => {
    const allPeoples = document.createElement('div')
    allPeoples.classList.add('allPeoples')

    const informations = document.createElement('div');
    informations.classList.add('informations')

    const names = document.createElement('p');
    names.classList.add('name')

    const fullName = document.createElement('p');
    const street = document.createElement('p');
    const city = document.createElement('p');
    const state = document.createElement('p');
    const country = document.createElement('p');
    const telephone = document.createElement('p');
    const birthday = document.createElement('p');


    names.addEventListener('click', () => {
      const content = allPeoples.contains(informations)

      if (content) {
        informations.remove();
      } else {

        allPeoples.appendChild(informations)
        informations.appendChild(fullName)
        informations.appendChild(street)
        informations.appendChild(city)
        informations.appendChild(state)
        informations.appendChild(country)
        informations.appendChild(telephone)
        informations.appendChild(birthday)


        fullName.textContent = `Full-name: ${people.fullName}`;
        street.textContent = `Street: ${people.street}`;
        city.textContent = `City: ${people.city}`;
        state.textContent = `State: ${people.state}`;
        country.textContent = `Country: ${people.country}`;
        telephone.textContent = `Telephone: ${people.telephone}`;
        birthday.textContent = `Birthday ${people.birthday}`;

      }
    })


    peopleContainer.appendChild(allPeoples);
    allPeoples.appendChild(names)
    names.textContent = people.name
  })
};

start();


