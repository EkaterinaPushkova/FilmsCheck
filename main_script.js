let numberOfFilms = prompt('How many films have you watched?', [19]);
document.write('the number of movies you watched - ', numberOfFilms);

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
