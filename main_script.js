// "use strict";

const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    countFilms: function (){
        this.count = +prompt('How many films have you watched?', [11]);
    while (this.count == '' || this.count == null || isNaN(this.count)){
        this.count = +prompt('How many films have you watched?', [11]);
        }
    },
    rememberMyFilms: function (){
        for (let i=0; i < 2; i++) {
                const  a = prompt("The last movie you watched?"),
                b = +prompt("What's your rate for this?");
    
                if (a != "" || b != "" && a.length < 5 && a != null && b != null) {
                this.movies[a] = b;
            }else{
                i--;  
            }
        }
    },
    getStatus: function (){
        switch (this.count){
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
        if (this.privat == false){
            console.log(personalMoviesDB);
        }
     },
     writeYourGenres: function(){
         let genre = prompt(`Your favorite genres through a space`, '');
            if (genre == null || genre == "") {
                   i--;
            }else{
                this.genres = genre.split(' ');
            }
        // for(i = 1; i <=3 ; i++){
        //    this.genres[i-1] = prompt(`Your favorite genre at number ${i}`, '');
        //    if (this.genres[i-1] == null || this.genres[i-1] == "") {
        //        i--;
        //    }else{
        //         i = i;
        //    }
        // }
    },
    toggleVisibleMyDB: function(){
        console.log(`visible your DB is ${this.privat}`);
        if (this.privat === true){
            privat = false;
        }else{
            privat = true;
        }
        console.log(`now visible your DB is ${this.privat}`);
    },
    showMyGenres: function(){
        this.genres.forEach(function(genre, num){
            console.log(`genre #${num+1} is ${genre}`);
        });
    } 

};

personalMoviesDB.writeYourGenres();
personalMoviesDB.showMyGenres();

// personalMoviesDB.toggleVisibleMyDB();


// countFilms();

// getStatus();

// showMyDB();

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