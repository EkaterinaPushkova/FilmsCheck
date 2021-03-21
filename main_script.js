let numberOfFilms = +prompt('How many films have you watched?', [19]);
document.write('the number of movies you watched - ', numberOfFilms);

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const   a = prompt("The last movie you watched?"),
        b = +prompt("What's your rate for this?"),
        c = prompt("The last movie you watched?"),
        d = +prompt("What's your rate for this?");

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;



console.log(personalMoviesDB); 