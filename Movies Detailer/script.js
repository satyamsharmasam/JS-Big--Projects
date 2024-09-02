const searchForm = document.querySelector('.search')
const input = document.querySelector('.search-input')
const main = document.querySelector('main')
const h2=document.querySelector('main h2')
const movieContainer=document.querySelector('.content-container')


// Function to fetch movie details from OMDB API
const getMovieInfo = async (movie) => {
    try {
        const myKey = '1aef9247'
        const url = `http://www.omdbapi.com/?apikey=${myKey}&t=${movie}`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Unable to fetch')
        }

        const data = await response.json()

        // Check if the movie is found
        if (data.Response === "False") {
            throw new Error('NO Movie found')
        }

        showMovieData(data)
    } 
    catch (error) {
        showError(error.message)
    }
}


// Function to show movie data on screen
const showMovieData = (data) => {
    movieContainer.innerHTML = ''
    // Use Destructuring assignment to extract properties from data object
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data

    const movieElement = document.createElement('div')
    movieElement.classList.add('content-container-div')
    movieElement.innerHTML = `
    <img src="${Poster}" alt="">
    <div class="content">
    <h1 class="title">${Title}</h1>
    <h5>Rating &#11088; <span class="Rating-num">${imdbRating}</span></h5>
    <div class="Genre">${Genre}</div>
    <p>Released Date: <span class="released-date">${Released}</span></p>
    <p>Duration: <span class="ruration">${Runtime}</span></p>
    <p>Cast: <span class="cast">${Actors}</span></p>
    <p>Plot: <span class="plot">${Plot}</span></p>
    </div>
    `
    movieContainer.append(movieElement)
}

// function to display error msg
const showError=(massage)=>{
movieContainer.innerHTML=`<h2>${massage}</h2>`
}

// Adding event on form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const movieName = input.value

    if (movieName !== '') {
        getMovieInfo(movieName)
    }
    
    input.value = ''
})
