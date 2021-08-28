document.addEventListener('DOMContentLoaded', () =>{
    

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим противgsd..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img');
const poster =document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');
const btn = document.querySelector('button');
const addForm = document.querySelector('form.add');
const addInput = addForm.querySelector('.adding__input');
const checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let newFilm = addInput.value;
    const favorite = checkbox.checked;
    if(newFilm){
        if(newFilm.length > 21){
            newFilm = `${newFilm.substring(0,22)}...`;
            
        }
        if(favorite){
            console.log('Add favorite film');
        }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
    }
    
    event.target.reset();
});

const deleteAdv = (arr) =>{
    arr.forEach(function(item){
        item.remove();
    });
    
};


const makeChanges = () =>{
    poster.style.backgroundImage ="url('/img/bg.jpg')";
    genre.textContent = 'Драма';
};


const sortArr = (arr) =>{
    arr.sort();
}



function createMovieList (films,parent){
    parent.innerHTML = " ";
    sortArr(films);

films.forEach((film,i)=>{ 
    parent.innerHTML += ` <li class="promo__interactive-item">${i+1} ${film}
    <div class="delete"></div>
</li>`;
});
    document.querySelectorAll('.delete').forEach((btn,i)=>{
        btn.addEventListener('click', () =>{
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);

            createMovieList(films, parent);

        });
    });
}

makeChanges();
deleteAdv(adv);

createMovieList(movieDB.movies, movieList);

});