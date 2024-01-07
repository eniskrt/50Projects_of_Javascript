const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=17119e7b12e081485c55f12a487bcfba";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=17119e7b12e081485c55f12a487bcfba&querry="

let movieCardContainer = document.getElementById("movieCardContainer");
let search = document.getElementById("search");
let cards =""


fetch(API_URL)
    .then(resp =>resp.json())
    .then(data =>{
        console.log(data.results);
        fillMovies(data.results)
    })


const fillMovies = (data) => { 
    data.forEach(movie => {
        createMovieCard(movie)
        movieCardContainer.innerHTML = cards
    });
 }


 const createMovieCard = (movie) => { 
    cards +=`
    <div class="col">
                <div class="card h-100">
                    <img src="${IMG_PATH}${movie.poster_path}" class="card-img-top" alt=${movie.title}>
                    <div class="card-body">
                        <div class="movie-info d-flex align-items-center justify-content-between">
                            <h5 class="card-title">${movie.title}</h5>
                            <span class="badge bg-${setBadgeColor(movie.vote_average)}">${(movie.vote_average).toFixed(1)}</span>
                        </div>
                  </div>
                  <div class="overview p-2">
                    <h3>${movie.title}</h3>
                    <p>
                    ${movie.overview}
                    </p>
                    <p class="text-light">Release Date : ${movie.release_date}</p>
                    <p class="mt-0">Rated by ${movie.vote_count} pepople.</p>
                </div>
            </div>
            </div>`
  }

  const setBadgeColor = (rate) => { 
        if (rate >= 8) {
            return "success"
        }
        else if(rate >= 6){
            return "warning"
        }
        else{
            return "danger"
        }
   }

 search.addEventListener("keyup",(e)=>{
    e.preventDefault();

    let searchedTerm =  e.target.value

    fetch(SEARCH_API + searchedTerm)
            .then(resp=>resp.json())
            .then(data=>console.log(data))
 });