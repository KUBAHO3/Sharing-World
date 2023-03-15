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
