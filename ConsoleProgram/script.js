"use strict";

let NumberOfFilms;

function start() {
    NumberOfFilms = +prompt("How many films did you watch?", '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt("How many films did you watch?", '');
    }
}

start();

const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function asking() {
    for(let i = 0; i < 2; i++) {
        let a = prompt("The last movie?", '');
        let b = +prompt("Mark?", '');

        if (a != null && b != null && a != '' && b != '' && a.length  < 50) {
            console.log(typeof(b));
            personalMovieDB.movies[a] = b; 
        }
        else {
            i--;
        }
    }
}

asking();
    

function level() {
    if (personalMovieDB.count < 10) {
        console.log('Мало');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Good');
    }
    else {
        console.log('Very good');
    }
}

level();

function showDB(x) {
    if (!x) {
        console.log(personalMovieDB);
    }
}

showDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = +prompt(`Your favourite genre under number${i}?`);
        personalMovieDB.genres[i - 1] = genre; 
    }
}

writeYourGenres();