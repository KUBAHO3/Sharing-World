function ReadElement(selector) {
  return document.querySelector(selector);
}

const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const closeNav = ReadElement('.close-button');
const choose = ReadElement('.menu-list-mobile');

function AddMenu(selected, modalPart, opener) {
  return selected.addEventListener('click', () => {
    modalPart.classList.add(opener);
    modalPart.style.top = '0px';
  });
}

function RemoveMenu(selected, modalPart, remover) {
  return selected.addEventListener('click', () => modalPart.classList.remove(remover));
}

AddMenu(menu, nav, 'nav-toggle');
RemoveMenu(closeNav, nav, 'nav-toggle');
RemoveMenu(choose, nav, 'nav-toggle');

const speakers = [
  {
    name: 'Chadwick B.',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker1.jpg',
  },
  {
    name: 'Michael BJ.',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker2.jpg',
  },
  {
    name: 'Lupita N.',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker3.jpg',
  },
  {
    name: 'Letitia W.',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker4.jpg',
  },
  {
    name: 'Martin F.',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker5.jpg',
  },
  {
    name: 'Winstone D.',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker6.jpg',
  },
];

document.querySelector('.speaker-holder').innerHTML = speakers.map((speak) => `
<article  class="col-12 col-md-6 speaker-card mt-4">
  <div class="image-holder">
      <img src=${speak.image} width="120" height="90%" alt="speaker 1">
  </div>
  <div class="speaker-info pl-4 pt-4">
      <h4 class="speaker-name">${speak.name}</h4>
      <i class="speaker-about">${speak.about}</i>
      <hr class="line-breaker">
      <p class="speaker-quote">${speak.quote}</p>
  </div>
</article >`).join('');

const programs = [
  {
    title: 'Director',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/program_icon_01.png',
  },
  {
    title: 'Exhibition',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/program_icon_02.png',
  },
  {
    title: 'Forum',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/program_icon_03.png',
  },
  {
    title: 'Workshop',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/program_icon_04.png',
  },
  {
    title: 'CC Ignite',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/program_icon_05.png',
  },

];

document.querySelector('.program-holder').innerHTML = programs.map((program) => `
    <article  class="container p-2 ">
        <div class="d-flex align-items-center program-card p-2">
            <img src=${program.icon} width="50" height="50" alt="lecture">
            <h4 class="program-title px-2">${program.title}</h4>
            <span class="px-1 text-white">${program.message}</span>
        </div>
    </article >
`).join('');