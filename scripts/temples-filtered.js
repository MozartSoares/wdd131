const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8454-thumb.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44766,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054-thumb.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 8800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154-thumb.jpg"
  }
];

const createTemples = (temples) => {
  const templeContainer = document.getElementById('temples-container');
  temples.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('card');

    const templeFigure = document.createElement('figure');

    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.templeName;
    templeImage.attributes.loading = 'lazy';

    const templeName = document.createElement('figcaption');
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement('p');
    templeLocation.textContent = `Location: ${temple.location}`;

    const templeDedicated = document.createElement('p');
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const templeArea = document.createElement('p');
    templeArea.textContent = `Area: ${temple.area} sq ft`;

    templeCard.appendChild(templeFigure);
    templeFigure.appendChild(templeImage);
    templeFigure.appendChild(templeName);
    templeFigure.appendChild(templeLocation);
    templeFigure.appendChild(templeDedicated);
    templeFigure.appendChild(templeArea);

    templeContainer.appendChild(templeCard);
  });
};


const filterTemples = (condition) => {
  let filteredTemples = [];
  const filtername = document.getElementById('filter-name');
  filtername.textContent = condition.charAt(0).toUpperCase() + condition.slice(1);
  switch (condition) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
      filtername.textContent = 'Home'
  }

  createTemples(filteredTemples);
}


const clearTemples = () => {
  const templeContainer = document.getElementById('temples-container');
  templeContainer.innerHTML = '';
}

const updateView = (filter, activeId) => {
  clearTemples();
  filterTemples(filter);
  setActiveClass(activeId);
};

const setActiveClass = (id) => {
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.classList.remove('active-link');
  });
  document.getElementById(id).classList.add('active-link');
};

document.getElementById('home').addEventListener('click', (e) => {
  e.preventDefault();
  updateView('', 'home');
});

document.getElementById('old').addEventListener('click', (e) => {
  e.preventDefault();
  updateView('old', 'old');
});

document.getElementById('new').addEventListener('click', (e) => {
  e.preventDefault();
  updateView('new', 'new');
});

document.getElementById('large').addEventListener('click', (e) => {
  e.preventDefault();
  updateView('large', 'large');
});

document.getElementById('small').addEventListener('click', (e) => {
  e.preventDefault();
  updateView('small', 'small');
});

window.addEventListener("load", filterTemples(''));