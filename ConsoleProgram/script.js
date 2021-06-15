"use strict";

const NumberOfFilms = +prompt("How many films did you watch?", '');

const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function films () {
    for(let i = 0; i < 2; i++) {
        let a = prompt("The last movie?", '');
        let b = +prompt("Mark?", '');
        console.log(typeof(b));
        personalMovieDB.movies[a] = b;   
    }
    
    console.log(personalMovieDB.movies);
}

films();
