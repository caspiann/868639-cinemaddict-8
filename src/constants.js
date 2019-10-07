import {getFilmListContainer} from './helpers';

export const mainNavigationElement = document.querySelector(`.main-navigation`);
export const filmsListContainer = getFilmListContainer(0);
export const topRatedFilmsListContainer = getFilmListContainer(1);
export const mostCommentedFilmsListContainer = getFilmListContainer(2);
export const filterLabels = [
  `all`, `watchlist`, `history`, `favorites`, `stats`
];

