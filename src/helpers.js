const filmListElements = Array.from(document.querySelector(`.films`).children);

const getFilmListTitleElements = (filmLists) => {
  const titleElements = [];
  for (let filmList of filmLists) {
    titleElements.push(filmList.querySelector(`.films-list__title`));
  }
  return titleElements;
};

export const getFilmListContainer = (number = 0) => {
  const titleElements = getFilmListTitleElements(filmListElements);
  return titleElements[number].nextElementSibling.className === `films-list__container` ?
    titleElements[number].nextElementSibling :
    null;
};

export const generateNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const ucfirst = (string) => {
  const firstUpperCaseLetter = string[0].toUpperCase();
  const lastLetters = string.slice(1);
  return `${firstUpperCaseLetter}${lastLetters}`;
};

