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

        if (a != null && b != null && a != '' && b != '' && a.length  < 50) {
            console.log(typeof(b));
            personalMovieDB.movies[a] = b; 
        }
        else {
            i--;
        }
    }
    
    if (personalMovieDB.count < 10) {
        console.log('Мало');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Good');
    }
    else {
        console.log('Very good');
    }

    console.log(personalMovieDB.movies);
}

films();
