import {filmCardTemplate} from './film-template';
import {generateNumber} from './helpers';
import {readyFilterList} from './data';
import {
  mainNavigationElement,
  filmsListContainer,
  topRatedFilmsListContainer,
  mostCommentedFilmsListContainer,
} from './constants';

const renderFilterList = (filters) => {
  mainNavigationElement.innerHTML = ``;
  filters.forEach((filter) => {
    mainNavigationElement.insertAdjacentHTML(`afterbegin`, filter);
  });
};
const renderFilmCards = (cardTemplate, container, number) => {
  container.innerHTML = ``;
  for (let i = 0; i < number; i++) {
    container.insertAdjacentHTML(`afterbegin`, cardTemplate);
  }
};
const renderFilmCardsInFilterHandler = (evt) => {
  evt.preventDefault();
  renderFilmCards(filmCardTemplate, filmsListContainer, generateNumber(1, 10));
};

renderFilterList(readyFilterList);

renderFilmCards(filmCardTemplate, filmsListContainer, 7);
renderFilmCards(filmCardTemplate, topRatedFilmsListContainer, 2);
renderFilmCards(filmCardTemplate, mostCommentedFilmsListContainer, 2);

mainNavigationElement.addEventListener(`click`, renderFilmCardsInFilterHandler);

