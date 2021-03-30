// "use strict";

let numberOfFilms;


function countFilms(){
        numberOfFilms = +prompt('How many films have you watched?', [11]);
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many films have you watched?', [11]);
    }
}
countFilms();
console.log(typeof(numberOfFilms));

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for (let i=0; i < 2; i++) {
            const  a = prompt("The last movie you watched?"),
            b = +prompt("What's your rate for this?");

            if (a != "" || b != "" && a.length < 5 && a != null && b != null) {
            personalMoviesDB.movies[a] = b;
        }else{
            i--;  
        }
    }

console.log(personalMoviesDB.movies); 
}
rememberMyFilms();


function getStatus(){
    switch (personalMoviesDB.count){
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
    
}
getStatus();

function showMyDB(){
   if (personalMoviesDB.privat == false){
       console.log(personalMoviesDB);
   }
}
showMyDB();

function writeYourGenres(){
    for(i = 0, i < 2, i++){
       personalMoviesDB.genres[a] = prompt(`Your favorite genre at number${i}`, '')
    }
}
console.log(personalMoviesDB.genres);

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);