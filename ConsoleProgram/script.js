'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('How many films did you watch?', '');

    while (
      personalMovieDB.count === '' ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('How many films did you watch?', '');
    }
  },
  asking: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt('The last movie?', '');
      const b = +prompt('Mark?', '');

      if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
        console.log(typeof b);
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },

  level: () => {
    if (personalMovieDB.count < 10) {
      console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Good');
    } else {
      console.log('Very good');
    }
  },

  show: x => {
    if (!x) {
      console.log(personalMovieDB);
    }
  },

  toggleDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Your favourite genre under number${i}?`);

      if (genre === '' || genre === null) {
        console.log('You entered bad data');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Enter favourite number ${i + 1} ${item}`);
    });
  },
};

personalMovieDB.start();
