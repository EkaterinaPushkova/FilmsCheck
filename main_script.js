// "use strict";

let numberOfFilms = +prompt('How many films have you watched?', [11]);
// document.write('the number of movies you watched - ', numberOfFilms);
// alert('the number of movies you watched - ', numberOfFilms);
alert(`the number of movies you watched - ${numberOfFilms}`);

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

switch ( personalMoviesDB.count){
    case 2: 
    //  document.write("You are is a normally viewer");
        alert("You are is a normally viewer");
        break;
    case 4:
        alert("You are is a movie fan");
        break;
    case 8:
        alert("You are is a CRAZY MEGA MOVIE HERO");
        break;
    default:
       alert("error");
}