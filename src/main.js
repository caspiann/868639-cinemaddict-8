import {generateNumber} from './helpers';
import filmCardData from './film-card/film-data';
import filmCardTemplate from './film-card/film-template';
import {
  mainNavigationElement,
  filmsListContainer,
  topRatedFilmsListContainer,
  mostCommentedFilmsListContainer, filmCountsInList,
} from './constants';
import {readyFilterList} from './filters/filter-data';

const renderFilterList = (filters) => {
  mainNavigationElement.innerHTML = ``;
  filters.forEach((filter) => {
    mainNavigationElement.insertAdjacentHTML(`afterbegin`, filter);
  });
};
const renderFilmCards = (cardTemplate, container, number) => {
  container.innerHTML = ``;
  for (let i = 0; i < number; i++) {
    container.insertAdjacentHTML(`afterbegin`, cardTemplate(filmCardData()));
  }
};
const renderFilmCardsInFilterHandler = (evt) => {
  evt.preventDefault();
  renderFilmCards(filmCardTemplate, filmsListContainer, generateNumber(1, 10));
};

renderFilterList(readyFilterList);

renderFilmCards(filmCardTemplate, filmsListContainer, filmCountsInList.filmListContainer);
renderFilmCards(filmCardTemplate, topRatedFilmsListContainer, filmCountsInList.topRatedFilmsListContainer);
renderFilmCards(filmCardTemplate, mostCommentedFilmsListContainer, filmCountsInList.mostCommentedFilmsListContainer);

mainNavigationElement.addEventListener(`click`, renderFilmCardsInFilterHandler);
