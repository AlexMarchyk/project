const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели ?","");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели ?","");
        }
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', "");
            const b = prompt('На сколько оцените его?', "");
            if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length <50 ){
                personalMovieDB.movies[a]=b;
                alert('Done!');
            }else {
                alert('incorrect data!');
                i--;
            }
        }
    },
    detectPersonalLevel : function (){
        if(personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert('Вы классический зритель');
            } else if (personalMovieDB.count >= 30){
                alert('Вы киноман');
            }else{
                alert('errror');
            }
    
    },
    showMyDB :function (hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i < 4; i++ ){
            let genre  = prompt(`Ваш любимый жанр под номером  ${i}`);
           if(genre === '' || genre == null){
                console.log("Вы ввели некорректные данные");
                i--;
           }else {
            personalMovieDB.genres.push(genre);
           }
        }
        personalMovieDB.genres.forEach(function(item,i){
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

    

};