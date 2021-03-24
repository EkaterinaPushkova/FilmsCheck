// "use strict";

let numberOfFilms = +prompt('How many films have you watched?', [19]);
document.write('the number of movies you watched - ', numberOfFilms);

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    for (let i=0; i < 2; i++) {
            const  a = prompt("The last movie you watched?"),
            b = +prompt("What's your rate for this?");

            if (a != "" && b != "" && a.length < 5 && a != null && b != null) {
            personalMoviesDB.movies[a] = b;
        }else{
            i--;  
        }
        
    }



console.log(personalMoviesDB); 