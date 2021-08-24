
// let  numberOfFilms;
    
// function start (){
//     numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?","");
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
//         numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?","");
//     }
// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', "");
//         const b = prompt('На сколько оцените его?', "");
//         if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length <50 ){
//             personalMovieDB.movies[a]=b;
//             alert('Done!');
//         }else {
//             alert('incorrect data!');
//             i--;
//         }
//     }
// }

// rememberMyFilms();



// function detectPersonalLevel(){
//     if(personalMovieDB.count < 10){
//         alert('Просмотрено довольно мало фильмов');
//     }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         alert('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30){
//             alert('Вы киноман');
//         }else{
//             alert('errror');
//         }

// }
// detectPersonalLevel();

// function showMyDB  (hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }

// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for (let i = 1; i < 4; i++ ){
//         const a = prompt(`Ваш любимый жанр под номером  ${i}`);
//         if(a !== null && a !== '' &&  a.length ){
//             personalMovieDB.genres.push(a);
//         }else {
//             alert('incorrect data!');
//             i--;
//         }
//     }
    

// }

//  writeYourGenres();

// console.log(personalMovieDB);

let arr = [1,5,12];
arr.forEach(function(item,i){
    console.log(item,i);
});