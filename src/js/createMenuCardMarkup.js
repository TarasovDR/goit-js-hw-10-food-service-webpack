import menuCardTpl from '../templates/menu-card.hbs';
import menu from '../menu.json';

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(menu) {
  return menu.map(menuCardTpl).join('');
}
