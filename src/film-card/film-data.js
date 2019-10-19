import {generateNumber} from "../helpers";

const postersList = [
  `accused.jpg`,
  `blackmail.jpg`,
  `blue-blazes.jpg`,
  `fuga-da-new-york.jpg`,
  `moonrise.jpg`,
  `three-friends.jpg`
];

const genreList = [
  `Action`,
  `Adventure`,
  `Biographical`,
  `Drama`,
  `Family`,
  `Fantasy`,
  `Gangster`,
  `Historical`,
];

const titleList = [
  `Joker`,
  `Hunter of Magic`,
  `Once Upon a Time... in Hollywood`,
  `Avengers: Endgame`,
  `Toy Story 4`,
  `A Dog's Journey`,
  `How to Train Your Dragon: The Hidden World`,
  `Dolor y gloria`,
  `The Birch of the Legacy`,
  `Spider-Man: Far from Home`,
  `A Rainy Day in New York`,
  `Aladdin`,
  `The Lion King`,
  `The Dirt`,
  `The Silky Dream`
];

const descriptionList = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Cras aliquet varius magna, non porta ligula feugiat eget. 
  Fusce tristique felis at fermentum pharetra. 
  Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. 
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. 
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. 
  Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.
`.split(`.`);

const getTitle = () => titleList[generateNumber(0, 14)];
const getPosterPath = () => postersList[generateNumber(0, postersList.length - 1)];
const getPicture = () => `./images/posters/${getPosterPath()}`;
const getGenre = () => genreList[generateNumber(0, genreList.length - 1)];
const getDescription = () => {
  let list = [];
  let randomPos = generateNumber(0, descriptionList.length - 2);
  for (let i = 0; i < 3; i++) {
    list.push(descriptionList[randomPos + i]);
  }
  return list;
};
const getComments = () => `${generateNumber(10, 100)} comments`;
const getYear = () => generateNumber(1960, 2019);
const getRating = () => generateNumber(0, 100) / 10;
const getDuration = () => ({hours: generateNumber(1, 3), minutes: generateNumber(0, 60)});
const getBool = () => generateNumber(0, 1);

const filmCardData = () => {
  return {
    title: getTitle(),
    picture: getPicture(),
    genre: getGenre(),
    description: getDescription(),
    comments: getComments(),
    year: getYear(),
    rating: getRating(),
    duration: `${getDuration().hours}h ${getDuration().minutes}m`,
    isFavorite: getBool(),
    isInWatchList: getBool(),
    isWatched: getBool()
  };
};

export default filmCardData;
