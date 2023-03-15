function ReadElement(selector) {
  return document.querySelector(selector);
}

const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const closeNav = ReadElement('.close-button');

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

const speakers = [
  {
    name: 'Will Smith',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker1.jpg',
  },
  {
    name: 'Will Smith',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker1.jpg',
  },
  {
    name: 'Will Smith',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker1.jpg',
  },
  {
    name: 'Will Smith',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker1.jpg',
  },
  {
    name: 'Will Smith',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker1.jpg',
  },
  {
    name: 'Will Smith',
    about: 'Hollywood actor of Enterpreneaurial legal Studies at Havard Law School',
    quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
    image: 'images/speaker1.jpg',
  },
];
// console.log(speakers)
document.querySelector('.speaker-holder').innerHTML = speakers.map((speak) => `
<div class="container speaker-card mt-4">
<div class="image-holder">
    <img src=${speak.image} width="120" height="90%" alt="speaker 1">
</div>
<div class="speaker-info pl-4">
    <h4 class="speaker-name">${speak.name}</h4>
    <i class="speaker-about">${speak.about}</i>
    <hr class="line-breaker">
    <p class="speaker-quote">${speak.quote}</p>
</div>
</div>`).join('');

const programs = [
  {
    title: 'Director',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/conference.png',
  },
  {
    title: 'Director',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/conference.png',
  },
  {
    title: 'Director',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/conference.png',
  },
  {
    title: 'Director',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/conference.png',
  },
  {
    title: 'Director',
    message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
    icon: 'images/conference.png',
  },

];

document.querySelector('.program-holder').innerHTML = programs.map((program) => `
    <div class="container p-2 ">
        <div class="d-flex align-items-center program-card p-2">
            <img src=${program.icon} width="50" height="50" alt="lecture">
            <h4 class="program-title px-2">${program.title}</h4>
            <span class="px-1 text-white">${program.message}</span>
        </div>
    </div>
`).join('');