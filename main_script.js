// "use strict";

let numberOfFilms;

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    countFilms: function (){
        numberOfFilms = +prompt('How many films have you watched?', [11]);
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many films have you watched?', [11]);
        }
    },
    rememberMyFilms: function (){
        for (let i=0; i < 2; i++) {
                const  a = prompt("The last movie you watched?"),
                b = +prompt("What's your rate for this?");
    
                if (a != "" || b != "" && a.length < 5 && a != null && b != null) {
                personalMoviesDB.movies[a] = b;
            }else{
                i--;  
            }
        }
    },
    getStatus: function (){
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
    },
    showMyDB: function(){
        if (personalMoviesDB.privat == false){
            console.log(personalMoviesDB);
        }
     },
     writeYourGenres: function (){
        for(i = 1; i <=3 ; i++){
           personalMoviesDB.genres[i-1] = prompt(`Your favorite genre at number${i}`, '');
        }
    },
    toggleVisibleMyDB: function(){
        console.log(`visible your DB is ${this.privat}`);
        if (this.privat === true){
            privat = false;
        }else{
            privat = true;
        }
        console.log(`now visible your DB is ${this.privat}`);
    }

};
personalMoviesDB.toggleVisibleMyDB();


// countFilms();

// getStatus();

// showMyDB();

// console.log(typeof(numberOfFilms));

// console.log(personalMoviesDB.movies);

// console.log(personalMoviesDB.genres);

// rememberMyFilms();

//more beauty ex:
// function showMyDB(hidden){
//     if (!hidden){
//         console.log(personalMoviesDB);
//     }
//  }



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