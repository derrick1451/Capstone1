const humberger = document.querySelector('.humberger');
const closeBtn = document.querySelector('.times');
const popUp = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-links');
const speakerContainer = document.querySelector('.speaker-container');
// mobile menu
humberger.addEventListener('click', () => {
  popUp.classList.toggle('nav-pop-up');
  closeBtn.classList.toggle('times-pop');
});
closeBtn.addEventListener('click', () => {
  popUp.classList.toggle('nav-pop-up');
  closeBtn.classList.toggle('times-pop');
});
navLinks.forEach((nav) => {
  nav.addEventListener('click', () => {
    popUp.classList.toggle('nav-pop-up');
    closeBtn.classList.toggle('times-pop');
  });
});
// speaker object
const speakers = [
  {
    id: 1,
    image: 'assets/lecturer1.jpg',
    heading: 'Okello John',
    text: 'Peer Educator at Reach a Hand Uganda',
    paragraph: 'John studies studio and content creation and his working on new projects',
  },
  {
    id: 2,
    image: 'assets/lecturer2.jpg',
    heading: 'Mugy Ug',
    text: 'Peer Educator at Reach a Hand Uganda',
    paragraph: 'John studies studio and content creation and his working on new projects',

  },
  {
    id: 3,
    image: 'assets/lecturer3.jpg',
    heading: 'Ekinyang Joshua ',
    text: 'Peer Educator at Reach a Hand Uganda',
    paragraph: 'Joshua studies studio and content creation and his working on new projects',

  },
  {
    id: 4,
    image: 'assets/lecturer4.jpg',
    heading: 'Ouma Pius',
    text: 'Peer Educator at Reach a Hand Uganda',
    paragraph: 'Pius studies studio and content creation and his working on new projects',

  },
  {
    id: 5,
    image: 'assets/lecturer5.jpg',
    heading: 'Matovu Geofrey',
    text: 'Peer Educator at Reach a Hand Uganda',
    paragraph: 'Geofrey studies studio and content creation and his working on new projects',

  },
  {
    id: 6,
    image: 'assets/lecturer2.jpg',
    heading: 'Aeron Ug',
    text: 'Peer Educator at Reach a Hand Uganda',
    paragraph: 'John studies studio and content creation and his working on new projects',

  },

];
speakers.forEach((speaker) => {
  const speakerBody = document.createElement('div');
  speakerBody.classList.add('speaker-card');
  speakerContainer.appendChild(speakerBody);
  speakerBody.innerHTML = `<img class="speaker-img" src="${speaker.image}" alt="lecturers">
    <div class="speaker-body">
      <h2>${speaker.heading}</h2>
      <h3>${speaker.text}</h3>
      <p>${speaker.paragraph}</p>
    </div>
    `;
});
